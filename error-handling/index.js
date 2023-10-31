import express from "express";
export const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({ message: "This route does not exist" });
};
export const errorMiddleware = (err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);
  if (err.status === 401) {
    res.status(401).json({ errorMessage: "Token does not exist or not valid" });
    return;
  }
  if (!res.headersSent) {
    res.status(500).json({
      message: "Internal server error. Check the server console",
    });
  }
};
