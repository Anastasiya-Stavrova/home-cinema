import { Box, Grid2, Paper } from "@mui/material";
import { IMovieDataType } from "../../types/movieData";
import MovieTrendCard from "../MovieTrendCard/MovieTrendCard";

interface IMovieTrendingListProps {
  trendingList: Array<IMovieDataType>;
}

const MovieTrendingList = ({ trendingList }: IMovieTrendingListProps) => {
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {trendingList.map((movie) => (
        <Grid2 key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid2>
      ))}
    </Box>
  );
};

export default MovieTrendingList;
