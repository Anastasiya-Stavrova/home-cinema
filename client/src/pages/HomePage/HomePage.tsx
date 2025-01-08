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
import MoviesTrendingList from "../../components/MoviesTrendingList/MoviesTrendingList";
import { IMovieDataType } from "../../types/movieData";
import { MovieContext } from "../../context/movie-context";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<IMovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const trendingList = movies.filter((movie) => movie.isTrending);
  const recommendedList = movies.filter((movie) => !movie.isTrending);

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
          elevation={20}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
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
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={3} fontWeight={400}>
                Trending
              </Typography>

              <MoviesTrendingList trendingList={trendingList} />
            </Box>

            <Box width="100%">
              <Typography variant="h5" component="h1" my={3} fontWeight={400}>
                Recommended For You
              </Typography>

              <MoviesList recommendedList={recommendedList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography variant="h6" my={3}>
              Found {searchList.length} results for "{search}"
            </Typography>

            <MoviesList recommendedList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default HomePage;
