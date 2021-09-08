import { gql, useQuery } from "@apollo/client";


export const QRY_MOVIES = gql`
  query getMovies{ 
    movies(limit:2) {
      title
      description
      country
      genre
    }
  }
`;


function Movies() {
  const { loading, error, data } = useQuery(QRY_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error { error.toString() }</p>;

  return data.movies.map(( movie, idx ) => (
    <div key={idx}>
      <h1>
        {movie.title}
      </h1>
      <p>{ movie.description }</p>
      <p> Country
        <ul> 
        { movie.country.map( (country, idxc ) => (
          <li key={idxc}> { country } </li>
        ))}
        </ul>
      </p>
      <p> Genre
        <ul> 
        { movie.genre.map( (genre, idxg ) => (
          <li key={idxg}> { genre } </li>
        ))}
        </ul>
      </p>
    </div>
  ));
}

export default Movies;
