import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Cursos from "./components/cursos/cursos";
import Admin from "./components/admin/admin";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
         
          <Route path="admin" element={<Admin />} />
          <Route path="cursos" element={<Cursos />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;
