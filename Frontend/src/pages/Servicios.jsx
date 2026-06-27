const servicios = [
  {
    id: "analisis-operacional",
    area: "Lean management",
    titulo: "Análisis operacional",
    texto:
      "Observamos el proceso real, levantamos datos y detectamos cuellos de botella antes de proponer cambios.",
    entregables: ["3G / Gemba", "BPMN en Bizagi", "TPM", "SMED"],
    resultado: "Un diagnóstico claro de cómo trabaja hoy la operación.",
  },
  {
    id: "mejora-continua",
    area: "Kaizen y DMAIC",
    titulo: "Planes de mejora",
    texto:
      "Priorizamos acciones de mejora con metodología estructurada y foco en impacto operacional.",
    entregables: ["Kaizen", "DMAIC", "PDCA", "A3", "5S"],
    resultado: "Acciones concretas para ordenar, controlar y mejorar procesos.",
  },
  {
    id: "software-modular",
    area: "Software a medida",
    titulo: "Sistemas por módulos",
    texto:
      "Desarrollamos plataformas ajustadas al proceso del cliente: CRM, portales, páginas web o gestión interna.",
    entregables: ["CRM", "Portales web", "Scrum Master", "Módulos operativos"],
    resultado: "Software construido según lo que la empresa realmente necesita.",
  },
  {
    id: "automatizacion-procesos",
    area: "Automatización",
    titulo: "Flujos automatizados",
    texto:
      "Automatizamos compras, ventas, alertas, aprobaciones y tareas repetitivas con herramientas como n8n.",
    entregables: ["n8n", "Poka-Yoke", "Compras y ventas", "Alertas automáticas"],
    resultado: "Menos trabajo manual y mayor trazabilidad entre áreas.",
  },
  {
    id: "datos-dashboard",
    area: "Indicadores financieros",
    titulo: "Análisis y control de gestión",
    texto:
      "Analizamos indicadores operativos y financieros para definir acciones que mejoren el rendimiento del negocio.",
    entregables: ["MySQL", "Python", "Dashboards"],
    resultado: "Software e indicadores para tomar decisiones con información clara.",
  },
  {
    id: "planificacion-estrategica",
    area: "Dirección del negocio",
    titulo: "Planificación estratégica",
    texto:
      "Alineamos objetivos, indicadores y planes de acción para orientar mejor la toma de decisiones.",
    entregables: ["Balanced Scorecard", "Objetivos", "Planes de acción"],
    resultado: "Una hoja de ruta clara para gestionar y crecer con foco.",
  },
];

const enfoque = [
  {
    valor: "01",
    titulo: "Vemos el proceso real",
    texto:
      "Observamos, medimos y entendemos la operación antes de diseñar.",
  },
  {
    valor: "02",
    titulo: "Priorizamos con datos",
    texto:
      "Combinamos análisis operativo, datos duros y planes de acción.",
  },
  {
    valor: "03",
    titulo: "Construimos lo necesario",
    texto:
      "Desarrollamos sistemas, automatizaciones o tableros según el caso.",
  },
];

function Servicios() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <span className="services-hero__eyebrow">SERVICIOS HBT</span>

          <p>
            Combinamos Lean Management, análisis de datos y desarrollo de software
            para mejorar procesos, indicadores y toma de decisiones.
          </p>
        </div>

      </section>

      <section className="services-proof" aria-label="Forma de trabajo HBT">
        {enfoque.map((item) => (
          <article className="services-proof__item" key={item.titulo}>
            <span>{item.valor}</span>
            <h2>{item.titulo}</h2>
            <p>{item.texto}</p>
          </article>
        ))}
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
            </div>
          </article>
        ))}
      </section>

      <section className="services-cta">
        <div>
          <span>HBT ENGINEERING & TECHNOLOGY</span>
          <h2>Hablemos de lo que hoy frena tu operación.</h2>
        </div>

        <a href="/contacto">Consultar servicio</a>
      </section>
    </main>
  );
}

export default Servicios;
