import { useEffect } from "react";
import "../styles/home.css";

function Inicio() {
  const capacidades = [
    {
      titulo: "Ingeniería de procesos",
      texto:
        "Diseñamos procesos eficientes, sostenibles y alineados a la operación.",
      icono: "/inicio/ingenieria-de-procesos.png",
      imagen: "/inicio/imagenes.png",
    },
    {
      titulo: "Sistemas empresariales",
      texto:
        "Construimos sistemas que fortalecen la gestión y continuidad operacional.",
      icono: "/inicio/sistemas-empresariales.png",
      imagen: "/inicio/winedatos.png",
    },
    {
      titulo: "Datos & BI",
      texto:
        "Convertimos datos en información útil para apoyar decisiones.",
      icono: "/inicio/datos-b-iconi.png",
      imagen: "/inicio/datos-bi.jpg",
    },
    {
      titulo: "Integración operacional",
      texto:
        "Conectamos sistemas y procesos para asegurar trazabilidad.",
      icono: "/inicio/integracion-de-datos.png",
      imagen: "/inicio/integracion-operacional.png",
    },
  ];

  const razones = [
    {
      titulo: "Procesos confiables",
      texto:
        "Diseñamos sobre estándares y operación real.",
    },
    {
      titulo: "Soluciones escalables",
      texto:
        "Construimos sistemas preparados para crecer.",
    },
    {
      titulo: "Información accionable",
      texto:
        "Transformamos datos en decisiones.",
    },
    {
      titulo: "Acompañamiento técnico",
      texto:
        "Trabajamos junto al cliente durante todo el proceso.",
    },
  ];

  const industrias = [
    { nombre: "Alimentos", imagen: "/inicio/alimentos.png" },
    { nombre: "Vitivinícola", imagen: "/inicio/wine.png" },
    { nombre: "Seguros", imagen: "/inicio/compañiaseguros.jpg" },
    { nombre: "Banca", imagen: "/inicio/banca.png" },
    { nombre: "Forestal", imagen: "/inicio/forestal.png" },
    { nombre: "Minería", imagen: "/inicio/mineria.jpg" },
    { nombre: "Pymes", imagen: "/inicio/pyme.png" },
    { nombre: "Construcción", imagen: "/inicio/construccion.jpg" },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero__overlay" />

        <div className="home-hero__content reveal">
          <h1>
            Transformamos procesos en sistemas, información y capacidad
            operacional.
          </h1>

          <p>
            Diseñamos e implementamos soluciones que conectan procesos, 
            sistemas y datos para mejorar la operación.
          </p>

          <a href="/contacto" className="home-hero__cta">
            ¿En qué podemos ayudarte?
          </a>
        </div>
      </section>

      <section className="home-section home-section--white">
        <div className="home-section__header reveal">
          <h2>¿CÓMO TRABAJAMOS?</h2>
        </div>

        <div className="home-capabilities">
          {capacidades.map((capacidad, index) => (
            <article
              className="home-capability reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
              key={capacidad.titulo}
            >
              <div className="home-capability__heading">
                <div className="home-capability__icon">
                  <img src={capacidad.icono} alt="" aria-hidden="true" />
                </div>

                <h3>{capacidad.titulo}</h3>
              </div>

              <div className="home-capability__media">
                <img
                  className="home-capability__image"
                  src={capacidad.imagen}
                  alt={capacidad.titulo}
                />
              </div>

              <p>{capacidad.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="home-why reveal">
          <div className="home-why__content">
            <span>¿POR QUÉ HBT?</span>

            <h2>Integramos ingeniería y tecnología para generar resultados.</h2>
          </div>

          <div className="home-why__pillars">
            {razones.map((razon, index) => (
              <article
                className="home-why__pillar"
                style={{ transitionDelay: `${index * 80}ms` }}
                key={razon.titulo}
              >
                <span>
                  <img src="/inicio/check.png" alt="" aria-hidden="true" />
                </span>

                <div>
                  <h3>{razon.titulo}</h3>
                  <p>{razon.texto}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="home-why__image">
            <img src="/inicio/mesa.png" alt="Análisis de procesos HBT" />
          </div>
        </div>
      </section>

      <section className="home-section home-section--white">
        <div className="home-section__header reveal">
          <h2>Sectores donde impulsamos transformación operacional</h2>
        </div>

        <div className="home-industries reveal">
          {industrias.map((industria) => (
            <a
              href="/industrias"
              className="home-industry"
              key={industria.nombre}
            >
              <img src={industria.imagen} alt={industria.nombre} />
              <span>{industria.nombre}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Inicio;