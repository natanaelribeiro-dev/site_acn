        function Navbar() {
  return (
    <>
      <header className="w-100 p-0">
        <nav className="navbar navbar-expand-lg bg-body-tertiary theme-navbar w-100">
          <button type="button" className="btn theme-button">
            DJSES
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  <li>
                    <a className="dropdown-item" href="#">
                      Empresa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fundação
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contato
                    </a>
                  </li>
                </ul>
              </li>
            </ul>  
          </div>
          <a className="whasts" href="https://wa.me/5546991264244" target="_blank" title="Chame no whatsapp!" id="bt-areadocliente">
						<i className="bi bi-whatsapp"></i>
            <span className="elementor-button-content-wrapper"></span>
						<span className="elementor-button-icon elementor-align-icon-left">
						<span className="elementor-button-text"> (46) 99126-4244</span>
            
		</span>
					</a>
        </nav>
      </header>
    </>
  );
    }
export default Navbar;
