import { Response } from "express";
class CordERes {
  status;
  message;
  data;
  res;
  constructor(res: Response, status?: number, message?: string, data?: any) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.res = res;
  }
  send() {
    this.status = this.status ? this.status : 300;
    this.res.status(this.status).json({
      success: this.status < 400 ? true : false,
      message: this.message,
      data: this.data,
    });
  }
}
export default CordERes;
