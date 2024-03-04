import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {

  if (!movies) return null;

  //console.log(movies);

  return (
    <div className="p-6 h-full ">
      <h1 className="text-3xl text-white font-bold px-2 py-2">{title}</h1>
      <div className="flex overflow-x-auto overflow-y-hidden ">
        <div className="flex gap-[15px]">
          {movies && movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
