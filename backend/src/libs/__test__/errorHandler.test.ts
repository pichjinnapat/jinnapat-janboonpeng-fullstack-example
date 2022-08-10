import { errorResponder } from "../errorHandler";

describe("return error response correctly", () => {
  const mockResponse = () => {
    const res: any = {};
    res.header = jest.fn();
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  const req: any = {};
  const next = jest.fn();

  const error = { message: "error" };

  it("without statusCode", async () => {
    const res = mockResponse();
    await errorResponder(error, req, res, next);
    expect(res.header).toHaveBeenCalledWith("Content-Type", "application/json");
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(error);
  });

  it("with statusCode", async () => {
    const res = mockResponse();
    await errorResponder({ ...error, statusCode: 404 }, req, res, next);
    expect(res.header).toHaveBeenCalledWith("Content-Type", "application/json");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ ...error, statusCode: 404 });
  });
});
