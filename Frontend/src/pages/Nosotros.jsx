import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const timelineItems = [
  {
    icon: "/nosotros/inicio.avif",
    title: "18 junio 2026",
    subtitle: "La idea",
    text: "Nace la convicción de que la tecnología puede construir futuro y proteger nuestro entorno al mismo tiempo.",
  },
  {
    icon: "/nosotros/construccion.avif",
    title: "Construcción",
    subtitle: "Identidad y propósito",
    text: "Definimos una empresa basada en ingeniería, tecnología aplicada y una forma distinta de generar valor.",
  },
  {
    icon: "/nosotros/primeras-soluciones.avif",
    title: "Mejoras aplicadas",
    subtitle: "Ingeniería aplicada",
    text: "Optimizamos procesos, conectamos datos y mejoramos la operación de las organizaciones.",
  },
  {
    icon: "/nosotros/crecimiento.avif",
    title: "Crecimiento",
    subtitle: "Con propósito",
    text: "Cada avance busca fortalecer empresas sin olvidar la responsabilidad con el entorno que nos sostiene.",
  },
  {
    icon: "/nosotros/impacto-positivo.avif",
    title: "Impacto positivo",
    subtitle: "Valor compartido",
    text: "Trabajamos para que cada proyecto deje una huella positiva en las personas, las empresas y Chile.",
  },
];

const principles = [
  {
    icon: "/nosotros/procesosantequeherramientas.avif",
    title: "Procesos antes que herramientas",
    text: "Primero entendemos la operación real; después definimos la tecnología que corresponde.",
  },
  {
    icon: "/nosotros/tecnologiaconproposito.avif",
    title: "Tecnología con propósito",
    text: "Construimos sistemas, automatizaciones e indicadores solo cuando aportan valor operativo.",
  },
  {
    icon: "/nosotros/usuario.avif",
    title: "Diseño orientado al usuario",
    text: "Creamos herramientas claras para quienes ejecutan, controlan y deciden cada día.",
  },
  {
    icon: "/nosotros/impacto-sostenible.avif",
    title: "Impacto sostenible",
    text: "Priorizamos mejoras medibles, mantenibles y alineadas al crecimiento del negocio.",
  },
];

const commitments = [
  {
    icon: "/nosotros/respetamosnuestroecosistema.avif",
    title: "Respetamos nuestro ecosistema",
  },
  {
    icon: "/nosotros/corazon.avif",
    title: "Apoyamos la conservación",
  },
  {
    icon: "/nosotros/valorconconciencia.avif",
    title: "Generamos valor con conciencia",
  },
  {
    icon: "/nosotros/devolver.avif",
    title: "Devolvemos parte del éxito",
  },
];

const culture = [
  "Pensamiento sistémico",
  "Mejora continua",
  "Excelencia técnica",
  "Transparencia y ética",
  "Innovación aplicada",
  "Compromiso real",
];

