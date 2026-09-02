function Footer() {
  return (
    <>
    <footer className="bg-body-tertiary text-center">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a
      data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
        ><i className="bi bi-facebook" aria-hidden="true"></i>
      </a>

      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
        ><i className="bi bi-twitter" aria-hidden="true"></i>
      </a>

      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#dd4b39" }}
        href="#!"
        role="button"
        ><i className="bi bi-google" aria-hidden="true"></i>
      </a>

      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
        ><i className="bi bi-instagram" aria-hidden="true"></i>
      </a>

      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#0082ca" }}
        href="#!"
        role="button"
        ><i className="bi bi-linkedin" aria-hidden="true"></i>
      </a>
      <a
        data-mdb-ripple-init
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#333333" }}
        href="#!"
        role="button"
        ><i className="bi bi-github" aria-hidden="true"></i>
      </a>
    </section>
  </div>

  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
    © 2020 Copyright:
    <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    
    
    
    </>
);
}

export default Footer;
