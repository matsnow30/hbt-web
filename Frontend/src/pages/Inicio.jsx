import "../styles/home.css";

function Inicio() {
  const capacidades = [
    "Ingeniería de procesos",
    "Software a medida",
    "Automatización",
    "Datos & BI",
  ];

  const pilares = [
    {
      titulo: "Procesos confiables",
      texto:
        "Diseñamos soluciones orientadas a continuidad operacional, eficiencia y control para reducir riesgos y aumentar desempeño.",
    },
    {
      titulo: "Soluciones escalables",
      texto:
        "Construimos sistemas y procesos preparados para crecer junto con el negocio y adaptarse a nuevos desafíos.",
    },
    {
      titulo: "Decisiones basadas en datos",
      texto:
        "Transformamos información en indicadores y conocimiento para respaldar decisiones estratégicas.",
    },
    {
      titulo: "Consultoría con acompañamiento",
      texto:
        "Participamos desde el diagnóstico hasta la implementación y mejora continua de cada solución.",
    },
  ];

  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero__overlay"></div>

        <div className="home-hero__content">
          <span className="home-hero__tag">
            HBT ENGINEERING & TECHNOLOGY
          </span>

          <h1>Ingeniería y tecnología para transformar empresas.</h1>

          <p>
            Diseñamos soluciones digitales, automatizamos operaciones y
            desarrollamos sistemas para mejorar eficiencia, control y toma de
            decisiones.
          </p>

          <a href="/contacto" className="home-hero__cta">
            Solicitar asesoría
          </a>
        </div>
      </section>

      <section className="home-capabilities">
        {capacidades.map((capacidad) => (
          <article className="home-capability" key={capacidad}>
            <span>{capacidad}</span>
          </article>
        ))}
      </section>

      <section className="trust">
        <div className="trust-header">
          <span>NUESTRO ENFOQUE</span>

          <h2>
            Ingeniería aplicada para generar confianza y resultados sostenibles.
          </h2>

          <p>
            Integramos ingeniería, tecnología y visión de negocio para
            desarrollar soluciones que fortalecen operaciones, optimizan
            procesos y acompañan el crecimiento empresarial.
          </p>
        </div>

        <div className="trust-grid">
          {pilares.map((pilar) => (
            <article className="trust-card" key={pilar.titulo}>
              <h3>{pilar.titulo}</h3>
              <p>{pilar.texto}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Inicio;