import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../API/axios";
import css from "./Movie.module.scss";
import { Link } from "react-router-dom";


function MovieProfile() {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const { id } = useParams();
  const [Movies, setdata] = useState({});
  const [relatedMovies, setRelateddata] = useState([]);


    const detailsUrl = `/movie/${id}?api_key=f1b8d194dba80bd94de376afc7c19763&language=en-US`;
    const reqUrlSimilerMovies = `/movie/${id}/similar?api_key=f1b8d194dba80bd94de376afc7c19763&language=en-US&page=1`;


  useEffect(() => {
    fetchData(detailsUrl);
    fetchDataRelated(reqUrlSimilerMovies)
  }, []);

  async function fetchData(url) {
    axios.get(url).then((data) => {
      setdata(data.data);
      console.log(data.data);
    });
  }

  async function fetchDataRelated(url) {
    axios.get(url).then((data) => {
        setRelateddata(data.data.results);
    //   console.log(data.data.results);
    });
  }

  return (
    <div className={css.container}>
      <div className={css.info}>
        <h1>{Movies.original_title}</h1>

        <img src={`${baseImgUrl}${Movies.backdrop_path}`} alt="" />

        <h1>{Movies.original_title}</h1>


        <ul>
            <li> dirctor : {''}</li>
            <li> cast : { '' } </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>

      <div className={css.related}>
        <h3>you may also like...</h3>

        <div className={css.relatedMovies}>
        {relatedMovies.length && relatedMovies.map((movie, idx) => (
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

      </div>
    </div>
  );
}

export default MovieProfile;
