// This component will deplay each movie card on the main page.
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MovieCard = () => {
  const { login, moviesData } = useContext(AuthContext);
  const navigate = useNavigate();

  const movieDetailsHandler = (movie) => {
    navigate(`/details/${movie.id}`);
  }

  const alertHandler = () => {
    alert("Please login to see movie details");
  };

  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="grid grid-cols-4 gap-2 w-[90%] mx-auto py-[20px]">
      {moviesData.map((movie) => {
        return (
          <div
            key={movie.id}
            onClick={login ? () => movieDetailsHandler(movie) : alertHandler}
            className="bg-black text-center relative group cursor-pointer my-[5px] pb-[15px] w-[95%] rounded-lg overflow-hidden shadow-[3px_3px_5px_black]"
          >
            <img
              src={imgBaseURL + movie.poster_path}
              className="object-contain group-hover:scale-150 transition-all ease-in-out duration-500"
              alt="movie_poster_img"
            />
            {login ? (
              <div className="text-white bg-orange-400 absolute top-3 right-3 flex items-center justify-center border-solid border-2 border-white rounded-[50%] h-[45px] w-[45px] ">
                {movie.vote_average}
              </div>
            ) : (
              ""
            )}
            <hr color="white" />
            <p className="text-white pt-[20px] text-xl">
              {movie.original_title}
            </p>
            <div
              className="overview text-white flex flex-col justify-start items-start gap-[10px] 
            text-left transition-all ease-in-out duration-500 bg-opacity-75 bg-black absolute left-0 bottom-0 w-[100%] 
            h-[100%] translate-y-[100%] group-hover:translate-y-[0] p-[20px]"
            >
              <h2 className="text-4xl">OverView</h2>
              <p className="text-xl">{movie.original_title}</p>
              <p className="text-md">{movie.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
