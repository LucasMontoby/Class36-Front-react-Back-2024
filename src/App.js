import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Cursos from "./components/cursos/cursos";
import Admin from "./components/admin/admin";

import Register from './components/Registro/Register';
import Login from './components/Registro/Login';

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='admin' element={<Admin />} />
          <Route path='cursos' element={<Cursos />} />
          <Route path='registro' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
