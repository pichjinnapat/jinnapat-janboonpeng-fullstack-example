import { NextFunction, Request, Response, Router } from "express";
import { createValidator } from "express-joi-validation";
import joi from "joi";
import { EVENT_TABLE } from "../configs/tables";
import { db } from "../database";
import { responseHandler } from "../libs/responseHandler";

const routes = Router();

export type EventType = {
  id: number;
  owner: string;
  title: string;
  message: string;
  creation_time?: Date;
  update_time?: Date;
};

const validator = createValidator();
const addEventBodySchema = joi.object({
  owner: joi.string().required(),
  title: joi.string().required(),
  message: joi.string().required(),
});
const updateEventBodySchema = joi
  .object({
    owner: joi.string(),
    title: joi.string(),
    message: joi.string(),
  })
  .min(1);

const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await db<EventType>(EVENT_TABLE.TABLE_NAME).select();
    return responseHandler(res, response);
  } catch (error) {
    next(error);
  }
};

const getEvent = async (req: Request, res: Response, next: NextFunction) => {
  const { eventId } = req.params;
  try {
    const response = await db<EventType>(EVENT_TABLE.TABLE_NAME)
      .select()
      .where(EVENT_TABLE.COLUMN_NAMES.ID, Number(eventId));

    if (response.length >= 1) return responseHandler(res, response[0]);
    else next("Event not found");
  } catch (error) {
    return next(error);
  }
};

const addEvent = async (req: Request, res: Response, next: NextFunction) => {
  const event: Omit<EventType, "id"> = req.body;

  try {
    const response = await db(EVENT_TABLE.TABLE_NAME).insert(event);
    return responseHandler(
      res,
      `Added event number ${response[0]} successfully`
    );
  } catch (error) {
    next(error);
  }
};

const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
  const { eventId } = req.params;
  const updateEvent: Partial<EventType> = req.body;

  console.log("req", req);
  try {
    const response = await db(EVENT_TABLE.TABLE_NAME)
      .update(updateEvent)
      .where(EVENT_TABLE.COLUMN_NAMES.ID, Number(eventId));

    console.log("response", response);

    if (response >= 1)
      return responseHandler(res, `Updated event id ${eventId} successfully`);
    else next("No event updated");
  } catch (error) {
    next(error);
  }
};

const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
  const { eventId } = req.params;
  try {
    const response = await db(EVENT_TABLE.TABLE_NAME)
      .where(EVENT_TABLE.COLUMN_NAMES.ID, eventId)
      .del();

    if (response >= 1)
      return responseHandler(res, `Deleted event id ${eventId} successfully`);
    else next("No event deleted");
  } catch (error) {
    next(error);
  }
};

routes.post("/", validator.body(addEventBodySchema), addEvent);

routes.get("/", getAllEvents);

routes.get("/:eventId", getEvent);

routes.put("/:eventId", validator.body(updateEventBodySchema), updateEvent);

routes.delete("/:eventId", deleteEvent);

export default routes;
