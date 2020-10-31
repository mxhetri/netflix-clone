import React, {useState, useEffect} from "react";
import instance from '../axios';
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original'

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData() {
            const request = await instance.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData()
    }, [props.fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    // for trailer
    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl('');
        } else {
            console.log('movie name', movie?.name)
            movieTrailer(movie?.name || '')
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error) => console.log(error));
        }


    }
    // console.log(movies)
    return(

        <div className='row'>
            <h4>{props.title}</h4>
            <div className='row_posters_container'>
            {/*    row posters */}
                {movies.map( movie =>
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${props.isLargeRow && 'row_posterLarge'}`}
                        src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}/>
                )}
            </div>
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;