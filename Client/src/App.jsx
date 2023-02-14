import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Student/Home/Home";
import Signin from "./Pages/Student/Login/Signin";
import Signup from "./Pages/Student/Signup/Signup";
import Master from "./Pages/Master/Home/Home";
import Error from "./components/Error";
import SigninPage from "./Pages/Master/Login/SigninPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/master" element={<Master />} />
          <Route path="/404" element={<Error />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
