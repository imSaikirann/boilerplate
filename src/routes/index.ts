import Router from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});
export { router };