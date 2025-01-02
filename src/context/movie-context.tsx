import { createContext, ReactNode, useReducer } from "react";
import { MovieDataType } from "../types/movieData";
import { moviesData } from "../consts/data";

interface IMovieContextProps {
  children: ReactNode;
}

interface IMovieState {
  movies: MovieDataType[];
}

interface IMovieAction {
  type: string;
  id: string;
}

const MovieList: MovieDataType[] = moviesData;

const initialMovieState: IMovieState = {
  movies: MovieList,
};

const MovieReduser = (
  state: IMovieState,
  action: IMovieAction
): IMovieState => {
  switch (action.type) {
    case "TOOGLE BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};

const MovieContext = createContext<{
  state: IMovieState;
  dispatch: React.Dispatch<IMovieAction>;
}>({ state: initialMovieState, dispatch: () => {} });

const MovieProvider = ({ children }: IMovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReduser, initialMovieState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
