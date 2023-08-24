import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { MovieProvider } from "./context/MovieContext";
import Details from "./pages/Details";
// import Search from "./components/Search";
// import SearchResults from "./components/SearchResults";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="main-container flex flex-auto flex-col justify-between h-screen container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:movie_id" element={<Details />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
