import { useEffect } from "react";
import "../styles/home.css";

function Inicio() {
  const problemas = [
    "Procesos que dependen de planillas y correos.",
    "Reportes que se preparan a mano y llegan tarde.",
    "Solicitudes, documentos o tareas sin seguimiento claro.",
    "Información repetida entre áreas o sistemas que no conversan.",
  ];

  const capacidades = [
    {
      titulo: "Diagnóstico de procesos",
      numero: "01",
      texto:
        "Levantamos cómo trabaja hoy la empresa, dónde se pierde tiempo y qué controles faltan.",
      icono: "/inicio/ingenieria-de-procesos.avif",
      imagen: "/inicio/imagenes.avif",
    },
    {
      titulo: "Sistemas a medida",
      numero: "02",
      texto:
        "Desarrollamos plataformas internas para ordenar solicitudes, registros, tareas y responsables.",
      icono: "/inicio/sistemas-empresariales.avif",
      imagen: "/inicio/winedatos.avif",
    },
    {
      titulo: "Indicadores de gestión",
      numero: "03",
      texto:
        "Convertimos datos dispersos en tableros claros para ver avances, brechas y prioridades.",
      icono: "/inicio/datos-b-iconi.avif",
      imagen: "/inicio/datos-bi.avif",
    },
    {
      titulo: "Integración operacional",
      numero: "04",
      texto:
        "Conectamos áreas, plataformas y registros para reducir doble digitación y errores.",
      icono: "/inicio/integracion-de-datos.avif",
      imagen: "/inicio/integracion-operacional.avif",
    },
  ];

  const razones = [
    {
      titulo: "Mirada operacional",
      texto:
        "Partimos desde cómo trabaja realmente la empresa, no desde una solución predefinida.",
    },
    {
      titulo: "Criterio técnico",
      texto:
        "Priorizamos soluciones útiles, mantenibles y posibles de implementar.",
    },
    {
      titulo: "Implementación acompañada",
      texto:
        "Acompañamos desde el diagnóstico hasta la puesta en marcha con los equipos.",
    },
    {
      titulo: "Resultados visibles",
      texto:
        "Buscamos mejoras que puedan observarse, medirse y gestionarse.",
    },
  ];

  const industrias = [
    { nombre: "Alimentos", imagen: "/inicio/alimentos.avif" },
    { nombre: "Vitivinicola", imagen: "/inicio/wine.avif" },
    { nombre: "Seguros", imagen: "/inicio/compañiaseguros.avif" },
    { nombre: "Banca", imagen: "/inicio/banca.avif" },
    { nombre: "Forestal", imagen: "/inicio/forestal.avif" },
    { nombre: "Minería", imagen: "/inicio/mineria.avif" },
    { nombre: "Pymes", imagen: "/inicio/pyme.avif" },
    { nombre: "Construcción", imagen: "/inicio/construccion.avif" },
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

    const fallback = window.setTimeout(() => {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
    }, 900);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero__overlay" />

        <div className="home-hero__content reveal">
          <h1>
            Ordenamos procesos con tecnología.
          </h1>

          <p>
            Diagnosticamos cómo trabaja tu empresa y desarrollamos sistemas,
            automatizaciones e indicadores para mejorar la gestión diaria.
          </p>

          <a href="/contacto" className="home-hero__cta">
            Conversemos sobre tu operación
          </a>
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="home-section__header home-section__header--simple reveal">
          <span>PROBLEMAS QUE RESOLVEMOS</span>
          <p>Detectamos tareas manuales, información dispersa y procesos sin seguimiento claro.</p>
        </div>

        <div className="home-problems reveal">
          {problemas.map((problema) => (
            <article className="home-problem" key={problema}>
              <span aria-hidden="true">✓</span>
              <p>{problema}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section--white">
        <div className="home-section__header home-section__header--simple reveal">
          <span>CÓMO APORTAMOS</span>
          <p>Levantamos la operación, definimos prioridades y construimos herramientas útiles para el equipo.</p>
        </div>

        <div className="home-capabilities home-capabilities--quiet">
          {capacidades.map((capacidad, index) => (
            <article
              className="home-capability reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
              key={capacidad.titulo}
            >
              <div className="home-capability__heading">
                <div className="home-capability__icon">
                  <img src={capacidad.icono} alt="" aria-hidden="true" loading="lazy" />
                </div>

                <h3>{capacidad.titulo}</h3>
              </div>

              <div className="home-capability__media">
                <img
                  className="home-capability__image"
                  src={capacidad.imagen}
                  alt={capacidad.titulo}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="home-section__header home-section__header--simple reveal">
          <span>POR QUÉ HBT</span>
          <p>No proponemos tecnología antes de entender cómo trabaja tu empresa.</p>
        </div>

        <div className="home-why home-why--compact reveal">
          <div className="home-why__pillars">
            {razones.map((razon, index) => (
              <article
                className="home-why__pillar"
                style={{ transitionDelay: `${index * 80}ms` }}
                key={razon.titulo}
              >
                <span>
                  <img src="/inicio/check.avif" alt="" aria-hidden="true" loading="lazy" />
                </span>

                <div>
                  <h3>{razon.titulo}</h3>
                  <p>{razon.texto}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="home-why__image">
            <img src="/inicio/mesa.avif" alt="Análisis de procesos HBT" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="home-section home-section--white">
        <div className="home-section__header home-section__header--simple reveal">
          <span>EXPERIENCIA APLICABLE</span>
          <p>Adaptamos el enfoque según el rubro, la operación y la madurez digital de cada empresa.</p>
        </div>

        <div className="home-industries reveal">
          {industrias.map((industria) => (
            <a
              href="/contacto"
              className="home-industry"
              key={industria.nombre}
            >
              <img src={industria.imagen} alt={industria.nombre} loading="lazy" />
              <span>{industria.nombre}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Inicio;
