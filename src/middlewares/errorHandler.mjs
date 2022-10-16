export const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode || 500;

    res.status(statusCode).json({
        message: error.message || 'Server Error'
    });
}