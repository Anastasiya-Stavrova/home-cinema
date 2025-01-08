import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { IMovieDetails, MovieDetailsModel } from "./models/movie";
import * as dotenv from "dotenv";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const mongoUri =
  process.env.MONGODB_USER && process.env.MONGODB_PASSWORD
    ? `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DOCKER_HOST}:${process.env.MONGODB_LOCAL_PORT}/${process.env.MONGODB_DATABASE}`
    : `mongodb://localhost:${process.env.MONGODB_LOCAL_PORT}/${process.env.MONGODB_DATABASE}`;

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
