import { Box, Paper } from "@mui/material";
import { IMovieDataType } from "../../types/movieData";
import MovieTrendCard from "../MovieTrendCard/MovieTrendCard";

interface IMovieTrendingListProps {
  trendingList: Array<IMovieDataType>;
}

const MoviesTrendingList = ({ trendingList }: IMovieTrendingListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "scroll",
      }}
    >
      {trendingList.map((movie) => (
        <Box flex="1" key={movie.id} sx={{ marginBottom: "16px" }}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default MoviesTrendingList;
