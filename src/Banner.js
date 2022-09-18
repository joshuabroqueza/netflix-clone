import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./request";

function Banner() {
  const [movie, setMovies] = useState([]); //a container that will handle a random movie in the container

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginals);
      //   console.log(
      //     request.data.results[
      //       Math.floor(Math.random() * request.data.results.length)
      //     ]
      //   );

      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* BACKGROUND IMAGE */}

        {/* TITLLE */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* DIV > 2 BUTTONS */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* DESCRIPTION */}
        <div className="banner__description">{truncate(movie?.overview)}</div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
