import mongoose, { Document, Schema } from "mongoose";

type IThumbnailConfig = {
  [key in "trending" | "regular"]: {
    small?: string;
    large?: string;
    medium?: string;
  };
};

export interface IMovieDetails extends Document {
  id: number;
  title: string;
  thumbnail: IThumbnailConfig;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

const ThumbnailConfigSchema: Schema = new Schema<IThumbnailConfig>({
  trending: {
    small: { type: String, required: false },
    medium: { type: String, required: false },
    large: { type: String, required: false },
  },
  regular: {
    small: { type: String, required: false },
    medium: { type: String, required: false },
    large: { type: String, required: false },
  },
});

const MovieDetailsSchema: Schema = new Schema<IMovieDetails>({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  thumbnail: { type: ThumbnailConfigSchema, required: false },
  year: { type: Number, required: false },
  category: { type: String, required: false },
  rating: { type: String, required: false },
  isBookmarked: { type: Boolean, required: false },
  isTrending: { type: Boolean, required: false },
});

export const MovieDetailsModel = mongoose.model<IMovieDetails>(
  "MovieDetails",
  MovieDetailsSchema
);
