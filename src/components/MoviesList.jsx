import MovieCards from "./MovieCards";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="pl-10">
      <h1 className=" text-lg md:text-3xl text-white pt-4">{title}</h1>

      <div className="py-4">
        <div className="flex flex-wrap gap-4">
          {movies.map((movie) => (
            <MovieCards key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
