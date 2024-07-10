class CordEError {
  statusCode;
  message;
  constructor(statusCode: number, message?: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
export default CordEError;
