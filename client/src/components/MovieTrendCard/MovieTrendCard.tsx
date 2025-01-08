import { useContext } from "react";
import { IMovieDataType } from "../../types/movieData";
import { MovieContext } from "../../context/movie-context";
import {
  Box,
  Grid2,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";
import BookmarkIcon from "../Icons/bookmark-icon";
import BookmarkEmptyIcon from "../Icons/bookmark-empy-icon";
import movieIcon from "../../assets/icons/icon-category-movie.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";

interface IMovieCardProps {
  movie: IMovieDataType;
  width: number;
}

const MovieTrendCard = ({ movie, width }: IMovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };

  return (
    <ImageListItem>
      <img
        src={movie.thumbnail.regular.large}
        alt="Movie Title"
        style={{ width: width, height: "100%", borderRadius: "8px" }}
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

      <ImageListItemBar
        position="top"
        sx={{
          backgroundColor: "transparent",
          marginTop: "8px",
          marginRight: "8px",
        }}
        actionIcon={
          <Box>
            <IconButton
              sx={{
                zIndex: 100,
                p: "1rem",
                backgroundColor: "black",
                borderRadius: "100%",
                cursor: "pointer",
                "&: hover": { backgroundColor: "black", opacity: 0.7 },
              }}
              onClick={() => handleToggleBookmark(String(movie.id))}
            >
              {movie.isBookmarked ? (
                <BookmarkIcon fill={"#e0e0e0"} />
              ) : (
                <BookmarkEmptyIcon />
              )}
            </IconButton>
          </Box>
        }
        actionPosition="right"
      />

      <ImageListItemBar
        style={{ backgroundColor: "transparent" }}
        title={
          <Stack
            mt="6"
            spacing={0}
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            px={4}
            py={2}
          >
            <Grid2 container alignItems="center" spacing={1}>
              <Box>
                <Typography
                  fontSize={10}
                  color="#e0e0e0"
                  aria-label="year of movie"
                >
                  {movie.year}
                </Typography>
              </Box>

              <Box>
                <Box
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "full",
                  }}
                />
              </Box>

              <Box>
                <img
                  src={movie.category === "Movies" ? movieIcon : tvSeriesIcon}
                  alt="Movie Category"
                  width={16}
                  height={16}
                />
              </Box>

              <Box>
                <Typography
                  fontSize={10}
                  color="#e0e0e0"
                  aria-label="Movie Category"
                >
                  {movie.category}
                </Typography>
              </Box>

              <Box>
                <Box
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "full",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  fontSize={10}
                  color="#e0e0e0"
                  aria-label="Movie Rating"
                >
                  {movie.rating}
                </Typography>
              </Box>
            </Grid2>

            <Typography padding={0} color="#e0e0e0" aria-label="Movie Title">
              {movie.title}
            </Typography>
          </Stack>
        }
      />
    </ImageListItem>
  );
};

export default MovieTrendCard;
