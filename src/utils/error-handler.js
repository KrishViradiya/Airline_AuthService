const {statusCodes} = require("http-status-codes");

class AppErrors extends Error {
    constructor(
        name = 'AppError',
        message = 'Something went wrong',
        explanation = 'Something went wrong',
        statusCodes =  INTERNAL_SERVER_ERR0R
    ) {
        super();
        this.message = message,
        this.explanation = explanation,
        this.name = name,
        this.statusCodes = statusCodes
    }
}

module.exports = AppErrors