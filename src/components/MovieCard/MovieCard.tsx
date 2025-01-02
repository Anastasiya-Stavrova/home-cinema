import { IMovieDataType } from "../../types/movieData";

interface IMovieCardProps {
  movie: IMovieDataType;
}

const MovieCard = (movie: IMovieCardProps) => {
  return <div>{movie.movie.title}</div>;
};

export default MovieCard;
