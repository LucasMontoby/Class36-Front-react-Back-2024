import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import React, {useState} from 'react';
import Register from '../Registro/Register';
import Login from '../Registro/Login';

function Navbar() {

  const [showRegister, setShowRegister ] = useState(false);
  const [showLogin, setShowLogin ] = useState(false);

  return (
   
      <div >
        <ul >
          <Link as={Link} to="./">Home</Link>

          <NavDropdown title="Cursos">
            <NavDropdown.Item as={Link} to="./cursos">Cursos</NavDropdown.Item>
          </NavDropdown>

          <Link as={Link} to="./admin">Administración</Link>

          <li><button onClick={() => setShowRegister(true)}>Registro</button></li>
          <li><button onClick={() => setShowLogin(true)}>Iniciar Sesión</button></li>
        </ul>

          {showRegister && <Register onClose={() => setShowRegister(false)} />}


          {showLogin && <Login onClose={() => setShowLogin(false)} />}

      </div>
  )
}
export default Navbar;