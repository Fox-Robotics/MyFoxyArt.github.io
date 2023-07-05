import "./styles/globals.css";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FoxyImage from "./pages/Foxyimage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/foxyimage" element={<FoxyImage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
