import React, {useEffect, useState} from "react";
import './Banner.css';
import instance from "../axios";
import requests from "../request";

function Banner() {
    const [movie, setMovie] = useState([]);

    // truncate text
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + '...': str;
    }
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            // console.log(('movie', request.data.results[Math.floor(Math.random() * request.data.results.length -1 )]))
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)])  // randomly set movie

            return request;
        }
        fetchData();
    }, []);
    return(
        <header
            className='banner'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                    backgroundPosition: 'center center',
                }}>
            <div className='banner_contents'>
                {/* title */}
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}</h1>

                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>

            {/*    add description*/}
            <h1 className='banner_description'>
                {truncate(movie?.overview, 150)}
            </h1>
            </div>

        </header>

    )

}

export default Banner;