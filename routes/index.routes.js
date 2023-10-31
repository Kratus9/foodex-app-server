import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hola Mundo!");
});

// import authRouter from "./auth.routes.js";
// import userRouter from "./user.routes.js";

// router.use("/auth", authRouter);
// router.use("/user", userRouter);

export default router;
