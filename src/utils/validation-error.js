const AppError = require('./error-handler');

class ValidationError extends AppError {
    constructor(error){
        let errorName = error.name;
        let explanation = [];

        error.errors.forEach((err) => {
            explanation.push(err)
        })

        super(
            error.errorName,
            'Not able to validate the data sent in the request',
            error.explanation,
            statusCodes.BAD_REQUEST
        )
    }
}

module.exports = ValidationError