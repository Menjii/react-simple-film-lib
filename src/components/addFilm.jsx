import React, { Component } from "react";
const axios = require('axios');

class AddFilm extends Component {

    state = {
        film: {
            image: "",
            title: "",
            description: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
      this.props.history.push('/');
      window.location.reload();
  }; 

    validate = () => {
        const errors = {};
    
        const { film } = this.state;
        if (film.title === '') {
          errors.title = 'Title is required';
        }
    
        if (film.image === '') {
          errors.image = 'Image is required';
        }
    
        if (film.description.trim() === '') {
          errors.description = 'Description is required';
        }
    
        return Object.keys(errors).length === 0 ? null : errors;
      };

      handleSubmit = (event) => {
        event.preventDefault();
    
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
    
        axios({
          method: 'post',
          url: 'https://pr-movies.herokuapp.com/api/movies',
          data: {
            title: this.state.film.title,
            image: this.state.film.image,
            content: this.state.film.description,
          },
        })
          .then((response) => {
            this.handleChangeRoute();
          })
          .catch((error) => {
            const errors = {};
            this.setState({ errors: errors || {} });
            console.log(error);
          });
      };

      handleChange = (event) => {
        const film = { ...this.state.film };
        film[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ film });
      };

    render() {
        return (
            <div>
                <h1>Add film</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input value={this.state.film.image}
                            name="image"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="image"
                            placeholder="Image" />
                            {this.state.errors.title && 
                                <div className="alert alert-danger">{this.state.errors.image}</div>
                            }
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input value={this.state.film.title}
                            name="title"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title" />
                            {this.state.errors.title && 
                                <div className="alert alert-danger">{this.state.errors.title}</div>
                            }
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input value={this.state.film.description}
                            name="description"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="description"
                            aria-describedby="emailHelp"
                            placeholder="Description" />
                            {this.state.errors.title && 
                                <div className="alert alert-danger">{this.state.errors.description}</div>
                            }
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Add</button>
                </form>
            </div>
        );
    }
}

export default AddFilm;
