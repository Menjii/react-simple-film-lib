import React from "react";
import { Link } from "react-router-dom";


const FilmDescription = (props) => {

    const link = "/details/" + props.id;

    return <div className="card-block px-2">
                <h4 className="card-title">{props.title}</h4>
                    <Link to={link}>
                        <button type="button" className="btn btn-primary">Description</button>
                    </Link>
        </div>
};

export default FilmDescription;