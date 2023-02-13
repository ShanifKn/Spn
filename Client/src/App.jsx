import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Student/Home/Home";
import Signin from "./Pages/Student/Login/Signin";
import Signup from "./Pages/Student/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
