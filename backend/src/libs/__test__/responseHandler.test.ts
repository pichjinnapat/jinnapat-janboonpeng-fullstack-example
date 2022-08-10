import { responseHandler } from "../responseHandler";

describe("return status and response correctly", () => {
  const mockResponse = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  const result = { test: 1 };

  it("with statusCode = 200", () => {
    const res = mockResponse();
    responseHandler({ ...res, statusCode: 200 }, result);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(result);
  });

  it("with statusCode = 400", () => {
    const res = mockResponse();
    responseHandler({ ...res, statusCode: 400 }, result);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith(result);
  });

  it("with no status code", () => {
    const res = mockResponse();
    responseHandler(res, result);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(result);
  });
});
