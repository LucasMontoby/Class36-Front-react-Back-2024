import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
   
      <div >
        <ul >
          <Link as={Link} to="./">Home</Link>

          <NavDropdown title="Cursos">
            
            <NavDropdown.Item as={Link} to="./cursos">Cursos</NavDropdown.Item>
      
          </NavDropdown>
          <Link as={Link} to="./admin">Administración</Link>
        </ul>
      </div>
  )
}
export default Navbar