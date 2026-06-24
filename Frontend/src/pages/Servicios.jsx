const servicios = [
  {
    id: "ingenieria-gestion",
    area: "Ingeniería operacional",
    titulo: "Ingeniería y gestión",
    texto:
      "Diseñamos soluciones técnicas y operacionales para mejorar desempeño, continuidad y capacidad de crecimiento.",
    entregables: ["Diagnóstico operativo", "Diseño de flujos", "Plan de mejora"],
    resultado: "Operaciones más claras, medibles y sostenibles."
  },
  {
    id: "desarrollo-software",
    area: "Plataformas empresariales",
    titulo: "Desarrollo de software",
    texto:
      "Construimos sistemas empresariales adaptados a procesos reales, con foco en escalabilidad, seguridad y mantenibilidad.",
    entregables: ["Aplicaciones web", "Portales internos", "Sistemas a medida"],
    resultado: "Tecnología alineada al funcionamiento de la empresa."
  },
  {
    id: "automatizacion-procesos",
    area: "Optimización digital",
    titulo: "Automatización de procesos",
    texto:
      "Reducimos tareas manuales y errores operativos mediante integración tecnológica, reglas de negocio y flujos automatizados.",
    entregables: ["Flujos digitales", "Alertas operativas", "Validaciones automáticas"],
    resultado: "Procesos más rápidos, controlados y trazables."
  },
  {
    id: "integracion-sistemas",
    area: "Arquitectura tecnológica",
    titulo: "Integración de sistemas",
    texto:
      "Conectamos plataformas, bases de datos y fuentes de información para mejorar continuidad operacional y evitar duplicidad.",
    entregables: ["APIs", "Conectores", "Sincronización de datos"],
    resultado: "Información consistente entre áreas y plataformas."
  },
  {
    id: "datos-business-intelligence",
    area: "Datos & BI",
    titulo: "Datos & Business Intelligence",
    texto:
      "Transformamos información operativa en visualizaciones ejecutivas para apoyar decisiones con datos claros y oportunos.",
    entregables: ["Modelos de datos", "Tableros ejecutivos", "Indicadores de gestión"],
    resultado: "Decisiones basadas en información confiable."
  },
  {
    id: "transformacion-digital",
    area: "Consultoría tecnológica",
    titulo: "Consultoría en transformación digital",
    texto:
      "Evaluamos procesos, sistemas y oportunidades de mejora para diseñar iniciativas tecnológicas sostenibles.",
    entregables: ["Roadmap digital", "Priorización técnica", "Acompañamiento"],
    resultado: "Evolución tecnológica ordenada y con impacto real."
  }
];

const metodologia = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    texto:
      "Levantamos procesos, sistemas, datos y puntos críticos antes de proponer una solución."
  },
  {
    numero: "02",
    titulo: "Diseño técnico",
    texto:
      "Definimos arquitectura, alcance, prioridades y entregables con una mirada escalable."
  },
  {
    numero: "03",
    titulo: "Implementación",
    texto:
      "Construimos, integramos y validamos la solución cuidando continuidad operacional."
  },
  {
    numero: "04",
    titulo: "Mejora continua",
    texto:
      "Acompañamos la evolución del sistema para mantener rendimiento, control y valor."
  }
];

function Servicios() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <span className="services-hero__eyebrow">SERVICIOS HBT</span>

          <h1>Ingeniería y tecnología orientadas a resultados.</h1>

          <p>
            Diseñamos soluciones que conectan procesos, sistemas y datos para mejorar eficiencia operativa,
            control interno y capacidad de crecimiento.
          </p>
        </div>

        <div className="services-hero__panel" aria-label="Enfoque de trabajo HBT">
          <span>Engineering + Technology</span>
          <strong>Soluciones sostenibles para operación, datos y gestión.</strong>
        </div>
      </section>

      <section className="services-grid" aria-label="Listado de servicios HBT">
        {servicios.map((servicio, index) => (
          <article
            className={`service-card ${index === 0 ? "service-card--featured" : ""}`}
            key={servicio.id}
          >
            <div>
              <span className="service-card__area">{servicio.area}</span>

              <div className="service-line" />

              <h2>{servicio.titulo}</h2>

              <p>{servicio.texto}</p>

              <ul>
                {servicio.entregables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-card__footer">
              <span>{servicio.resultado}</span>

              <a href="/contacto" aria-label={`Consultar por ${servicio.titulo}`}>
                Conocer servicio →
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="services-method">
        <div className="services-method__intro">
          <span>METODOLOGÍA</span>

          <h2>Un proceso claro para soluciones reales.</h2>

          <p>
            Cada iniciativa parte desde la operación del cliente y avanza con criterios técnicos,
            documentación clara y foco en resultados medibles.
          </p>
        </div>

        <div className="services-method__grid">
          {metodologia.map((paso) => (
            <article className="method-card" key={paso.numero}>
              <span>{paso.numero}</span>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div>
          <span>HBT ENGINEERING & TECHNOLOGY</span>
          <h2>Conversemos sobre el próximo desafío operacional o tecnológico de tu empresa.</h2>
        </div>

        <a href="/contacto">Solicitar asesoría</a>
      </section>
    </main>
  );
}

export default Servicios;
