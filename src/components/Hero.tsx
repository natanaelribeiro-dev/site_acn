function Hero() {
  return (
    <><div className="theme-surface hero-section w-100 h-80 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center flex-row-reverse gy-4">
            <div className="col-12 col-lg-5 text-center">
              <img
                src="/DJES.png"
                alt="Logo DJES Metalúrgica e Pré-Moldados"
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxWidth: "384px" }}
              />
            </div>
            <div className="col-12 col-lg-7">
              <h1 className="display-4 fw-bold">
                DJES Metalúrgica e <br/> Pré-Moldados
              </h1>
              <p className="theme-text-muted py-3 fs-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>

              <button
                type="button"
                className="btn theme-button"
              >
                Faça seu orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    
    
    
    </>
);
}

export default Hero;
