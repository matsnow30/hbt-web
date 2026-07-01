import { useState } from "react";

const servicios = [
  {
    id: "analisis-operacional",
    area: "Diagnóstico operacional",
    titulo: "Análisis operacional",
    texto:
      "Revisamos la operación, levantamos procesos y detectamos dónde se pierde valor.",
    aplica: "La operación necesita entender dónde se pierde tiempo, control o capacidad operativa.",
    entregables: ["Levantamiento de procesos", "Diagramas de flujo", "Oportunidades de mejora", "Planes de acción"],
    metodologia: ["Gemba", "BPMN", "SIPOC", "Análisis de datos", "Identificación de desperdicios", "ACR"],
    herramientas: ["Bizagi", "Ishikawa", "5 Porqués", "4Q", "Matriz RECI", "Matriz de priorización"],
    resultado: "Un diagnóstico para decidir qué mejorar, automatizar y controlar.",
  },
  {
    id: "mejora-continua",
    area: "Mejora continua",
    titulo: "Mejora operacional",
    texto:
      "Desarrollamos proyectos Kaizen y DMAIC para corregir ineficiencias operacionales y fortalecer el desempeño del proceso.",
    aplica: "La empresa necesita abordar problemas operacionales con una metodología estructurada, medible y orientada a resultados.",
    entregables: ["Proyecto Kaizen orientado a beneficios tangibles", "DMAIC", "Plan de acción", "Indicadores", "Seguimiento"],
    metodologia: ["Kaizen", "DMAIC", "Análisis de datos", "PDCA", "5S", "Estandarización operacional"],
    herramientas: ["POEV", "LUP", "Ishikawa", "5 Porqués", "ACR"],
    resultado: "Mejoras implementables para aumentar productividad, calidad y control operacional.",
  },
  {
    id: "software-modular",
    area: "Software a medida",
    titulo: "ERP y CRM a medida",
    texto:
      "Construimos sistemas ERP y CRM adaptados a los procesos reales de la empresa, integrando operación, gestión comercial e información clave del negocio.",
    aplica: "La empresa necesita ordenar su operación, clientes, ventas, registros o áreas internas en un sistema propio.",
    entregables: ["ERP", "CRM", "Módulos operativos", "Integraciones", "Flujos internos"],
    metodologia: ["Levantamiento funcional", "Análisis de datos", "Diseño modular", "Modelamiento de procesos", "Implementación iterativa"],
    herramientas: ["React", "Node.js", "APIs", "Bases de datos", "Git"],
    resultado: "Un sistema empresarial diseñado según la forma real en que trabaja la organización.",
  },
  {
    id: "datos-dashboard",
    area: "Datos y gestión",
    titulo: "Datos e inteligencia de negocios",
    texto:
      "Consolidamos información dispersa y construimos bases de datos, indicadores y reportes para mejorar el control de gestión.",
    aplica: "La empresa necesita transformar datos operativos o financieros en información confiable para tomar decisiones.",
    entregables: ["Bases de datos", "Indicadores", "Reportes de gestión", "Business Intelligence", "Integración de fuentes"],
    metodologia: ["Análisis de datos", "Modelamiento de datos", "Definición de KPIs", "Integración de fuentes", "Validación de información"],
    herramientas: ["MySQL", "Python", "Power BI", "Excel avanzado", "Dashboards"],
    resultado: "Información confiable para analizar resultados, controlar la gestión y decidir con mayor rapidez.",
  },
  {
    id: "planificacion-estrategica",
    area: "Dirección del negocio",
    titulo: "Planificación y control estratégico",
    texto:
      "Traducimos objetivos del negocio en indicadores, responsables y planes de acción para gestionar la ejecución con foco.",
    aplica: "La empresa necesita ordenar prioridades, medir avances y conectar la estrategia con la operación diaria.",
    entregables: ["Objetivos estratégicos", "Indicadores", "Responsables", "Planes de acción", "Seguimiento"],
    metodologia: ["Análisis de datos", "Balanced Scorecard", "Definición de KPIs", "Mapa estratégico", "Seguimiento de gestión"],
    herramientas: ["Mapa estratégico", "Cuadro de mando", "Matriz estratégica", "Reportes ejecutivos", "Tablero de seguimiento"],
    resultado: "Una hoja de ruta clara para controlar avances y orientar decisiones de gestión.",
  },
  {
    id: "incubadora-proyectos",
    area: "Innovación aplicada",
    titulo: "Project Discovery & Development",
    texto:
      "Acompañamos ideas, oportunidades internas o nuevos servicios desde su definición inicial hasta una propuesta estructurada de implementación.",
    aplica: "La empresa tiene una idea o iniciativa con potencial, pero necesita ordenarla, validarla y transformarla en un proyecto ejecutable.",
    entregables: ["Definición del problema", "Propuesta de valor", "Prototipo o MVP", "Validación", "Hoja de ruta"],
    metodologia: ["Análisis de datos", "Design Thinking", "Lean Startup", "MVP", "Validación de hipótesis", "Priorización"],
    herramientas: ["Canvas", "Roadmap", "Figma", "Prototipos funcionales", "Matriz de priorización"],
    resultado: "Un proyecto estructurado para decidir si desarrollar, pilotear o escalar.",
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
  const [detalleActivo, setDetalleActivo] = useState(null);

  const abrirDetalle = (servicioId) => {
    setDetalleActivo(servicioId);
  };

  const cerrarDetalle = () => setDetalleActivo(null);

  const servicioActivo = servicios.find(
    (servicio) => servicio.id === detalleActivo
  );

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
        {servicios.map((servicio) => (
            <article
              className="service-card"
              key={servicio.id}
            >
              <div>
                <span className="service-card__area">{servicio.area}</span>

                <div className="service-line" />

                <h2>{servicio.titulo}</h2>

                <p>{servicio.texto}</p>

                <p className="service-card__fit">
                  <strong>Cuándo aplica</strong>
                  {servicio.aplica}
                </p>

                <button
                  className="service-card__detail-button"
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => abrirDetalle(servicio.id)}
                >
                  Ver detalle
                </button>
              </div>
            </article>
        ))}
      </section>

      {servicioActivo && (
        <div
          className="service-detail"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-detail-title"
          onClick={cerrarDetalle}
        >
          <section className="service-detail__panel" onClick={(event) => event.stopPropagation()}>
            <button
              className="service-detail__close"
              type="button"
              aria-label="Cerrar detalle"
              onClick={cerrarDetalle}
            >
              Cerrar
            </button>

            <span className="service-detail__eyebrow">{servicioActivo.area}</span>
            <h2 id="service-detail-title">{servicioActivo.titulo}</h2>
            <p>
              Revisa los entregables, la metodología y las herramientas utilizadas
              para ejecutar el trabajo.
            </p>

            <div className="service-detail__sections">
              <section>
                <strong className="service-detail__label">Entregables</strong>
                <ul>
                  {servicioActivo.entregables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <strong className="service-detail__label">Metodología</strong>
                <ul>
                  {servicioActivo.metodologia.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <strong className="service-detail__label">Herramientas</strong>
                <ul>
                  {servicioActivo.herramientas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="service-detail__result">
              <span>Resultado esperado</span>
              <strong>{servicioActivo.resultado}</strong>
            </div>
          </section>
        </div>
      )}

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
