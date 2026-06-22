function Contacto() {
  return (
    <main className="contact-page">
      <section className="contact-hero">

        <span className="contact-label">
          INICIEMOS UNA CONVERSACIÓN
        </span>

        <h1>
          Convirtamos un desafío operacional en una solución real.
        </h1>

        <p>
          Cuéntanos el contexto de tu organización.
          Evaluaremos cómo aportar valor desde ingeniería,
          sistemas y datos.
        </p>

      </section>

      <section className="contact-layout">

        <aside className="contact-steps">

          <h2>
            Qué ocurre después del contacto
          </h2>

          <article className="contact-step">
            <span>01</span>

            <div>
              <h3>Recepción</h3>

              <p>
                Revisamos el contexto inicial.
              </p>
            </div>
          </article>

          <article className="contact-step">
            <span>02</span>

            <div>
              <h3>Revisión</h3>

              <p>
                Identificamos oportunidades.
              </p>
            </div>
          </article>

          <article className="contact-step">
            <span>03</span>

            <div>
              <h3>Reunión</h3>

              <p>
                Alineamos alcance y objetivos.
              </p>
            </div>
          </article>

          <article className="contact-step">
            <span>04</span>

            <div>
              <h3>Propuesta</h3>

              <p>
                Definimos próximos pasos.
              </p>
            </div>
          </article>

        </aside>

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
            rows="5"
            placeholder="Cuéntanos qué necesitas..."
          />

          <button type="submit">
            Solicitar conversación
          </button>

        </form>

      </section>

    </main>
  );
}

export default Contacto;