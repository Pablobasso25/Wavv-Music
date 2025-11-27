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

          <div>
            <Dropdown>
              <Dropdown.Toggle>
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <h6></h6>
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <i></i>
                  <span>Cerrar Sesión</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <i></i>
                  <span>Perfil</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <i></i>
                  <span>Configuración</span>
                </Dropdown.Item>

                <Dropdown.Item>
                  <i></i>
                  <span>Premium</span>
                  <Badge>
                    PRO
                  </Badge>
                </Dropdown.Item>

                <Dropdown.Item>
                  <i></i>
                  <span>Panel Admin</span>
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item>
                  <i></i>
                  <span>Cerrar Sesión</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </NavBar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
