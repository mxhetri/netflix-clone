import React, {useState, useEffect} from "react";
import instance from '../axios';
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original'

function Row(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await instance.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData()
    }, [props.fetchUrl])

    // console.log(movies)
    return(

        <div className='row'>
            <h4>{props.title}</h4>
            <div className='row_posters_container'>
            {/*    row posters */}
                {movies.map( movie =>
                    <img
                        key={movie.id}
                        className={`row_poster ${props.isLargeRow && 'row_posterLarge'}`}
                        src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}/>
                )}
            </div>
        </div>
    )
}

export default Row;