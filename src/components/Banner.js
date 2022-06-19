import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(function () {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=90758219a6cf6c33c862c74f7a8fbae2&page=1"
      )
      .then((res) => setMovie(res.data.results[1]));
  });

  return (
    <>
      {movie.length == 0 ? (
        <div className="flex justify-center">
          <Oval
            heigth="50"
            width="50"
            color="grey"
            secondaryColor="grey"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <div
          className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh]  bg-center
        bg-cover flex items-end`}
        >
          <div className="text-sl md:text-2xl p-2 text-white text-center bg-black bg-opacity-70 w-full cursor-default">
            {movie.title}
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
