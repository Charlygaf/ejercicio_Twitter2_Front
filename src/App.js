import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portal from "./pages/Portal";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="registro" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
