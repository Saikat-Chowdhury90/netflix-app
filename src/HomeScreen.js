import React from 'react'
import  "./HomeScreen.css";
import Nav from './Nav.js';
import Banner from './Banner.js';
import requests from './Requests';
import Row from './Row.js';
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav /> 
            <Banner />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}  isLargeRow />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            
        </div>
    )
}

export default HomeScreen;
