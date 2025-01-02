import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import TvSeriesPage from "../pages/TvSeriesPage/TvSeriesPage";
import BookmarkPage from "../pages/BookmarkPage/BookmarkPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movies",
    element: <MoviePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tv-series",
    element: <TvSeriesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bookmarks",
    element: <BookmarkPage />,
    errorElement: <ErrorPage />,
  },
]);

export { router };
