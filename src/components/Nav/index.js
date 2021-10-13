import axios from "../../API/axios";
import React, { useEffect, useState } from "react";
import requests from "../../API/requests";
import css from "./nav.module.scss";
import { Link } from "react-router-dom";

function Nav() {
  const [link, setlink] = useState(requests.fetchTrending);
  const [Movies, setdata] = useState([]);

  useEffect(() => {
    fetchData(link);
  }, [link]);

  async function fetchData(url) {
    axios.get(url).then((data) => {
      setdata(data.data.results);
      console.log(data.data.results);
    });
  }
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className={css.navBar}>
        <h3>Movies</h3>
        <ul>
          <li> UP COMMING </li>
          <li onClick={() => setlink(requests.fetchTopRated)}> TOP RATED </li>
          <li onClick={() => setlink(requests.fetchTrending)}> POPULERS </li>
        </ul>
      </div>

      <div className={css.container}>
        {Movies.map((movie, idx) => (
          <>
            <div className={css.card} key={idx}>
              <Link to={`movie/${movie.id}`}>
                <img src={`${baseImgUrl}${movie.poster_path}`} alt="" />{" "}
              </Link>
              <h6>{movie.original_title}</h6>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Nav;
