import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portal from "./pages/Portal";
import Register from "./pages/Register";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import PrivateHome from "./components/PrivateHome";

function App() {
  /*   useEffect(() => {
    async function getTweets() {
      try {
        const response = await axios.get("http://localhost:8000/tweets");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getTweets();
  }, []);
 */
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/home" element={<PrivateHome element={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
