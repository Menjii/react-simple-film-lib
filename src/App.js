import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import SignInForm from "./components/signInForm";
import Home from "./components/home";
import Films from "./components/films";
import SignUpForm from "./components/signUpForm";
import AddFilm from "./components/addFilm";
import FilmDetails from "./components/filmDetails";
import { isExpired } from "react-jwt";

function App() {
  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/login" component={SignInForm} />
                    <Route path="/" exact component={Home} />
                    <Route path="/films" component={Films} />
                    <Route path="/signup" component={SignUpForm} />
                    <Route path="/add"
                      render={props => {
                          if (isExpired(localStorage.getItem('token'))) {
                              return <Redirect to="/" />;
                          }
                          return <AddFilm />;
                      }}
                     />
                    <Route path="/details/:id" component={FilmDetails} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
