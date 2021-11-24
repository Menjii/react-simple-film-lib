import React from "react";
import FilmDescription from "./filmDescription";
import FilmImage from "./filmImage";

const FilmCard = () => {
    return <div className="card flex-row flex-wrap mx-auto my-4 col-lg-5">
                <FilmImage />
                <FilmDescription />
            </div>
};

export default FilmCard;