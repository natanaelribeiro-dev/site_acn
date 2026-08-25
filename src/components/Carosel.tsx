import { useState } from "react";
function Carosel() {
  const [showmodal, setShowModal] = useState(false);
  return (
    <>
      <div className="bg-light min-vh-100 d-flex align-items-center py-5">
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
      <section className="container py-4 g-2">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-header">
                <img
                  src="Public/empresa.webp"
                  className="card-img-top"
                  alt="ACN"
                />
                <h2 className="card-title">Portfólio de Serviços</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Conheça nosso portfólio de serviços e descubra como podemos
                  transformar seu projeto em realidade. Oferecemos soluções
                  completas em metalurgia, alumínio, vidraçaria e pré-moldados,
                  garantindo qualidade, segurança e durabilidade em cada etapa
                  do processo.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <a
                    onClick={() => setShowModal(true)}
                    className="btn btn-primary active"
                    aria-current="page"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-header">
                <img
                  src="Public/empresa.webp"
                  className="card-img-top"
                  alt="ACN"
                />
                <h2 className="card-title">Portfólio de Serviços</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Conheça nosso portfólio de serviços e descubra como podemos
                  transformar seu projeto em realidade. Oferecemos soluções
                  completas em metalurgia, alumínio, vidraçaria e pré-moldados,
                  garantindo qualidade, segurança e durabilidade em cada etapa
                  do processo.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <a
                    onClick={() => setShowModal(true)}
                    className="btn btn-primary active"
                    aria-current="page"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col card">
            <div className="card-header">
              <img
                src="Public/empresa.webp"
                className="card-img-top"
                alt="ACN"
              />
              <h2 className="card-title">Portfólio de Serviços</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                Conheça nosso portfólio de serviços e descubra como podemos
                transformar seu projeto em realidade. Oferecemos soluções
                completas em metalurgia, alumínio, vidraçaria e pré-moldados,
                garantindo qualidade, segurança e durabilidade em cada etapa do
                processo.
              </p>
            </div>
            <div className="card-footer">
              <div className="d-grid gap-2">
                <a
                  onClick={() => setShowModal(true)}
                  className="btn btn-primary active"
                  aria-current="page"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-header">
                <img
                  src="Public/empresa.webp"
                  className="card-img-top"
                  alt="ACN"
                />
                <h2 className="card-title">Portfólio de Serviços</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Conheça nosso portfólio de serviços e descubra como podemos
                  transformar seu projeto em realidade. Oferecemos soluções
                  completas em metalurgia, alumínio, vidraçaria e pré-moldados,
                  garantindo qualidade, segurança e durabilidade em cada etapa
                  do processo.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <a
                    onClick={() => setShowModal(true)}
                    className="btn btn-primary active"
                    aria-current="page"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carosel;
