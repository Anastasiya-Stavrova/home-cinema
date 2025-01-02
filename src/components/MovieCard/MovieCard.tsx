import { useContext } from "react";
import { IMovieDataType } from "../../types/movieData";
import { MovieContext } from "../../context/movie-context";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
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
    <Card
      variant="outlined"
      sx={{ bgcolor: "transparent", color: "#E0E0E0", border: "none" }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid2 container spacing={1}>
          <Box flex={1}>
            <img
              src={movie.thumbnail.regular.large}
              alt="Movie Img"
              style={{ width: "400px", height: "200px", borderRadius: "8px" }}
            />
          </Box>

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

          <Grid2
            size={{ xs: 2 }}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: "1rem",
              }}
            >
              <Box
                sx={{
                  p: "1rem",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
                onClick={() => handleToggleBookmark(movie.id)}
              >
                {movie.isBookmarked ? (
                  <BookmarkIcon fill={"#E0E0E0"} />
                ) : (
                  <BookmarkEmptyIcon />
                )}
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
