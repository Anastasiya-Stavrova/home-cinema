import { ImageList, useMediaQuery } from "@mui/material";
import { IMovieDataType } from "../../types/movieData";
import MovieCard from "../MovieCard/MovieCard";

interface IMovieListProps {
  recommendedList: Array<IMovieDataType>;
}

const MoviesList = ({ recommendedList }: IMovieListProps) => {
  const isSm = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMd = useMediaQuery("(min-width:959px) and (max-width:1279px)");
  const isLg = useMediaQuery("(min-width:1279px)");

  const cols = isSm ? 2 : isMd ? 3 : isLg ? 4 : 1;

  return (
    <ImageList cols={cols} gap={16}>
      {recommendedList.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ImageList>
  );
};

export default MoviesList;
