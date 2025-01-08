import bookmarkIcon from "../assets/icons/icon-nav-bookmark.svg";
import homeIcon from "../assets/icons/icon-nav-home.svg";
import movieIcon from "../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../assets/icons/icon-nav-tv-series.svg";

const navLinks = [
  {
    name: "Home",
    icon: homeIcon,
    link: "/",
  },
  {
    name: "Movies",
    icon: movieIcon,
    link: "/movies",
  },
  {
    name: "Tv Series",
    icon: tvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: bookmarkIcon,
    link: "/bookmarks",
  },
];

export { navLinks };
