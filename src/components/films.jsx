import React from "react";
import FilmCard from "./filmCard";
import { Link } from "react-router-dom";

const Films = () => {
    return <div className="container-fluid">
        <Link to="/add">
        <button type="button" class="btn btn-primary">Add film</button>
        </Link>
            <div className="row">
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
            </div>
    </div>
};

export default Films;