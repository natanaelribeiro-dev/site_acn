import { useState } from "react";
function Hero() {
  const [showmodal, setShowModal] = useState(false);
  return (
    <><div className="bg-light min-vh-100 d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center flex-row-reverse gy-4">
            <div className="col-12 col-lg-5 text-center">
              <img
                src="public/empresa.webp"
                alt="Hero image"
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxWidth: "384px" }}
              />
            </div>
            <div className="col-12 col-lg-7">
              <h1 className="display-4 fw-bold">
                DJES Metalúrgica e Pré-Moldados
              </h1>
              <p className="py-3 fs-5 text-secondary">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>

              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#ff7700", color: "white" }}
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
