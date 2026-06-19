function Contacto() {
  return (
    <main className="contact-page">

      <section className="contact-hero">

        <span className="section-tag">
          CONTACTO
        </span>

        <h1>
          Conversemos sobre
          tu próximo proyecto.
        </h1>

        <p>
          Cuéntanos qué proceso quieres mejorar
          y te ayudaremos a construir una solución
          tecnológica o de ingeniería.
        </p>

      </section>

      <section className="contact-grid">

        <div className="contact-info">

          <div className="info-card">

            <h3>Correo</h3>

            <p>contacto@hbt.cl</p>

          </div>

          <div className="info-card">

            <h3>Ubicación</h3>

            <p>Talca, Chile</p>

          </div>

          <div className="info-card">

            <h3>Respuesta</h3>

            <p>Menos de 24 horas hábiles</p>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Nombre completo"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <input
            type="text"
            placeholder="Empresa"
          />

          <textarea
            rows="6"
            placeholder="Cuéntanos qué necesitas..."
          />

          <button
            type="button"
            className="btn-primary"
          >
            Enviar solicitud
          </button>

        </form>

      </section>

    </main>
  );
}

export default Contacto;