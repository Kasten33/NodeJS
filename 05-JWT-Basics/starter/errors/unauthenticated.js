const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes"); // https://www.npmjs.com/package/http-status-codes
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
