function Inicio() {
  const servicios = [
    {
      numero: "01",
      titulo: "Ingeniería de procesos",
      texto: "Levantamos, analizamos y optimizamos procesos operacionales, administrativos y comerciales.",
    },
    {
      numero: "02",
      titulo: "Desarrollo tecnológico",
      texto: "Construimos plataformas, aplicaciones web y sistemas internos adaptados a cada operación.",
    },
    {
      numero: "03",
      titulo: "Datos & BI",
      texto: "Transformamos información en dashboards, indicadores y herramientas para decidir mejor.",
    },
    {
      numero: "04",
      titulo: "Automatización",
      texto: "Reducimos tareas manuales, integramos sistemas y mejoramos continuidad operacional.",
    },
  ];

  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-hero__badge">
            INGENIERÍA · TECNOLOGÍA · DATOS
          </span>

          <h1>
            Soluciones tecnológicas e ingeniería para empresas que buscan crecer.
          </h1>

          <p>
            Diseñamos sistemas, optimizamos procesos y desarrollamos soluciones
            digitales para aumentar eficiencia, automatizar operaciones y mejorar
            la toma de decisiones.
          </p>

          <div className="home-hero__actions">
            <a href="/contacto" className="btn btn--primary">
              Solicitar asesoría
            </a>

            <a href="/servicios" className="btn btn--secondary">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="home-hero__visual">
          <div className="home-hero__panel">
            <div className="home-hero__panel-header">
              <span>HBT</span>
              <small>Engineering & Technology</small>
            </div>

            <div className="home-hero__panel-grid">
              <article>
                <strong>Procesos</strong>
                <p>Optimización</p>
              </article>

              <article>
                <strong>Software</strong>
                <p>Desarrollo</p>
              </article>

              <article>
                <strong>Datos</strong>
                <p>BI & Analytics</p>
              </article>

              <article>
                <strong>Automatización</strong>
                <p>Eficiencia</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="home-metrics">
        <article>
          <strong>4</strong>
          <span>Áreas principales</span>
        </article>

        <article>
          <strong>360°</strong>
          <span>Visión operacional</span>
        </article>

        <article>
          <strong>+Datos</strong>
          <span>Mejores decisiones</span>
        </article>
      </section>

      <section className="home-services">
        <div className="home-section-title">
          <span>QUÉ HACEMOS</span>

          <h2>
            Transformamos procesos empresariales en soluciones digitales.
          </h2>
        </div>

        <div className="home-services__grid">
          {servicios.map((servicio) => (
            <article className="home-service-card" key={servicio.titulo}>
              <span>{servicio.numero}</span>

              <h3>{servicio.titulo}</h3>

              <p>{servicio.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div>
          <span>HBT ENGINEERING & TECHNOLOGY</span>

          <h2>
            ¿Tienes un proceso que quieres mejorar, automatizar o digitalizar?
          </h2>
        </div>

        <a href="/contacto" className="btn btn--primary">
          Conversemos
        </a>
      </section>
    </main>
  );
}

export default Inicio;