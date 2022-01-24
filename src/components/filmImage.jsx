import React from "react";
import "../css/filmImage.css";

const FilmImage = (props) => {
    return <div className="card-header border-0">
                <img className="img-max" src={props.image} alt=""/>
            </div>
};

export default FilmImage;