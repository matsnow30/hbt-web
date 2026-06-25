const servicios = [
  {
    id: "diagnostico-procesos",
    area: "Orden y control",
    titulo: "Diagnóstico de procesos",
    texto:
      "Revisamos cómo trabaja hoy la empresa, qué tareas se repiten, dónde falta información y qué controles conviene mejorar.",
    entregables: ["Mapa del proceso", "Problemas priorizados", "Plan de mejora"],
    resultado: "Una operación más clara antes de invertir en sistemas.",
  },
  {
    id: "sistemas-medida",
    area: "Software interno",
    titulo: "Sistemas a medida",
    texto:
      "Creamos plataformas para administrar solicitudes, documentos, clientes, tareas, inventarios o procesos propios de la empresa.",
    entregables: ["Aplicación web", "Roles de usuario", "Registro y seguimiento"],
    resultado: "Herramientas pensadas para la forma real de trabajar del equipo.",
  },
  {
    id: "automatizacion-tareas",
    area: "Menos trabajo manual",
    titulo: "Automatización de tareas",
    texto:
      "Reducimos digitación, correos repetidos, aprobaciones manuales y alertas que hoy dependen de una persona.",
    entregables: ["Flujos de trabajo", "Alertas automáticas", "Reglas de negocio"],
    resultado: "Procesos más rápidos, trazables y con menos errores.",
  },
  {
    id: "integracion-sistemas",
    area: "Información conectada",
    titulo: "Integración entre sistemas",
    texto:
      "Conectamos fuentes de datos, plataformas y registros para evitar doble ingreso e información inconsistente.",
    entregables: ["Conectores", "Sincronización de datos", "Validaciones"],
    resultado: "Información más confiable entre áreas, sistemas y equipos.",
  },
  {
    id: "tableros-indicadores",
    area: "Gestión con datos",
    titulo: "Tableros e indicadores",
    texto:
      "Ordenamos información operativa para mostrar indicadores de avance, cumplimiento, productividad y puntos críticos.",
    entregables: ["Modelo de datos", "Tableros de gestión", "Indicadores clave"],
    resultado: "Mejores decisiones con información oportuna y visible.",
  },
  {
    id: "acompanamiento",
    area: "Puesta en marcha",
    titulo: "Acompañamiento técnico",
    texto:
      "Apoyamos la implementación, capacitación inicial y mejora posterior para que la solución sea usada por el equipo.",
    entregables: ["Ruta de implementación", "Documentación", "Soporte inicial"],
    resultado: "Una adopción más ordenada y con menor resistencia interna.",
  },
];

const enfoque = [
  {
    valor: "01",
    titulo: "Entendemos antes de proponer",
    texto:
      "No recomendamos tecnología sin revisar primero el proceso, las personas involucradas y la información disponible.",
  },
  {
    valor: "02",
    titulo: "Definimos entregables concretos",
    texto:
      "Cada proyecto queda con alcance, prioridades y resultados esperados para evitar soluciones poco claras.",
  },
  {
    valor: "03",
    titulo: "Acompañamos la puesta en marcha",
    texto:
      "Trabajamos junto al equipo cliente para que la solución se incorpore a la operación diaria.",
  },
];

const metodologia = [
  {
    numero: "01",
    titulo: "Levantamiento",
    texto:
      "Conversamos con los equipos, revisamos el proceso actual y detectamos tareas manuales, brechas y riesgos.",
  },
  {
    numero: "02",
    titulo: "Diseño de solución",
    texto:
      "Definimos qué se construirá, qué datos se necesitan, quiénes lo usarán y cómo se medirá el resultado.",
  },
  {
    numero: "03",
    titulo: "Desarrollo e integración",
    texto:
      "Construimos la herramienta, conectamos información cuando corresponde y validamos con usuarios reales.",
  },
  {
    numero: "04",
    titulo: "Puesta en marcha",
    texto:
      "Acompañamos el uso inicial, ajustamos detalles y dejamos una base preparada para seguir mejorando.",
  },
];

function Servicios() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <span className="services-hero__eyebrow">SERVICIOS HBT</span>

          <h1>Servicios para ordenar tu operación.</h1>

          <p>
            Reducimos trabajo manual, mejoramos el control y conectamos información
            mediante sistemas, automatizaciones e indicadores claros.
          </p>
        </div>

        <div className="services-hero__panel" aria-label="Enfoque de trabajo HBT">
          <span>Forma de trabajo</span>
          <strong>Primero entendemos la operación. Después construimos la solución.</strong>
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

              <a href="/contacto" aria-label={`Consultar por ${servicio.titulo}`}>
                Solicitar diagnóstico
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="services-method">
        <div className="services-method__intro">
          <span>MÉTODO DE TRABAJO</span>

          <h2>Un proceso simple.</h2>

          <p>
            Cada iniciativa parte desde la operación del cliente y avanza con
            prioridades claras, validación con usuarios y foco en resultados medibles.
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
          <h2>Hablemos de lo que hoy frena a tu empresa.</h2>
        </div>

        <a href="/contacto">Agendar conversación inicial</a>
      </section>
    </main>
  );
}

export default Servicios;
