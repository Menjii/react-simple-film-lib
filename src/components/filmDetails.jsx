import React, {useState} from "react";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
  
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

fetch("https://pr-movies.herokuapp.com/api/movies/" + id)
        .then((res) => res.json())
        .then((json) => {
        setTitle(json.title);
        setImage(json.image);
        setContent(json.content);
});


    return <div className="card-block px-2">
                <h1>{title}</h1>
                <img src={image} className="details_poster" alt="poster" />
                <p>{content}</p>
        </div>
};

export default FilmDetails;