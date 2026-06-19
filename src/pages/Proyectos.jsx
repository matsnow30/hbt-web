function Proyectos() {
  const proyectos = [
    {
      titulo: "Portal de gestión empresarial",
      industria: "Servicios profesionales",
      texto:
        "Diseño de plataforma web para centralizar información, usuarios, documentos y procesos internos.",
    },
    {
      titulo: "Dashboard de indicadores",
      industria: "Control de gestión",
      texto:
        "Construcción de paneles ejecutivos para visualizar desempeño, productividad y resultados operacionales.",
    },
    {
      titulo: "Automatización documental",
      industria: "Operaciones",
      texto:
        "Digitalización de tareas repetitivas para reducir tiempos, errores manuales y carga administrativa.",
    },
  ];

  return (
    <main>
      <section className="page-header">
        <span>PROYECTOS</span>

        <h1>
          Proyectos tecnológicos orientados a resultados medibles.
        </h1>

        <p>
          Desarrollamos soluciones para mejorar gestión, productividad,
          análisis de información y continuidad operacional.
        </p>
      </section>

      <section className="projects-grid">
        {proyectos.map((proyecto) => (
          <article className="project-card" key={proyecto.titulo}>
            <span>{proyecto.industria}</span>

            <h3>{proyecto.titulo}</h3>

            <p>{proyecto.texto}</p>

            <button>
              Ver proyecto
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Proyectos;