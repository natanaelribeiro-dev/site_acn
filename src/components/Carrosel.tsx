function Carrosel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide theme-surface"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={`${import.meta.env.BASE_URL}DJES.png`}
            className="d-block"
            alt="Logo DJES Metalúrgica e Pré-Moldados"
            style={{ width: "30rem", height: "auto" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={`${import.meta.env.BASE_URL}DJES.png`}
            className="d-block"
            alt="Logo DJES Metalúrgica e Pré-Moldados"
            style={{ width: "30rem", height: "auto" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={`${import.meta.env.BASE_URL}DJES.png`}
            className="d-block"
            alt="Logo DJES Metalúrgica e Pré-Moldados"
            style={{ width: "30rem", height: "auto" }}
          />
        </div>
      </div>
      <button
        className="btn theme-button carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrosel;
