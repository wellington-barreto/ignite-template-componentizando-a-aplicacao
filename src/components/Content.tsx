import { MovieCard } from '../components/MovieCard';


interface ContentProps {
  selectedGenreTitle: string;
  movies: MovieProps[];
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}


export function Content({movies,selectedGenreTitle} : ContentProps ) {
  // Complete aqui

 
  return (<div className="container">
  <header>
    <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>);
}