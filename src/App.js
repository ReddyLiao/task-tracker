import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
