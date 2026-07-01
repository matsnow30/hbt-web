import { useEffect, useState } from "react";
import { ciudadesChile } from "../data/ciudadesChile";

function Contacto() {
  const [estadoEnvio, setEstadoEnvio] = useState("idle");
  const [nombreValor, setNombreValor] = useState("");
  const [correoValor, setCorreoValor] = useState("");
  const [empresaValor, setEmpresaValor] = useState("");
  const [telefonoValor, setTelefonoValor] = useState("");
  const [industriaSeleccionada, setIndustriaSeleccionada] = useState("");
  const [industriaAbierta, setIndustriaAbierta] = useState(false);
  const [ciudadValor, setCiudadValor] = useState("");
  const [ciudadAbierta, setCiudadAbierta] = useState(false);
  const [mensajeValor, setMensajeValor] = useState("");

  const desafios = [
    "Análisis operacional",
    "Mejora de procesos",
    "Software a medida",
    "ERP / CRM a medida",
    "Automatización",
    "Indicadores y datos",
    "Planificación estratégica",
    "Project Discovery & Development",
    "Otro",
  ];

  const industrias = [
    { value: "forestal", label: "Forestal" },
    { value: "manufactura", label: "Manufactura" },
    { value: "logistica", label: "Logística" },
    { value: "mineria", label: "Minería" },
    { value: "construccion", label: "Construcción" },
    { value: "servicios", label: "Servicios" },
    { value: "retail", label: "Retail" },
    { value: "pyme", label: "Pyme" },
    { value: "otra", label: "Otra" },
  ];

  const industriaActiva = industrias.find(
    (industria) => industria.value === industriaSeleccionada
  );

  const normalizarTexto = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const ciudadesFiltradas = ciudadesChile
    .filter((ciudad) =>
      normalizarTexto(ciudad).includes(normalizarTexto(ciudadValor))
    )
    .slice(0, 60);

  useEffect(() => {
    if (estadoEnvio !== "success") return undefined;

    const temporizador = window.setTimeout(() => {
      setEstadoEnvio("idle");
    }, 4200);

    return () => window.clearTimeout(temporizador);
  }, [estadoEnvio]);

  const limpiarNombre = (valor) =>
    valor
      .replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]/g, "")
      .replace(/\s{2,}/g, " ")
      .slice(0, 60);

  const capitalizarNombre = (valor) =>
    limpiarNombre(valor)
      .trim()
      .toLowerCase()
      .replace(/(^|[\s'-])([a-záéíóúüñ])/g, (texto) =>
        texto.toUpperCase()
      );

  const limpiarTextoEmpresa = (valor) =>
    valor
      .replace(/\s{2,}/g, " ")
      .slice(0, 80);

  const limpiarCorreo = (valor) =>
    valor
      .toLowerCase()
      .replace(/\s/g, "")
      .slice(0, 90);

  const formatearTelefono = (valor) => {
    let digitos = valor.replace(/\D/g, "");

    if (digitos.startsWith("569")) {
      digitos = digitos.slice(3);
    } else if (digitos.startsWith("56")) {
      digitos = digitos.slice(2);
    }

    if (digitos.startsWith("9")) {
      digitos = digitos.slice(1);
    }

    const numero = digitos.slice(0, 8);
    const primeraParte = numero.slice(0, 4);
    const segundaParte = numero.slice(4, 8);

    if (!numero) return "";
    return `+569 ${primeraParte}${segundaParte ? ` ${segundaParte}` : ""}`;
  };

  const limpiarCiudad = (valor) =>
    valor
      .replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]/g, "")
      .replace(/\s{2,}/g, " ")
      .slice(0, 50);

  const limpiarMensaje = (valor) =>
    valor
      .replace(/\s{3,}/g, "  ")
      .slice(0, 700);

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
      ciudad: formData.get("ciudad"),
      desafios: formData.getAll("desafio"),
      mensaje: formData.get("mensaje"),
    };

    window.setTimeout(() => {
      console.info("Solicitud HBT pendiente de conectar al backend:", datosContacto);
      setEstadoEnvio("success");
      setNombreValor("");
      setCorreoValor("");
      setEmpresaValor("");
      setTelefonoValor("");
      setIndustriaSeleccionada("");
      setIndustriaAbierta(false);
      setCiudadValor("");
      setCiudadAbierta(false);
      setMensajeValor("");
      event.target.reset();
    }, 700);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="contact-label">
          CONTACTO HBT
        </span>

        <p>
          Describe brevemente tu necesidad. Revisaremos el contexto para entender
          la operación antes de proponer una solución.
        </p>
      </section>

      <section className="contact-layout" aria-label="Contacto HBT">
        <section className="contact-card" aria-label="Formulario de contacto HBT">
          <div className="contact-card__header">
            <span>
              SOLICITUD INICIAL
            </span>

            <h2>
              Información para entender tu caso.
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
                  value={nombreValor}
                  placeholder="Tu nombre completo"
                  autoComplete="name"
                  maxLength="60"
                  minLength="5"
                  pattern="[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]{5,60}"
                  title="Usa solo letras y espacios. Ejemplo: Matias Gonzalez Jara."
                  onChange={(event) => setNombreValor(limpiarNombre(event.target.value))}
                  onBlur={() => setNombreValor(capitalizarNombre(nombreValor))}
                  required
                />
              </label>

              <label className="contact-field">
                <span>Correo corporativo *</span>

                <input
                  type="email"
                  name="correo"
                  value={correoValor}
                  placeholder="correo@empresa.cl"
                  autoComplete="email"
                  maxLength="90"
                  title="Ingresa un correo válido. Ejemplo: nombre@empresa.cl"
                  onChange={(event) => setCorreoValor(limpiarCorreo(event.target.value))}
                  required
                />
              </label>

              <label className="contact-field">
                <span>Empresa *</span>

                <input
                  type="text"
                  name="empresa"
                  value={empresaValor}
                  placeholder="Nombre de la empresa"
                  autoComplete="organization"
                  maxLength="80"
                  onChange={(event) => setEmpresaValor(limpiarTextoEmpresa(event.target.value))}
                  onBlur={() => setEmpresaValor(limpiarTextoEmpresa(empresaValor).trim())}
                  required
                />
              </label>

              <label className="contact-field">
                <span>Teléfono</span>

                <input
                  type="tel"
                  name="telefono"
                  value={telefonoValor}
                  placeholder="+569 5080 1142"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength="14"
                  pattern="^\+569 [0-9]{4} [0-9]{4}$"
                  title="Usa el formato +569 5080 1142"
                  onChange={(event) => setTelefonoValor(formatearTelefono(event.target.value))}
                />
              </label>

              <div className="contact-field">
                <span>Industria</span>

                <input type="hidden" name="industria" value={industriaSeleccionada} />

                <div className={`contact-select${industriaAbierta ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="contact-select__button"
                    aria-haspopup="listbox"
                    aria-expanded={industriaAbierta}
                    onClick={() => setIndustriaAbierta((abierta) => !abierta)}
                  >
                    <span>
                      {industriaActiva ? industriaActiva.label : "Selecciona una industria"}
                    </span>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M5.5 7.5 10 12l4.5-4.5" />
                    </svg>
                  </button>

                  {industriaAbierta && (
                    <div className="contact-select__menu" role="listbox">
                      {industrias.map((industria) => (
                        <button
                          type="button"
                          key={industria.value}
                          role="option"
                          aria-selected={industriaSeleccionada === industria.value}
                          className={
                            industriaSeleccionada === industria.value
                              ? "contact-select__option is-selected"
                              : "contact-select__option"
                          }
                          onClick={() => {
                            setIndustriaSeleccionada(industria.value);
                            setIndustriaAbierta(false);
                          }}
                        >
                          {industria.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="contact-field">
                <span>Ciudad</span>

                <div
                  className={`contact-combobox${ciudadAbierta ? " is-open" : ""}`}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setCiudadAbierta(false);
                    }
                  }}
                >
                  <input
                    type="text"
                    name="ciudad"
                    value={ciudadValor}
                    placeholder="Ciudad o comuna"
                    autoComplete="off"
                    maxLength="50"
                    role="combobox"
                    aria-expanded={ciudadAbierta}
                    aria-controls="ciudades-chile-lista"
                    onFocus={() => setCiudadAbierta(true)}
                    onChange={(event) => {
                      setCiudadValor(limpiarCiudad(event.target.value));
                      setCiudadAbierta(true);
                    }}
                    onBlur={() => setCiudadValor(limpiarCiudad(ciudadValor).trim())}
                  />

                  {ciudadAbierta && (
                    <div
                      className="contact-combobox__menu"
                      id="ciudades-chile-lista"
                      role="listbox"
                    >
                      {ciudadesFiltradas.length > 0 ? (
                        ciudadesFiltradas.map((ciudad) => (
                          <button
                            type="button"
                            key={ciudad}
                            className="contact-combobox__option"
                            role="option"
                            aria-selected={ciudadValor === ciudad}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                              setCiudadValor(ciudad);
                              setCiudadAbierta(false);
                            }}
                          >
                            {ciudad}
                          </button>
                        ))
                      ) : (
                        <p className="contact-combobox__empty">Sin resultados</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
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
                value={mensajeValor}
                placeholder="Cuéntanos brevemente qué proceso, indicador, sistema u operación quieres mejorar."
                maxLength="700"
                onChange={(event) => setMensajeValor(limpiarMensaje(event.target.value))}
                required
              />
            </label>

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

      {estadoEnvio === "success" && (
        <div className="contact-success" role="status" aria-live="polite">
          <div className="contact-success__panel">
            <div className="contact-success__mark" aria-hidden="true">
              <svg viewBox="0 0 28 28">
                <path d="M7.5 14.5 12 19l9-10" />
              </svg>
            </div>

            <span>Solicitud enviada</span>
            <strong>Primero entendemos el problema; después definimos el mejor camino.</strong>
            <p>
              Revisaremos tu solicitud y te contactaremos dentro de 24 a 48 horas hábiles
              para coordinar una conversación inicial.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Contacto;
