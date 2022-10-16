import { Marathon } from "../service/marathon.interface";

export const marathons: Marathon[] = [
  {
    id: '1',
    name: 'Spooky Halloween 2020',
    startDate: '10-01-2020',
    endDate: '10-31-2020',
    movies: [
      { movie: 'The Thing', dateWatched: '10-03-2020', imgUrl: 'https://artfiles.alphacoders.com/995/99557.jpg' },
      { movie: 'The Endless', dateWatched: '10-18-2020', imgUrl: 'https://www.themoviedb.org/t/p/original/49sb3kEZplzudQBhJDSt0mNJm4V.jpg' },
      { movie: 'Aliens', dateWatched: '10-12-2020', imgUrl: 'https://www.themoviedb.org/t/p/original/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg' },
      { movie: 'American Psycho', dateWatched: '10-30-2020', imgUrl: 'https://www.themoviedb.org/t/p/original/d3U7k4hBYgFW7pv4hXUVwkMvum0.jpg' },
      { movie: 'Death Becomes Her', dateWatched: '10-23-2020', imgUrl: 'https://www.themoviedb.org/t/p/original/vSPkbcDvXT5LKdc2rzZjxqWAPLm.jpg' },
    ]
  },
  {
    id: '2',
    name: 'Hal(low)f-marathon',
    startDate: '10-01-2022',
    endDate: '10-31-2022',
    movies: [
      { movie: 'Riddick', dateWatched: '10-05-2022', imgUrl: '' },
      { movie: 'Malignant', dateWatched: '10-07-2022', imgUrl: '' },
      { movie: 'Jason X', dateWatched: '10-12-2022', imgUrl: '' },
      { movie: 'Evil Dead II', dateWatched: '10-10-2020', imgUrl: '' },
      { movie: 'Addams Family Values', dateWatched: '10-12-2020', imgUrl: '' },
    ]
  }
]
