import { Link } from "react-router-dom";

function Proyectos() {
  const proyectos = [
    {
      titulo: "Seguimiento de solicitudes internas",
      industria: "Caso tipo",
      texto:
        "Portal para registrar solicitudes, asignar responsables, controlar estados y evitar seguimiento por correo o planillas.",
    },
    {
      titulo: "Tablero de gestión para jefaturas",
      industria: "Caso tipo",
      texto:
        "Indicadores para ver avance, cumplimiento, productividad y atrasos sin preparar reportes manuales cada semana.",
    },
    {
      titulo: "Automatización de aprobaciones",
      industria: "Caso tipo",
      texto:
        "Flujo digital para ordenar documentos, aprobaciones, alertas y trazabilidad de cada etapa del proceso.",
    },
  ];

  return (
    <main>
      <section className="page-header">
        <span>PROYECTOS</span>

        <h1>
          Casos tipo de aplicación.
        </h1>

        <p>
          Estos ejemplos muestran cómo una necesidad de gestión puede convertirse
          en una solución técnica concreta, medible y fácil de usar por el equipo.
        </p>
      </section>

      <section className="projects-grid">
        {proyectos.map((proyecto) => (
          <article className="project-card" key={proyecto.titulo}>
            <span>{proyecto.industria}</span>

            <h3>{proyecto.titulo}</h3>

            <p>{proyecto.texto}</p>

            <Link to="/contacto">
              Evaluar un caso similar
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Proyectos;
