import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import SignInForm from "./components/signInForm";
import Home from "./components/home";
import Films from "./components/films";
import SignUpForm from "./components/signUpForm";
import AddFilm from "./components/addFilm";
import FilmDetails from "./components/filmDetails";


function App() {
  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Routes>
                    <Route path="/login" element={<SignInForm />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/signup" element={<SignUpForm />} />
                    <Route path="/add" element={<AddFilm />} />
                    <Route path="/details/:id" element={<FilmDetails />} />
                </Routes>
            </div>
        </div>
      </div>
  );
}

export default App;
