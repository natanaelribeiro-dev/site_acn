function Navbar() {
  return (
    <>
      <header className="w-100 p-0">
        <nav className="navbar bg-body-tertiary theme-navbar w-100 h-20">
          <div className="container-fluid">
            <a className="btn theme-button" href="#">
              DJSES
            </a>
            <ul className="navbar-nav navbar-main-links d-none d-lg-flex ms-4 me-auto">
              <li className="nav-item">
                <a className="nav-link active navbar-highlight-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-highlight-link" href="#">
                  Redes Sociais
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sobre nós
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Empresa</a></li>
                  <li><a className="dropdown-item" href="#">Fundação</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Contato</a></li>
                </ul>
              </li>
            </ul>
            <div className="navbar-actions">
              <a
                className="whasts"
                href="https://wa.me/5546991264244"
                target="_blank"
                title="Chame no whatsapp!"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                <span className="elementor-button-text"> (46) 99126-4244</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Abrir menu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="offcanvas offcanvas-end theme-surface"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  DJSES
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Fechar menu"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Redes Sociais
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sobre nós
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Empresa</a></li>
                      <li><a className="dropdown-item" href="#">Fundação</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Contato</a></li>
                    </ul>
                  </li>
                </ul>
                <a
                  className="whasts offcanvas-contact"
                  href="https://wa.me/5546991264244"
                  target="_blank"
                  title="Chame no whatsapp!"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span className="elementor-button-text"> (46) 99126-4244</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
