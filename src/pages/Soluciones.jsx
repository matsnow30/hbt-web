function Soluciones() {
  const soluciones = [
    {
      titulo: "Portales empresariales",
      texto:
        "Plataformas web para clientes, operaciones internas, gestión documental y seguimiento de procesos.",
    },
    {
      titulo: "Automatización documental",
      texto:
        "Flujos digitales para reducir trabajo manual, ordenar información y acelerar respuestas operacionales.",
    },
    {
      titulo: "Dashboards ejecutivos",
      texto:
        "Paneles de control con indicadores claros para apoyar la toma de decisiones estratégicas.",
    },
    {
      titulo: "Sistemas internos",
      texto:
        "Herramientas personalizadas para administrar procesos, usuarios, registros y operaciones críticas.",
    },
    {
      titulo: "Integraciones tecnológicas",
      texto:
        "Conexión entre sistemas, bases de datos y plataformas para mejorar continuidad operacional.",
    },
    {
      titulo: "IA aplicada",
      texto:
        "Soluciones inteligentes para análisis, asistencia operativa, clasificación y apoyo a decisiones.",
    },
  ];

  return (
    <main>
      <section className="page-header">
        <span>SOLUCIONES</span>

        <h1>
          Soluciones digitales para mejorar operación, control y crecimiento.
        </h1>

        <p>
          Diseñamos herramientas tecnológicas adaptadas a procesos reales,
          combinando ingeniería, software, datos y automatización.
        </p>
      </section>

      <section className="services-grid">
        {soluciones.map((item) => (
          <article className="service-card" key={item.titulo}>
            <div className="service-line"></div>

            <h3>{item.titulo}</h3>

            <p>{item.texto}</p>

            <button>
              Ver solución
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Soluciones;