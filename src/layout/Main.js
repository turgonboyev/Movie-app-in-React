import React from "react"
import "./Navbar.css"
import Movies from "../component/Movies";
import Loader from "../component/Loader";
import Search from "../component/Search";

export default class Main extends React.Component{
    state = {
        movies : [],
        loading: true
    };
    componentDidMount() {
        fetch("https://omdbapi.com/?apikey=e0ee063d&s=panda")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }
    Search = (m, type = "all") => {
        this.setState({loading: true});
        fetch(`https://omdbapi.com/?apikey=e0ee063d&s=${m}${type !== "all" ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    };

    render(){
        return(
            <div className="content container">
                <Search search={this.Search}/>
                {this.state.loading ? <Loader /> : (<Movies movies={this.state.movies}/>)}
            </div>
        )
    }
}