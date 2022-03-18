import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portal from "./pages/Portal";
import Register from "./pages/Register";

import Home from "./pages/Home";
import PrivateHome from "./components/PrivateHome";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/home" element={<PrivateHome element={<Home />} />} />
        <Route
          path="/:username"
          element={<PrivateHome element={<Profile />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
