const errorHandler = (err, req, res, next) => {
  const statusCode = res.ststusCode ? res.ststusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
