import { useContext } from "react";
import { IMovieDataType } from "../../types/movieData";
import { MovieContext } from "../../context/movie-context";
import {
  Box,
  Grid2,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import BookmarkIcon from "../Icons/bookmark-icon";
import BookmarkEmptyIcon from "../Icons/bookmark-empy-icon";
import movieIcon from "../../assets/icons/icon-category-movie.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";

interface IMovieCardProps {
  movie: IMovieDataType;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };

  return (
    <ImageListItem
      sx={{ bgcolor: "transparent", color: "#E0E0E0", border: "none" }}
      cols={1}
    >
      <img
        src={movie.thumbnail.regular.large}
        alt="Movie Img"
        style={{ borderRadius: "8px" }}
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
              onClick={() => handleToggleBookmark(movie.id)}
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
        title={
          <Grid2>
            <Grid2 container spacing={1} alignItems="center">
              <Box>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="Year of Movie"
                >
                  {movie.year}
                </Typography>
              </Box>

              <Box>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Box>
                <img
                  src={movie.category === "Movies" ? movieIcon : tvSeriesIcon}
                  alt="Category Icon"
                  width={16}
                  height={16}
                />
              </Box>

              <Box>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="Movie Category"
                >
                  {movie.category}
                </Typography>
              </Box>

              <Box>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="Movie Rating"
                >
                  {movie.rating}
                </Typography>
              </Box>
            </Grid2>

            <Typography aria-label="Movie Rating" padding={0}>
              {movie.title}
            </Typography>
          </Grid2>
        }
        position="below"
      />
    </ImageListItem>
  );
};

export default MovieCard;
