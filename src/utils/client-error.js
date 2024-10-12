const AppError = require("./error-handler");

class ClientError extends AppError {
  constructor(error) {
    super(name, message, explanation, statusCode);
  }
}

module.exports = ClientError;