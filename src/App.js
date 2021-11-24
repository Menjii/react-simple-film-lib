import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import Home from "./components/home";
import Films from "./components/films";

function App() {
  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/films" element={<Films />} />
                </Routes>
            </div>
        </div>
      </div>
  );
}

export default App;
