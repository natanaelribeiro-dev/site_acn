function Home() {
  return (
    <>

        <div
          id="carouselExampleInterval"
          className="carousel slide-fluid"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="public/empresa.webp"
                className="d-block w-100 h-50  img-fluid rounded" 
          
                alt="ACN"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="public/empresa.webp"
                className="d-block w-100 h-50"
                alt="ACN"
              />
            </div>
            <div className="carousel-item">
              <img
                src="public/empresa.webp"
                className="d-block  h-50"
                alt="ACN"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container py - 4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
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
                 Conheça nosso portfólio de serviços e descubra como podemos transformar seu projeto em realidade. Oferecemos soluções completas em metalurgia, alumínio, vidraçaria e pré-moldados, garantindo qualidade, segurança e durabilidade em cada etapa do processo.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <a
                    href="https://dora.fandom.com/wiki/Lost_and_Found"
                    className="btn btn-primary active"
                    aria-current="page"
                  >
                    Saiba Mais
                  </a>
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
                 Conheça nosso portfólio de serviços e descubra como podemos transformar seu projeto em realidade. Oferecemos soluções completas em metalurgia, alumínio, vidraçaria e pré-moldados, garantindo qualidade, segurança e durabilidade em cada etapa do processo.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <a
                    href="https://dora.fandom.com/wiki/Lost_and_Found"
                    className="btn btn-primary active"
                    aria-current="page"
                  >
                    Saiba Mais
                  </a>
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
                 Conheça nosso portfólio de serviços e descubra como podemos transformar seu projeto em realidade. Oferecemos soluções completas em metalurgia, alumínio, vidraçaria e pré-moldados, garantindo qualidade, segurança e durabilidade em cada etapa do processo.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <a
                    href="https://dora.fandom.com/wiki/Lost_and_Found"
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

        

        <div>
          <div className="card">
            <div className="card-header">
              <h2>Sobre Nós</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">
                Soluções completas em metalurgia, alumínio, vidraçaria e
                pré-moldados A ACN Metalúrgica e Pré-Moldados atua em Pato
                Branco PR, oferecendo soluções completas para projetos
                residenciais, comerciais e industriais. Nosso trabalho une
                **qualidade, segurança, durabilidade e acabamento
                profissional**, buscando atender às necessidades de cada
                cliente. Trabalhamos com uma ampla variedade de serviços e
                produtos, incluindo **estruturas metálicas, portões, grades,
                coberturas, fachadas em ACM, motores eletrônicos para portões,
                vidros temperados, esquadrias de alumínio, calhas, rufos,
                funilaria e pré-moldados**. Cada projeto é desenvolvido com
                atenção aos detalhes e compromisso com um resultado de
                qualidade. Valorizamos o **atendimento personalizado**, buscando
                entender o que cada cliente precisa e oferecer uma solução
                adequada ao seu projeto. ### Nosso compromisso Na ACN,
                acreditamos que um bom serviço vai além da execução. Por isso,
                trabalhamos para entregar **soluções resistentes, funcionais e
                com excelente acabamento**, mantendo o compromisso com a
                satisfação de nossos clientes. **ACN Metalúrgica e Pré-Moldados
                — qualidade e confiança para transformar seu projeto em
                realidade.**
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Home;
