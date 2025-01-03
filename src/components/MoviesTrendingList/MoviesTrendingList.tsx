import { Box, Paper, useMediaQuery } from "@mui/material";
import { IMovieDataType } from "../../types/movieData";
import MovieTrendCard from "../MovieTrendCard/MovieTrendCard";
import { useEffect, useRef, useState } from "react";

interface IMovieTrendingListProps {
  trendingList: Array<IMovieDataType>;
}

const MoviesTrendingList = ({ trendingList }: IMovieTrendingListProps) => {
  const containerRef = useRef<HTMLUListElement | null>(null);

  const isSm = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMd = useMediaQuery("(min-width:959px) and (max-width:1279px)");
  const isLg = useMediaQuery("(min-width:1279px)");

  const cols = isSm ? 2 : isMd ? 3 : isLg ? 4 : 1;

  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const gap = (cols - 1) * 16;
      const widthPerColumn = (containerWidth - gap) / cols;

      setCardWidth(widthPerColumn);
    }
  }, [cols]);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "scroll",
      }}
    >
      {trendingList.map((movie) => (
        <Box flex="1" key={movie.id} sx={{ marginBottom: "16px" }}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} width={cardWidth} />
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default MoviesTrendingList;
