import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { IMovieDetails, MovieDetailsModel } from "./models/movie";

// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

const app: Application = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || "";

(async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connection to MongoDB successful!");
  } catch (error) {
    console.log(error);
  }
})();

app.get("/", async (_req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.get("/movies", async (req: Request, res: Response) => {
  try {
    const movies: IMovieDetails[] = await MovieDetailsModel.find();
    res.json(movies);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, (err?: ErrorEvent) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`Server running at http://localhost:${port}`);
});
