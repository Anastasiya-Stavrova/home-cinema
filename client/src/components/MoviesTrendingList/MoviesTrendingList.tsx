import { Box, Paper, useMediaQuery } from "@mui/material";
import { IMovieDataType } from "../../types/movieData";
import MovieTrendCard from "../MovieTrendCard/MovieTrendCard";
import { useEffect, useRef, useState } from "react";

interface IMovieTrendingListProps {
  trendingList: Array<IMovieDataType>;
}

const MoviesTrendingList = ({ trendingList }: IMovieTrendingListProps) => {
  const containerRef = useRef<HTMLUListElement | null>(null);

  const [cardWidth, setCardWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const isSm = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMd = useMediaQuery("(min-width:959px) and (max-width:1279px)");
  const isLg = useMediaQuery("(min-width:1279px)");

  const cols = isSm ? 2 : isMd ? 3 : isLg ? 4 : 1;

  const handleMouseDown = (e: { pageX: number }) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = (e: { pageX: number }) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const gap = (cols - 1) * 16;
      const widthPerColumn = (containerWidth - gap) / cols;

      setCardWidth(widthPerColumn);
    }
  }, [cols]);

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollableElement = containerRef.current;
    scrollableElement.addEventListener("mousedown", handleMouseDown);
    scrollableElement.addEventListener("mousemove", handleMouseMove);
    scrollableElement.addEventListener("mouseup", handleMouseUp);
    scrollableElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      scrollableElement.removeEventListener("mousedown", handleMouseDown);
      scrollableElement.removeEventListener("mousemove", handleMouseMove);
      scrollableElement.removeEventListener("mouseup", handleMouseUp);
      scrollableElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove]);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "scroll",
        userSelect: "none",
        "::-webkit-scrollbar": { display: "none" },
      }}
      onMouseDown={handleMouseDown}
    >
      {trendingList.map((movie) => (
        <Box flex="1" key={movie.id} sx={{ marginBottom: "32px" }}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} width={cardWidth} />
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default MoviesTrendingList;
