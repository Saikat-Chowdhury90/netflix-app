// import axios from './axios';
// import React, { useEffect, useState } from 'react'
// import "./Banner.css";
// import requests from './Requests';

// function Banner() {

  

   
//     const [movie, setMovie] = useState([]);

//     useEffect(() => {
//         async function fetchData(){
//             const request= await axios.get(requests.fetchNetflixOriginals);
//             setMovie(
//                 requests.data.results[
//                     Math.floor(Math.random() * request.data.results.length - 1)
//                 ]
//             )
//         }
//         fetchData();
//     }, [])
//     function truncate(string,n) {
//         return string?.length > n ? string.substr(0,n-1)+"..." : string;
//     }

//     return (
//         <header className="banner" style={{
//             backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//             backgroundSize:"cover",
//             backgroundPosition:"center center",
//         }}>
//             <div className="banner-contents">
//                 <h1 className="banner-titles">
//                     {movie?.title || movie?.name || movie?.original_name}
//                 </h1>
//                 <div className="banner-buttons">
//                     <button className='banner-button'>play</button>
//                     <button className="banner-button">MyList</button>
//                 </div>
//                 <h1 className="banner-desc">{truncate(movie?.overview,150)}</h1>
//                 <div className="banner--fade" />
//             </div>
//         </header>
//     )
// }

// export default Banner;
import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Requests";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request =  await axios.get(requests.fetchNetflixOriginals);
            setMovie( 
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
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
        <header className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url(
             "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
        <div className="banner-contents">
            <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner-fade" />
    </header>
    )
}

export default Banner