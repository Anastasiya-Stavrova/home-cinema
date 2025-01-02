import { useContext } from "react";
import { IMovieDataType } from "../../types/movieData";
import { MovieContext } from "../../context/movie-context";
import { Card, CardContent } from "@mui/material";

interface IMovieCardProps {
  movie: IMovieDataType;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  const { dispatch } = useContext(MovieContext);

  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
