import { Link } from "react-router-dom";

function Industrias() {
  const industrias = [
    {
      titulo: "Seguros",
      texto:
        "Gestión de clientes, pólizas, documentos, indicadores y automatización de procesos administrativos.",
    },
    {
      titulo: "Retail",
      texto:
        "Control comercial, reportes, productividad, procesos internos e integración de datos.",
    },
    {
      titulo: "Logística",
      texto:
        "Seguimiento operativo, rutas, gestión documental, control de estados y análisis de desempeño.",
    },
    {
      titulo: "Servicios profesionales",
      texto:
        "Portales, tableros y automatizaciones para administrar clientes, proyectos y operaciones internas.",
    },
    {
      titulo: "Educación",
      texto:
        "Plataformas para gestión administrativa, seguimiento, reportabilidad y análisis institucional.",
    },
    {
      titulo: "Pymes en crecimiento",
      texto:
        "Soluciones para ordenar información, digitalizar procesos y profesionalizar la gestión.",
    },
  ];

  return (
    <main>
      <section className="page-header">
        <span>INDUSTRIAS</span>

        <h1>
          Industrias donde aportamos valor.
        </h1>

        <p>
          Cada empresa tiene procesos, ritmos y restricciones distintas. Adaptamos
          el enfoque técnico según su realidad, madurez digital y forma de trabajar.
        </p>
      </section>

      <section className="services-grid">
        {industrias.map((industria) => (
          <article className="service-card" key={industria.titulo}>
            <div className="service-line"></div>

            <h3>{industria.titulo}</h3>

            <p>{industria.texto}</p>

            <Link to="/contacto">
              Conversar sobre esta industria
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Industrias;
