import React, {useState, useEffect} from "react";
import { Preloader } from "../components/Preloader";
import { MoviesList } from "../components/MoviesList";
import { Search } from "../components/Search";

const KEY_API = process.env.REACT_APP_API_KEY;

function  Main() {    
    const [movies, setMovies] = useState([]);    
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${KEY_API}&s=terminator`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);
    

    const searchFilm = (str, type = 'all') => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${KEY_API}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }   

    return <main className="container content">
        <Search searchFilm={searchFilm} />            
        {
            loading ? (<Preloader />) : <MoviesList movies={movies} /> 
        }
    </main>
    
}

export {Main};