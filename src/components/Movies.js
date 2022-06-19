import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { Oval } from "react-loader-spinner";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hover, setHover] = useState("");
  const [favorites, setFavorites] = useState([]);

  function previousPage() {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  }

  function nextPage() {
    setPageNumber(pageNumber + 1);
  }

  useEffect(
    function () {
      // everytime when page reloads
      let oldFav = localStorage.getItem("imdb");
      oldFav = JSON.parse(oldFav) || [];
      console.log(oldFav);

      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=90758219a6cf6c33c862c74f7a8fbae2&page=${pageNumber}`
        )
        .then((res) => setMovies(res.data.results));
    },
    [pageNumber]
  );

  let add = (movie) => {
    let newArray = [...favorites, movie];
    setFavorites([...newArray]);
    // console.log(newArray)
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };

  let del = (movie) => {
    let newArray = favorites.filter((m) => m.id != movie.id);
    setFavorites([...newArray]);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };

  return (
    <>
      <div className="mb-8">
        <div className="m-8 font-bold text-sl md:text-2xl text-center cursor-default">
          Trending Movies
        </div>
        {movies.length == 0 ? (
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
          <div className="flex flex-wrap justify-center">
            {movies.map((movie) => (
              <div
                className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[25vh] w-[145px] md:h-[35vh] md:w-[220px] bg-center
                            bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-200 relative`}
                onMouseEnter={() => setHover(movie.id)}
                onMouseLeave={() => setHover("")}
              >
                {hover == movie.id && (
                  <>
                    {favorites.find((m) => m.id == movie.id) ? (
                      <div
                        className="absolute top-2 right-2 text-xl border p-1 bg-gray-600 rounded-xl cursor-pointer"
                        onClick={() => del(movie)}
                      >
                        ❌
                      </div>
                    ) : (
                      <div
                        className="absolute top-2 right-2 text-xl border p-1 bg-gray-600 rounded-xl cursor-pointer"
                        onClick={() => add(movie)}
                      >
                        😍
                      </div>
                    )}
                  </>
                )}

                <div className="bg-gray-900 opacity-90 w-full text-white font-bold text-center py-1 md:py-2 rounded-b-xl cursor-default">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination
        pageProp={pageNumber}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
}
export default Movies;
