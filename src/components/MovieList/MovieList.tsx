import { Grid2, Paper } from "@mui/material";
import { IMovieDataType } from "../../types/movieData";
import MovieCard from "../MovieCard/MovieCard";

interface IMovieListProps {
  recommendedList: Array<IMovieDataType>;
}

const MovieList = ({ recommendedList }: IMovieListProps) => {
  return (
    <Grid2 container spacing={2}>
      {recommendedList.map((movie) => (
        <Grid2 key={movie.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default MovieList;
