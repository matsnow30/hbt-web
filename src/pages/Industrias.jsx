function Industrias() {
  const industrias = [
    {
      titulo: "Seguros",
      texto:
        "Soluciones para gestión de clientes, pólizas, documentación, indicadores y automatización operativa.",
    },
    {
      titulo: "Retail",
      texto:
        "Herramientas para control comercial, reportes, productividad, procesos internos e integración de datos.",
    },
    {
      titulo: "Logística",
      texto:
        "Sistemas para seguimiento, control operativo, rutas, gestión documental y análisis de desempeño.",
    },
    {
      titulo: "Servicios profesionales",
      texto:
        "Portales, dashboards y automatizaciones para empresas que administran clientes, proyectos y operaciones.",
    },
    {
      titulo: "Educación",
      texto:
        "Plataformas para gestión, seguimiento, reportabilidad, procesos administrativos y análisis institucional.",
    },
    {
      titulo: "Pymes en crecimiento",
      texto:
        "Soluciones escalables para ordenar información, digitalizar procesos y profesionalizar la gestión.",
    },
  ];

  return (
    <main>
      <section className="page-header">
        <span>INDUSTRIAS</span>

        <h1>
          Tecnología aplicada a los desafíos reales de cada sector.
        </h1>

        <p>
          Adaptamos soluciones de ingeniería, software, datos y automatización
          según la operación, madurez digital y necesidades de cada industria.
        </p>
      </section>

      <section className="services-grid">
        {industrias.map((industria) => (
          <article className="service-card" key={industria.titulo}>
            <div className="service-line"></div>

            <h3>{industria.titulo}</h3>

            <p>{industria.texto}</p>

            <button>
              Ver industria
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Industrias;