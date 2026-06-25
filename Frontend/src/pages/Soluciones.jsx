import { Link } from "react-router-dom";

function Soluciones() {
  const soluciones = [
    {
      titulo: "Portal operativo",
      texto:
        "Sistema central para registrar solicitudes, controlar estados, asignar responsables y dar seguimiento diario.",
    },
    {
      titulo: "Flujo documental",
      texto:
        "Circuitos digitales para ordenar aprobaciones, documentos, alertas y trazabilidad de cada etapa.",
    },
    {
      titulo: "Tablero de gestión",
      texto:
        "Indicadores visuales para monitorear avance, cumplimiento, productividad y puntos críticos del negocio.",
    },
    {
      titulo: "Sistema interno a medida",
      texto:
        "Aplicaciones para administrar registros, equipos, tareas, inventarios o procesos específicos de la empresa.",
    },
    {
      titulo: "Conexión entre sistemas",
      texto:
        "Integraciones para evitar doble ingreso, inconsistencias y pérdida de información entre plataformas.",
    },
    {
      titulo: "Apoyo con inteligencia artificial",
      texto:
        "Herramientas para clasificar información, buscar documentos, apoyar respuestas internas o analizar datos.",
    },
  ];

  return (
    <main>
      <section className="page-header">
        <span>SOLUCIONES</span>

        <h1>
          Soluciones para trabajar con más orden.
        </h1>

        <p>
          Convertimos necesidades operativas en sistemas, flujos, tableros e integraciones
          que puedan ser usados por equipos reales, no solo por áreas técnicas.
        </p>
      </section>

      <section className="services-grid">
        {soluciones.map((item) => (
          <article className="service-card" key={item.titulo}>
            <div className="service-line"></div>

            <h3>{item.titulo}</h3>

            <p>{item.texto}</p>

            <Link to="/contacto">
              Evaluar solución
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Soluciones;
