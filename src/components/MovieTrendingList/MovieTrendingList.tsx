import { Box, Paper } from "@mui/material";
import { IMovieDataType } from "../../types/movieData";
import MovieTrendCard from "../MovieTrendCard/MovieTrendCard";

interface IMovieTrendingListProps {
  trendingList: Array<IMovieDataType>;
}

const MovieTrendingList = ({ trendingList }: IMovieTrendingListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "scroll",
      }}
    >
      {trendingList.map((movie) => (
        <Box key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default MovieTrendingList;
