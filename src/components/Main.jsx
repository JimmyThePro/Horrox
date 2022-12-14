import { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestHorror).then((response) => {
        setMovies(response.data.results);
        });
    }, []);
    console.log(movie);

    return (
        <div>Main</div>
    )
}

export default Main;
