import { Navbar, Nav, Container, Form, Dropdown, Badge } from "react-bootstrap";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="py-3" style={{ backgroundColor: "#000" }}>
      <Container>
        {/* LOGO Y BÓTON HAMBURGUESA */}
        <Navbar.Brand href="#" className="text-white fw-bold logo-custom">
          Wavv
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-secondary border-0"
        />

        <NavBar.Collapse id="basic-navbar-nav">
          {/* NAVEGACIÒN CENTRAL - Centrada en movil */}
          <Nav className="mx-auto my-3 my-lg-0 text-center">
            {isAdminPage ? (
              // Vista simplificada para Admin
              <NavLink
                to="/"
                className="text-secondary text-uppercase fw-bold mx-2 nav-link-custom"
              >
                <i className="bx bx-home-alt me-1"></i>
                Home
              </NavLink>
            ) : (
              // Vista completa para usarios
              <>
                <NavLink
                  to="/playlist"
                  className="text-secondary text-uppercase fw-bold mx-2 nav-link-custom"
                >
                  <i className="bx bx-list-ul me-1"></i>
                  Playlist
                </NavLink>
                <NavLink
                  href="#"
                  className="text-secondary text-uppercase fw-bold mx-2 nav-link-custom"
                >
                  NOSOTROS
                </NavLink>

                {/* Enlaces SOLO para ADMIN */}
                {user?.role === "admin" && (
                  <NavLink
                    to="/admin"
                    className="text-warning text-uppercase fw-bold mx-2 nav-link-custom"
                  >
                    <i className="bx bx-cog me-1"></i>
                    ADMIN
                  </NavLink>
                )}
              </>
            )}
          </Nav>

          {/* BÚSQUEDA Y PERFIL */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
            {/* BUSQUEDA - Solo en vista normal */}
            {isAdminPage && (
              <div className="search position-relative" ref={searchRef}>
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-white-50"></i>
                {isSearching && (
                  <div
                    className="spinner-border spinner-border-sm position-absolute top-50 end-0 translate-middle--y me-3"
                    style={{ width: "1rem", height: "1rem" }}
                    role="status"
                  >
                    <span className="visually-hidden">Buscando...</span>
                  </div>
                )}
                <Form.Control
                  type="text"
                  className="ps-5 border-dark text-white custom-search-input"
                  placeholder="Buscar canciones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.velue)}
                  style={{
                    width: "250px",
                    backgroundColor: "#1a1a1a",
                    borderColor: "#000000ff",
                    color: "#fff",
                  }}
                />

                {/* DROPDOWN DE RESULTADOS */}
                {showDropdown && (
                  <div
                    className="search-dropdown position-absolute mt-2 rounded-3 shadow-lg"
                    style={{
                      backgroundColor: "#202026",
                      width: "400px",
                      maxHeight: "500px",
                      overflowY: "auto",
                      zIndex: 1050,
                      border: "1px solid #333",
                    }}
                  >
                    {isSearching ? (
                      <div className="p-3 text-center text-secondary">
                        <div
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        >
                          <span className="visually-hidden">Buscando...</span>
                        </div>
                        Buscando...
                      </div>
                    ) : searchResults.length > 0 ? (
                      <>
                        <div className="p-2 border-bottom border-secondary">
                          <small className="text-secondary fw-bold">
                            {searchResults.length} resultados
                          </small>
                        </div>
                        {searchResults.map((track, index) => (
                          <div
                            key={index}
                            className="search-result-item d-flex align-items-center p-3 border-bottom border-dark"
                            style={{
                              cursor: "pointer",
                              transition: "background-color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#18181d")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "Transparent")
                            }
                          >
                            <img
                              src={
                                track.album.images[2]?.url ||
                                track.album.images[0]?.url
                              }
                              alt={track.name}
                              width="50"
                              height="50"
                              className="rounded me-3"
                            />
                            <div className="flex-grow-1">
                              <h6
                                className="mb-0 text-white"
                                style={{ fontSize: "0.9rem" }}
                              >
                                {track.name.length > 30
                                  ? track.name.substring(0, 30) + "..."
                                  : track.name}
                              </h6>
                              <small className="text-secondary">
                                {track.artists[0]?.name} • {track.album.name}
                              </small>
                            </div>
                            <div className="d-flex gap-2">
                              {track.preview_url && (
                                <i
                                  className="bx bx-play-circle fs-4 text-primary"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handlePlaySong(track)}
                                  title="Reproducir"
                                ></i>
                              )}
                              <i
                                className="bx bx-plus-circle fs-4 text-secondary"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleAddToPlaylist(track)}
                                title="Agregar a playlist"
                              ></i>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="p-3 text-center text-secondary">
                        <i className="bx bx-search-alt fs-2 d-block mb-2"></i>
                        No se encontraron resultados
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ICONOS Y PERFIL */}
            <div className="d-flex align-items-center gap-3">
              {/* PERFIL */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-user"
                  className="d-flex align-items-center  profile-toggle"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-start p-1">
                      <img
                        src="assets/profile.png"
                        className="rounded"
                        width="35"
                        height="35"
                        alt="Profile"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=35&h=35&fit=crop&crop=face";
                        }}
                      />
                    </div>
                    <div className="rounded-end p-2  d-md-block">
                      <h6 className="mb-0 text-white">
                        {user?.username || "Usuario"}
                      </h6>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className=" border-secondary"
                  style={{ backgroundColor: "#000", borderColor: "#000" }}
                >
                  {isAdminPage ? (
                    // Vista simplificada para Admin - Solo Cerrar Sesion
                    <Dropdown.Item
                      onClick={handleLogout}
                      className="text-white d-flex align-items-center dropdown-item-custom"
                      style={{ backgroundColor: "#000" }}
                    >
                      <i className="bx bx-log-out me-2"></i>
                      <span>Cerrar Sesión</span>
                    </Dropdown.Item>
                  ) : (
                    //Vista completa para usuarios
                    <>
                      <Dropdown.Item
                        className="text-white d-flex align-items-center dropdown-item-custom"
                        style={{ backgroundColor: "#000" }}
                      >
                        <i className="bx bx-user me-2"></i>
                        <span>Perfil</span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="text-white d-flex align-items-center dropdown-item-custom"
                        style={{ backgroundColor: "#000" }}
                      >
                        <i className="bx bx-cog me-2"></i>
                        <span>Configuración</span>
                      </Dropdown.Item>

                      {/* Opción Premium SOLO para usuarios normales */}
                      {user?.role !== "admin" && (
                      <Dropdown.Item
                        className="text-white d-flex align-items-center dropdown-item-custom"
                        style={{ backgroundColor: "#000" }}
                      >
                        <i className="bx bx-crown me-2"></i>
                        <span>Premium</span>
                        <Badge bg="warning" text="dark" className="ms-2">
                          PRO
                        </Badge>
                      </Dropdown.Item>
                      )}

                      {/* Panel admin SOLO para administradores */}
                      {user?.role === "admin" && (
                        <Dropdown.Item
                          onClick={() => navigate("/admin")}
                          className="text-warning d-flex align-items-center dropdown-item-custom"
                          style={{ backgroundColor: "#000" }}
                        >
                          <i className="bx bx-shield me-2"></i>
                          <span>Panel Admin</span>
                        </Dropdown.Item>
                      )}

                      <Dropdown.Divider className="border-secondary" />
                      <Dropdown.Item
                        onClick={handleLogout}
                        className="text-white d-flex align-items-center dropdown-item-custom"
                        style={{ backgroundColor: "#000" }}
                      >
                        <i className="bx bx-log-out me-2"></i>
                        <span>Cerrar Sesión</span>
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </NavBar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
