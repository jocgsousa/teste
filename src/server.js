import express, { Router } from "express";
import cors from "cors";
const app = express();

const routes = new Router();

app.use(express.json());

app.use(cors());

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.use(routes);

app.listen(3000);
