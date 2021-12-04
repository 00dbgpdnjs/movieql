import { getMovies } from "./db"

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating)
    }
};

// Request on grahpQL playground
// {
//   movies(rating:8.5, limit:40) { // can skip brackets
//     title
//     rating
//   }
// }

export default resolvers;