import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Details from "./pages/Details/Details";
import Error from "./pages/NotFound/Error";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
