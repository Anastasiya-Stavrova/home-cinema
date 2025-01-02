import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import Layout from "../../components/Layout/Layout";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MoviesList from "../../components/MoviesList/MoviesList";
import { IMovieDataType } from "../../types/movieData";
import { MovieContext } from "../../context/movie-context";

const BookmarksPage = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<IMovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const bookmarksList = movies.filter((movie) => movie.isBookmarked);

  const handleSearch = (value: string) => {
    setSearch(value);

    const newMoviesList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchList(newMoviesList);
  };

  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141F",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{ ml: 1, flex: 1, color: "white", border: "none" }}
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="Search Icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>

      <Box py={2} px={4}>
        {search === "" ? (
          <Box>
            <Typography variant="h5" component="h1" my={2} fontWeight={300}>
              Bookmarks
            </Typography>

            <MoviesList recommendedList={bookmarksList} />
          </Box>
        ) : (
          <Box>
            <Typography variant="h6" marginBottom={3}>
              Found {searchList.length} results for "{search}"
            </Typography>

            <MoviesList recommendedList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default BookmarksPage;
