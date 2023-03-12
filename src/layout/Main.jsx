import React from "react";
import { Preloader } from "../components/Preloader";
import { MoviesList } from "../components/MoviesList";
import { Search } from "../components/Search";

const KEY_API = process.env.REACT_APP_API_KEY;

class  Main extends React.Component {
    state = {
        movies: [],
        loading: true,                
    }    

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${KEY_API}&s=terminator`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch(err => {
                console.error(err);
                this.setState({loading: false});
            });

    }

    setSearch = (str, type = 'all') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${KEY_API}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch(err => {
                console.error(err);
                this.setState({loading: false});
            });
    }

    render() {
        const {movies, loading} = this.state;

        return <main className="container content">
            <Search setSearch={this.setSearch} />            
            {
                loading ? (<Preloader />) : <MoviesList movies={movies} /> 
            }
        </main>
    }
}

export {Main};