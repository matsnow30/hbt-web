function Servicios() {
  const servicios = [
    {
      titulo: "Desarrollo de software",
      texto:
        "Construimos plataformas y sistemas empresariales adaptados a cada operación."
    },
    {
      titulo: "Automatización de procesos",
      texto:
        "Reducimos tareas manuales mediante integración y automatización."
    },
    {
      titulo: "Dashboards y analítica",
      texto:
        "Transformamos datos en decisiones mediante visualización ejecutiva."
    },
    {
      titulo: "Integraciones empresariales",
      texto:
        "Conectamos plataformas para mejorar continuidad operacional."
    },
    {
      titulo: "Consultoría tecnológica",
      texto:
        "Evaluamos procesos y proponemos soluciones sostenibles."
    },
    {
      titulo: "Ingeniería y gestión",
      texto:
        "Diseñamos soluciones técnicas orientadas a resultados."
    }
  ];

  return (
    <main>

      <section className="page-header">
        <span>NUESTROS SERVICIOS</span>

        <h1>
          Diseñamos tecnología para hacer crecer empresas.
        </h1>

        <p>
          Soluciones de ingeniería, automatización y desarrollo
          para organizaciones que necesitan eficiencia y control.
        </p>
      </section>

      <section className="services-grid">

        {servicios.map((item) => (
          <article
            className="service-card"
            key={item.titulo}
          >
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

export default Servicios;