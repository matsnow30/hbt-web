import { useState } from "react";

function Contacto() {
  const [estadoEnvio, setEstadoEnvio] = useState("idle");

  const desafios = [
    "Análisis operacional",
    "Mejora de procesos",
    "Software a medida",
    "Automatización",
    "Indicadores y datos",
    "Planificación estratégica",
    "Otro",
  ];

  const pasos = [
    "Revisamos tu solicitud.",
    "Te contactamos en 24 a 48 horas hábiles.",
    "Coordinamos una conversación inicial.",
    "Si hace sentido, levantamos el proceso contigo.",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setEstadoEnvio("sending");

    const formData = new FormData(event.currentTarget);
    const datosContacto = {
      nombre: formData.get("nombre"),
      correo: formData.get("correo"),
      empresa: formData.get("empresa"),
      telefono: formData.get("telefono"),
      industria: formData.get("industria"),
      desafios: formData.getAll("desafio"),
      mensaje: formData.get("mensaje"),
    };

    window.setTimeout(() => {
      console.info("Solicitud HBT pendiente de conectar al backend:", datosContacto);
      setEstadoEnvio("success");
      event.target.reset();
    }, 700);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="contact-label">
          CONTACTO HBT
        </span>

        <h1>
          Cuéntanos qué necesitas ordenar.
        </h1>

        <p>
          Describe el proceso, indicador, sistema o decisión que quieres mejorar.
          Revisaremos tu caso para entender la operación antes de proponer.
        </p>
      </section>

      <section className="contact-layout" aria-label="Contacto HBT">
        <aside className="contact-next">
          <span>QUÉ OCURRE DESPUÉS</span>
          <h2>Una primera conversación, sin venderte una solución antes de entender.</h2>

          <ol>
            {pasos.map((paso, index) => (
              <li key={paso}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <p>{paso}</p>
              </li>
            ))}
          </ol>

          <p className="contact-next__note">
            Puedes escribirnos aunque todavía no tengas clara la solución. Basta con
            contarnos que esta generando desorden, trabajo manual, errores o falta de informacion.
          </p>
        </aside>

        <section className="contact-card" aria-label="Formulario de contacto HBT">
          <div className="contact-card__header">
            <span>
              SOLICITUD INICIAL
            </span>

            <h2>
              Datos principales.
            </h2>

            <p>
              Mientras más contexto nos entregues, mejor podremos orientar la primera conversación.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <label className="contact-field">
                <span>Nombre completo *</span>

                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="contact-field">
                <span>Correo corporativo *</span>

                <input
                  type="email"
                  name="correo"
                  placeholder="correo@empresa.cl"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="contact-field">
                <span>Empresa *</span>

                <input
                  type="text"
                  name="empresa"
                  placeholder="Nombre de la empresa"
                  autoComplete="organization"
                  required
                />
              </label>

              <label className="contact-field">
                <span>Teléfono</span>

                <input
                  type="tel"
                  name="telefono"
                  placeholder="+56 9 1234 5678"
                  autoComplete="tel"
                />
              </label>

              <label className="contact-field">
                <span>Industria</span>

                <select name="industria" defaultValue="">
                  <option value="" disabled>
                    Selecciona una industria
                  </option>
                  <option value="forestal">Forestal</option>
                  <option value="manufactura">Manufactura</option>
                  <option value="logistica">Logística</option>
                  <option value="mineria">Minería</option>
                  <option value="construccion">Construcción</option>
                  <option value="servicios">Servicios</option>
                  <option value="retail">Retail</option>
                  <option value="pyme">Pyme</option>
                  <option value="otra">Otra</option>
                </select>
              </label>
            </div>

            <fieldset className="contact-challenge">
              <legend>
                Tipo de desafío
              </legend>

              <div className="contact-challenge__options">
                {desafios.map((desafio) => (
                  <label key={desafio} className="contact-chip">
                    <input
                      type="checkbox"
                      name="desafio"
                      value={desafio}
                    />

                    <span>
                      {desafio}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="contact-field contact-field--full">
              <span>¿Cómo podemos ayudarte? *</span>

              <textarea
                name="mensaje"
                rows="5"
                placeholder="Cuéntanos brevemente qué proceso, indicador, sistema u operación quieres mejorar."
                required
              />
            </label>

            {estadoEnvio === "success" && (
              <p className="contact-form__status" role="status">
                Solicitud registrada. Cuando conectemos el backend, este mensaje se enviará automáticamente.
              </p>
            )}

            <div className="contact-form__footer">
              <p>
                Respuesta estimada en 24 a 48 horas hábiles.
              </p>

              <button type="submit" disabled={estadoEnvio === "sending"}>
                {estadoEnvio === "sending" ? "Registrando solicitud..." : "Enviar solicitud"}
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contacto;
