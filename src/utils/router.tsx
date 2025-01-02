import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
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
    element: <MoviesPage />,
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
