const errorResponse = require("../Util/errorResponse");

const errorHandler = async (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.log(err.name);
  if (error.name === "SequelizeUniqueConstraintError") {
    const msg = Object.values(err.errors).map((val) => val.message);
    error = new errorResponse(msg, 404);
  }

  if (error.name === "SequelizeValidationError") {
    const msg = Object.values(err.errors).map((val) => val.message);
    error = new errorResponse(msg, 404);
  }
  res
    .status(error.statusCode)
    .json({ success: false, error: error.message || "Server Error" });
};

module.exports = errorHandler;
