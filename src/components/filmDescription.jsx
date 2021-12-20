import React from "react";
import { Link } from "react-router-dom";

const FilmDescription = () => {
    return <div className="card-block px-2">
                <h4 className="card-title">Zielona Mila</h4>
                    <p className="card-text">Stars</p>
                    <Link to="/details">
                        <button type="button" className="btn btn-primary">Description</button>
                    </Link>
        </div>
};

export default FilmDescription;