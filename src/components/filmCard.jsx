import React from "react";
import FilmDescription from "./filmDescription";
import FilmImage from "./filmImage";

const FilmCard = (props) => {
    return <div className="card flex-row flex-wrap mx-auto my-4 col-lg-3">
                <FilmImage image={props.image}/>
                <FilmDescription title={props.title} id={props.id}/>
            </div>
};

export default FilmCard;