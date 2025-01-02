import { useContext } from "react";
import { IMovieDataType } from "../../types/movieData";
import { MovieContext } from "../../context/movie-context";
import {
  Box,
  Card,
  CardContent,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import BookmarkIcon from "../Icons/bookmark-icon";
import BookmarkEmptyIcon from "../Icons/bookmark-empy-icon";
import movieIcon from "../../assets/icons/icon-category-movie.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";

interface IMovieCardProps {
  movie: IMovieDataType;
}

const MovieTrendCard = ({ movie }: IMovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };

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
          display: "flex",
          color: "white",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt="Movie Title"
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0, 0, 0, 0.6)"
          borderRadius="8px"
        />
        <Stack
          mt="6"
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Grid2 container alignItems="center" spacing={1}>
            <Grid2>
              <Typography
                fontSize={10}
                color="#e0e0e0"
                aria-label="year of movie"
              >
                {movie.year}
              </Typography>
            </Grid2>

            <Grid2>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#e0e0e0",
                  borderRadius: "full",
                }}
              />
            </Grid2>

            <Grid2>
              <img
                src={movie.category === "Movies" ? movieIcon : tvSeriesIcon}
                alt={"Movie Category"}
                width={16}
                height={16}
              />
            </Grid2>

            <Grid2>
              <Typography
                fontSize={10}
                color="#e0e0e0"
                aria-label="movie category"
              >
                {movie.category}
              </Typography>
            </Grid2>

            <Grid2>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#e0e0e0",
                  borderRadius: "full",
                }}
              />
            </Grid2>

            <Grid2>
              <Typography
                fontSize={10}
                color="#e0e0e0"
                aria-label="movie rating"
              >
                {movie.rating}
              </Typography>
            </Grid2>
          </Grid2>

          <Typography padding={0} color="#e0e0e0" aria-label="movie title">
            {movie.title}
          </Typography>
        </Stack>

        <Box
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            display: "flex",
            padding: "16px",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              p: "1rem",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&: hover": { opacity: 0.8 },
            }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            {movie.isBookmarked ? (
              <BookmarkIcon fill={"#e0e0e0"} />
            ) : (
              <BookmarkEmptyIcon />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