function Nosotros() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

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
    <main className="about">
      <section className="about__hero">
        <div className="about__hero-copy about-reveal">
          <span className="about__eyebrow">NOSOTROS</span>

          <h1>
            Observamos procesos, medimos con datos y construimos tecnología a medida.
          </h1>

          <p>
             Somos una consultora chilena que ayuda a empresas a entender cómo
            trabajan, definir mejoras concretas y desarrollar sistemas,
            automatizaciones e indicadores para gestionar mejor.
          </p>

          <a href="#historia" className="about__scroll-link">
            <span aria-hidden="true">↓</span>
            Descubrir nuestra historia
          </a>
        </div>

        <div className="about__hero-image about-reveal" aria-hidden="true">
          <img
            src="/nosotros/edificio.avif"
            alt=""
          />
        </div>
      </section>

      <section id="historia" className="about__story">
        <div className="about__story-card about-reveal">
          <span className="about__eyebrow">NUESTRA HISTORIA</span>

          <h2>
            HBT nace de una pregunta simple:
            <strong> ¿y si el crecimiento también pudiera proteger?</strong>
          </h2>

          <p>
            El 18 de junio de 2026 nace HBT Engineering & Technology Ltda. con
            una idea que desde el inicio fue más grande que crear una empresa.
          </p>

          <p>
            Creemos que la ingeniería y la tecnología tienen el poder de
            transformar organizaciones, mejorar procesos y generar
            oportunidades. Pero también creemos que el progreso solo tiene
            sentido cuando deja algo positivo más allá del resultado económico.
          </p>

          <p>
            Por eso decidimos construir HBT: no solamente como una empresa
            dedicada a desarrollar soluciones de ingeniería, tecnología,
            automatización y datos, sino como una forma de demostrar que es
            posible crear valor y al mismo tiempo devolver parte de ese valor al
            entorno.
          </p>

        </div>

        <aside className="about__story-facts about-reveal" aria-label="Datos de origen HBT">
          <div className="about__fact">
            <span>2026</span>
            <p>Año de origen</p>
          </div>

          <div className="about__fact">
            <span>Ingeniería</span>
            <p>Base metodológica</p>
          </div>

          <div className="about__fact">
            <span>Impacto</span>
            <p>Visión de largo plazo</p>
          </div>
        </aside>

        <div className="about__story-image about-reveal">
          <img src="/nosotros/oficina.avif" alt="Espacio de trabajo moderno" />
          <div className="about__story-image-text">
            Tecnología que genera <strong>valor real.</strong>
          </div>
        </div>
      </section>

      <section className="about__path about-reveal">
        <span className="about__eyebrow">NUESTRO CAMINO</span>
        <h2>Cada paso nos trajo hasta aquí.</h2>

        <div className="about__timeline">
          {timelineItems.map((item, index) => (
            <article className="about__timeline-item about-reveal" style={{ transitionDelay: `${index * 80}ms` }} key={item.title}>
              <div className="about__timeline-icon">
                <img src={item.icon} alt="" aria-hidden="true" />
              </div>

              <h3>{item.title}</h3>
              <strong>{item.subtitle}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about__principles about-reveal">
        <span className="about__eyebrow">NUESTRA FILOSOFÍA</span>
        <h2>Principios que guían todo lo que hacemos.</h2>

        <div className="about__principles-grid">
          {principles.map((principle, index) => (
            <article className="about__principle-card" style={{ transitionDelay: `${index * 90}ms` }} key={principle.title}>
              <img src={principle.icon} alt="" aria-hidden="true" />
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about__commitment about-reveal">
        <div className="about__commitment-image">
          <img
            src="/nosotros/pinguino-humboldt.avif"
            alt="Pingüino de Humboldt en su hábitat natural"
          />
        </div>

        <div className="about__commitment-content">
          <span className="about__eyebrow">NUESTRO COMPROMISO</span>

          <h2>
            Crecer también significa <strong>proteger.</strong>
          </h2>

          <p>
            Nuestro nombre nace inspirado en uno de los símbolos naturales más
            valiosos de Chile: el pingüino de Humboldt. Una especie que convive
            entre el océano y la tierra, que se adapta, que resiste y que
            depende del equilibrio para seguir existiendo.
          </p>

          <p>
            Queremos que cada proyecto desarrollado, cada proceso optimizado,
            cada solución implementada y cada desafío resuelto también
            represente una oportunidad para contribuir a la protección de la
            flora y fauna nativa de Chile.
          </p>

          <div className="about__commitment-grid">
            {commitments.map((item, index) => (
              <div className="about__commitment-item" style={{ transitionDelay: `${index * 80}ms` }} key={item.title}>
                <img src={item.icon} alt="" aria-hidden="true" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about__mission about-reveal">
        <article className="about__mission-card">
          <div className="about__mission-icon" aria-hidden="true">◎</div>
          <span className="about__eyebrow">NUESTRA MISIÓN</span>
          <h2>
            Impulsar organizaciones a través de soluciones tecnológicas y de
            ingeniería que generen valor real y sostenible.
          </h2>
          <p>
            Observamos procesos, analizamos datos y desarrollamos tecnología a
            medida para mejorar la operación, los indicadores y la toma de
            decisiones.
          </p>
        </article>

        <article className="about__mission-card">
          <div className="about__mission-icon" aria-hidden="true">◉</div>
          <span className="about__eyebrow">NUESTRA VISIÓN</span>
          <h2>
            Ser una empresa referente en ingeniería y tecnología en Chile y
            Latinoamérica por nuestro impacto y propósito.
          </h2>
          <p>
            Buscamos liderar proyectos que marquen la diferencia, inspirando a
            otras organizaciones a crecer con innovación, eficiencia y
            responsabilidad hacia el planeta y las futuras generaciones.
          </p>
        </article>
      </section>

      <section className="about__culture about-reveal">
        <span className="about__eyebrow">NUESTRA CULTURA</span>
        <h2>Así trabajamos. Así construimos futuro.</h2>

        <div className="about__culture-list">
          {culture.map((item, index) => (
            <span style={{ transitionDelay: `${index * 60}ms` }} key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="about__cta about-reveal">
        <div>
          <h2>
            Construyamos algo que genere <strong>impacto.</strong>
          </h2>

          <p>
            Hablemos de cómo podemos transformar tus ideas en soluciones que
            impulsen resultados y dejen una huella positiva.
          </p>
        </div>

        <Link to="/contacto" className="about__button about__button--primary">
          Contactar a HBT
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}

export default Nosotros;
