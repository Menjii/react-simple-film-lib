import React from "react";
import FilmCard from "./filmCard";
import { Link } from "react-router-dom";
import { Component } from "react";

class Films extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          films: [],
          isLoaded: false,
        };
      }

    componentDidMount() {
        fetch("https://pr-movies.herokuapp.com/api/movies")
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              films: json,
              isLoaded: true,
            });
          });
      }

    render() {
    const { isLoaded, films } = this.state;

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
            <div className="container-fluid">
                <Link to="/add">
                <button type="button" className="btn btn-primary">Add film</button>
                </Link>
                <div className="row">
                {films.reverse().map((film) => (
                    <FilmCard key={film.id} title={film.title} image={film.image} id={film.id} />
                ))}
                </div>
            </div> 
        );
    }
}

export default Films;