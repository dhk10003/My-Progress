import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MovieDetail = () => {
  const { id } = useParams();

  const { moviesData } = useContext(AuthContext);

  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

//   const movieDetails = moviesData.find((movie) => movie.id === Number(id));
    if (moviesData.length === 0) {
        return <div className="text-white">Loading...</div>
    }
    const movieDetails = moviesData.find((movie) => movie.id === Number(id));

  return (
    <div className="bg-[#212529] w-[90%] my-[50px] mx-auto flex flex-row">
      <div className="w-[30%] flex flex-col">
        <img
          src={imgBaseURL + movieDetails.poster_path}
          alt="movie_poster_img"
        />
        <div className="flex flex-row justify-between bg-white p-3">
          <h3 className="text-lg font-semibold">Realease Date:</h3>
          <p>{movieDetails.release_date}</p>
        </div>
        <hr />
        <div className="flex flex-row justify-between bg-white p-3">
          <h3 className="text-lg font-semibold">Rate:</h3>
          <p>{movieDetails.vote_average}</p>
        </div>
        <hr />
        <div className="flex flex-row justify-between bg-white p-3">
          <h3 className="text-lg font-semibold">Total Vote:</h3>
          <p>{movieDetails.vote_count}</p>
        </div>
        <hr />
      </div>
      <div className="w-[70%] text-white p-5">
        <h1 className="text-4xl font-semibold text-center">{movieDetails.original_title}</h1>
        <br /><br />
        <p className="text-xl text-left">{movieDetails.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
