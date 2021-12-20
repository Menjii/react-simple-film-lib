import React, { Component } from "react";

class AddFilm extends Component {

    state = {
        film: {
            img: "",
            title: "",
            description: ""
        },
        errors: {}
    };

    render() {
        return (
            <div>
                <h1>Add film</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Image</label>
                        <input value={this.state.film.img}
                            name="image"
                            type="text"
                            className="form-control"
                            id="image"
                            aria-describedby="emailHelp"
                            placeholder="Img" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Title</label>
                        <input value={this.state.film.title}
                            name="title"
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Description</label>
                        <input value={this.state.film.description}
                            name="description"
                            type="text"
                            className="form-control"
                            id="description"
                            aria-describedby="emailHelp"
                            placeholder="Description" />
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Add</button>
                </form>
            </div>
        );
    }
}

export default AddFilm;
