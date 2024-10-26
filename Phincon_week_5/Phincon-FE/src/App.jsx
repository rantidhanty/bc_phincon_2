import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Homepage from "./components/homepage/Homepage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "./utils/feature/cookie/cookieSlice.js";

function App() {
  // const { user } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
