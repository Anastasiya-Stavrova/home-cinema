import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import SortedPage from "../pages/SortedPage/SortedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movies",
    element: (
      <SortedPage
        sortedFanction={(movie) => movie.category === "Movie"}
        pageTitle="Movies"
      />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/tv-series",
    element: (
      <SortedPage
        sortedFanction={(movie) => movie.category !== "Movie"}
        pageTitle="Tv Series"
      />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/bookmarks",
    element: (
      <SortedPage
        sortedFanction={(movie) => movie.isBookmarked}
        pageTitle="Bookmarks"
      />
    ),
    errorElement: <ErrorPage />,
  },
]);

export { router };
