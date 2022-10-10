import { MovieEntry } from "./movie-entry.interface";

export interface Marathon {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  movies: MovieEntry[];
}
