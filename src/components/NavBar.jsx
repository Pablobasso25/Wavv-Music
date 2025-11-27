import { Navbar, Container, Nav, Form, Dropdown, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Wavv</Navbar.Brand>

        <Navbar.Toggle />

        <NavBar.Collapse>
          <Nav>
            <NavLink>Home</NavLink>
            <NavLink>Playlist</NavLink>
            <NavLink>NOSOTROS</NavLink>
            <NavLink>ADMIN</NavLink>
          </Nav>
          <div>
            <div>
              <div>
                <span>Buscando...</span>
              </div>
            </div>
          </div>

          <Form.Control type="text" placeholder="Buscar canciones..." />
          <div>
            <div>
              <div>
                <span>Buscando...</span>
              </div>
              Buscando...
            </div>
            <div>
              <small>resultados</small>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h6></h6>
                <small></small>
              </div>
              <div>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
          <div>
            <i></i>
            No se encontraron resultados
          </div>
        </NavBar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
