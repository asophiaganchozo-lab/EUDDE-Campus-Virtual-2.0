
/* =====================================================
   EUDDE CAMPUS VIRTUAL
   Actividades de 10 preguntas y examen de 10 preguntas
   Calificación sobre 10
===================================================== */

const EUDDE = {
  notaMaxima: 10,
  preguntasActividad: 10,
  preguntasExamen: 10,
  curso: "",
  especialidad: "",
  materia: "",
  temaActual: "",
  evaluacionActual: [],
  respuestas: [],
  historial: JSON.parse(localStorage.getItem("eudde_historial") || "[]")
};

const cursos = {
  "Primero de Bachillerato": {
    "Informática": {
      "Matemáticas": [
        "Función", "Función afín", "Recta",
        "Sistema de ecuaciones", "Vectores en el plano"
      ],
      "Física": [
        "MRU", "MRUV", "MCU", "MCUV", "Leyes de Newton"
      ],
      "Lengua y Literatura": [
        "Neoclasicismo", "Comunicación para negocios",
        "Ensayo argumentativo temático", "Eufemismos",
        "Globalización y castellano"
      ],
      "Inglés": [
        "Present Perfect", "Past Simple vs Past Continuous",
        "Used to", "Vocabulario británico", "Comparatives"
      ],
      "Emprendimiento": [
        "Qué es emprender", "Tipos de emprendimiento",
        "Idea de negocio", "Características del emprendedor",
        "Necesidades y oportunidades"
      ],
      "Ética": [
        "Valores y ética", "Derechos humanos",
        "Convivencia y respeto", "Constitución del Ecuador",
        "Ciudadanía"
      ],
      "Programación y Desarrollo de Software": [
        "Lógica y algoritmos", "Variables",
        "Condicionales y bucles", "Programación en Python",
        "Programación orientada a objetos"
      ],
      "Diseño y Desarrollo Web": [
        "HTML y CSS", "JavaScript básico",
        "Diseño responsive", "Publicar una página web",
        "Estructura de un sitio web"
      ],
      "Bases de Datos": [
        "Modelo entidad-relación", "SQL",
        "Llaves primarias y foráneas",
        "Crear una base de datos",
        "Consultas y organización de datos"
      ],
      "Sistemas Operativos": [
        "Windows y Linux", "Instalación y configuración",
        "Gestión de archivos y usuarios",
        "Comandos de terminal", "Administración del sistema"
      ],
      "Redes y Conectividad": [
        "Redes LAN, WAN y WiFi", "Direcciones IP y DNS",
        "Modelo OSI y TCP/IP", "Configuración de router",
        "Conectividad de redes"
      ],
      "Soporte Técnico": [
        "Partes de la computadora",
        "Mantenimiento preventivo y correctivo",
        "Instalación de programas y drivers",
        "Diagnóstico de fallas", "Solución de problemas"
      ],
      "Aplicaciones Ofimáticas": [
        "Word", "Excel", "PowerPoint",
        "Google Drive y correo", "Documentos digitales"
      ],
      "Seguridad Informática": [
        "Virus, malware y phishing",
        "Contraseñas seguras y 2FA",
        "Copias de seguridad", "Firewall y antivirus",
        "Protección de información"
      ],
      "Inteligencia Artificial Aplicada": [
        "Qué es la IA", "ChatGPT y herramientas de IA",
        "Crear imágenes y textos con IA",
        "Uso ético de la IA", "Aplicaciones de la IA"
      ]
    }
  },

  "Segundo de Bachillerato": {
    "Informática": {
      "Matemáticas": [
        "Función cuadrática", "Función exponencial y logarítmica",
        "Trigonometría", "Estadística y probabilidad", "Progresiones"
      ],
      "Física": [
        "Trabajo y energía", "Potencia",
        "Impulso y cantidad de movimiento",
        "Hidrostática", "Calor y temperatura"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice", "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing y ventas", "Costos y presupuesto", "Prototipo"
      ],
      "Especialidad de Informática": [
        "Programación avanzada", "Desarrollo web avanzado",
        "Bases de datos avanzadas", "Redes avanzadas",
        "Proyecto técnico"
      ]
    },
    "Ciencias": {
      "Matemáticas": [
        "Función cuadrática", "Función exponencial y logarítmica",
        "Trigonometría", "Estadística y probabilidad", "Progresiones"
      ],
      "Física": [
        "Trabajo y energía", "Potencia",
        "Impulso y cantidad de movimiento",
        "Hidrostática", "Calor y temperatura"
      ],
      "Química": [
        "Reacciones químicas", "Balanceo de ecuaciones",
        "Ácidos y bases", "Tabla periódica avanzada", "Estequiometría"
      ],
      "Biología": [
        "Célula", "ADN y herencia", "Ecosistemas",
        "Evolución", "Sistemas del cuerpo"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice", "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing y ventas", "Costos y presupuesto", "Prototipo"
      ]
    },
    "Contabilidad": {
      "Matemáticas": [
        "Función cuadrática", "Función exponencial",
        "Trigonometría", "Estadística", "Progresiones"
      ],
      "Contabilidad General": [
        "Activo, pasivo y patrimonio", "Libro diario",
        "Libro mayor", "Balance general", "Estado de resultados"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice", "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing y ventas", "Costos y presupuesto", "Prototipo"
      ]
    }
  },

  "Tercero de Bachillerato": {
    "Informática": {
      "Matemáticas": [
        "Límites", "Derivadas", "Integrales básicas",
        "Geometría en el espacio", "Matemática financiera"
      ],
      "Física": [
        "Ondas y sonido", "Óptica", "Electricidad: Ley de Ohm",
        "Magnetismo", "Física moderna"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter", "Vocabulary for Work"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas y rentabilidad",
        "Marca y publicidad", "Emprendimiento social", "Pitch"
      ],
      "Especialidad de Informática": [
        "Proyecto final de software",
        "Desarrollo de aplicación o web completa",
        "Base de datos del proyecto",
        "Presentación y defensa",
        "Documentación del proyecto"
      ]
    },
    "Ciencias": {
      "Matemáticas": [
        "Límites", "Derivadas", "Integrales básicas",
        "Geometría en el espacio", "Matemática financiera"
      ],
      "Física": [
        "Ondas y sonido", "Óptica", "Electricidad: Ley de Ohm",
        "Magnetismo", "Física moderna"
      ],
      "Química": [
        "Química orgánica", "pH", "Reacciones redox",
        "Gases", "Soluciones"
      ],
      "Biología": [
        "Genética avanzada", "Biotecnología",
        "Salud y enfermedades", "Medio ambiente",
        "Proyecto de investigación"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter", "Vocabulary for Work"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas y rentabilidad",
        "Marca y publicidad", "Emprendimiento social", "Pitch"
      ]
    },
    "Contabilidad": {
      "Matemáticas": [
        "Límites", "Derivadas", "Integrales básicas",
        "Geometría en el espacio", "Matemática financiera"
      ],
      "Contabilidad Avanzada": [
        "Contabilidad de costos", "Inventarios",
        "Nómina y roles de pago", "Impuestos: IVA y Renta",
        "Auditoría básica"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter", "Vocabulary for Work"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas y rentabilidad",
        "Marca y publicidad", "Emprendimiento social", "Pitch"
      ]
    }
  }
};

/* PREGUNTAS PARA LAS ACTIVIDADES Y EXÁMENES */

function crearPreguntas(tema, cantidad = 10) {
  const preguntas = [
    {
      pregunta: `¿Qué se debe identificar primero al estudiar ${tema}?`,
      opciones: ["Su concepto principal", "Su color", "Su tamaño físico", "Su fecha de compra"],
      correcta: 0,
      explicacion: "Para comprender un tema primero se identifica su concepto principal."
    },
    {
      pregunta: `¿Cuál es el propósito de aprender sobre ${tema}?`,
      opciones: ["Comprender y aplicar sus conocimientos", "Evitar estudiar", "Memorizar sin entender", "No utilizarlo nunca"],
      correcta: 0,
      explicacion: "El aprendizaje permite comprender y aplicar lo estudiado."
    },
    {
      pregunta: `¿Qué ayuda a comprender mejor ${tema}?`,
      opciones: ["Ejemplos y ejercicios", "Ignorar las explicaciones", "No practicar", "Cambiar el tema"],
      correcta: 0,
      explicacion: "Los ejemplos y ejercicios ayudan a comprender los conceptos."
    },
    {
      pregunta: `¿Qué es importante al resolver una actividad de ${tema}?`,
      opciones: ["Leer y analizar la pregunta", "Responder al azar", "No revisar", "Ignorar los datos"],
      correcta: 0,
      explicacion: "Leer y analizar permite elegir una respuesta adecuada."
    },
    {
      pregunta: `¿Qué demuestra que se ha comprendido ${tema}?`,
      opciones: ["Explicar el tema con palabras propias", "Copiar sin entender", "Evitar preguntas", "No realizar ejercicios"],
      correcta: 0,
      explicacion: "Explicar con palabras propias demuestra comprensión."
    },
    {
      pregunta: `¿Qué recurso puede ayudar a estudiar ${tema}?`,
      opciones: ["Una explicación acompañada de ejemplos", "Una página sin información", "Un archivo vacío", "Una respuesta sin relación"],
      correcta: 0,
      explicacion: "Las explicaciones y los ejemplos apoyan el aprendizaje."
    },
    {
      pregunta: `¿Qué se recomienda hacer después de estudiar ${tema}?`,
      opciones: ["Practicar y repasar", "Olvidar el contenido", "No revisar", "Dejar las actividades"],
      correcta: 0,
      explicacion: "Practicar y repasar ayuda a reforzar lo aprendido."
    },
    {
      pregunta: `¿Cuál es una buena forma de resolver dudas sobre ${tema}?`,
      opciones: ["Consultar la explicación y los ejemplos", "Ignorar las dudas", "Responder sin leer", "Abandonar el tema"],
      correcta: 0,
      explicacion: "Revisar la explicación permite aclarar las dudas."
    },
    {
      pregunta: `¿Qué actitud favorece el aprendizaje de ${tema}?`,
      opciones: ["Participar y practicar", "No prestar atención", "Evitar aprender", "No realizar tareas"],
      correcta: 0,
      explicacion: "La participación y la práctica ayudan al aprendizaje."
    },
    {
      pregunta: `¿Para qué sirve evaluar los conocimientos de ${tema}?`,
      opciones: ["Identificar lo aprendido y lo que falta reforzar", "Eliminar las clases", "Evitar estudiar", "Cambiar la materia"],
      correcta: 0,
      explicacion: "La evaluación permite reconocer los avances y reforzar dificultades."
    }
  ];

  return preguntas.slice(0, cantidad).map((p, i) => ({
    ...p,
    id: i + 1
  }));
}

/* ESTILOS */

function instalarEstilos() {
  if (document.getElementById("eudde-estilos")) return;

  const estilo = document.createElement("style");
  estilo.id = "eudde-estilos";
  estilo.textContent = `
    :root {
      --azul: #168bd2;
      --azul-claro: #eaf6ff;
      --azul-medio: #cceaff;
      --texto: #243447;
      --blanco: #ffffff;
    }

    #eudde-app {
      width: 100%;
      max-width: 1200px;
      margin: 20px auto;
      padding: 20px;
      color: var(--texto);
      font-family: Arial, sans-serif;
    }

    .eudde-titulo {
      color: #167fbd;
      font-size: 27px;
      margin-bottom: 8px;
    }

    .eudde-subtitulo {
      color: #617487;
      margin-bottom: 22px;
    }

    .eudde-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(210px,1fr));
      gap: 15px;
    }

    .eudde-card {
      background: white;
      border: 1px solid #d9edfb;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 3px 12px #dcecf5;
    }

    .eudde-card h3 {
      color: #147fbd;
      margin-top: 0;
    }

    .eudde-btn {
      background: #168bd2;
      color: white;
      border: none;
      border-radius: 9px;
      padding: 11px 16px;
      cursor: pointer;
      margin: 5px 4px 5px 0;
      font-weight: bold;
    }

    .eudde-btn:hover {
      background: #0871b4;
    }

    .eudde-btn-sec {
      background: #e7f4ff;
      color: #147fbd;
      border: 1px solid #b9dff7;
    }

    .eudde-lista {
      display: grid;
      gap: 12px;
    }

    .eudde-item {
      padding: 15px;
      border-radius: 12px;
      background: #f0f8ff;
      border: 1px solid #d7ebfa;
    }

    .eudde-opcion {
      display: block;
      padding: 12px;
      margin: 8px 0;
      background: #f5faff;
      border: 1px solid #d4e8f7;
      border-radius: 9px;
      cursor: pointer;
    }

    .eudde-opcion:hover {
      background: #e3f3ff;
    }

    .eudde-opcion input {
      margin-right: 8px;
    }

    .eudde-progreso {
      height: 9px;
      background: #e3edf4;
      border-radius: 20px;
      overflow: hidden;
      margin: 12px 0;
    }

    .eudde-progreso div {
      height: 100%;
      background: #168bd2;
    }

    .eudde-correcta {
      color: #16834b;
      font-weight: bold;
    }

    .eudde-incorrecta {
      color: #c43e4b;
      font-weight: bold;
    }

    .eudde-nota {
      background: #eaf6ff;
      border-radius: 15px;
      padding: 20px;
      margin: 18px 0;
      text-align: center;
    }

    @media(max-width:600px) {
      #eudde-app { padding: 12px; }
      .eudde-titulo { font-size: 23px; }
    }
  `;
  document.head.appendChild(estilo);
}

/* CONTENEDOR PRINCIPAL */

function obtenerContenedor() {
  let app = document.getElementById("eudde-app");

  if (!app) {
    app = document.createElement("section");
    app.id = "eudde-app";

    const principal =
      document.querySelector("main") ||
      document.querySelector(".container") ||
      document.body;

    principal.appendChild(app);
  }

  return app;
}

function mostrarInicio() {
  EUDDE.curso = "";
  EUDDE.especialidad = "";
  EUDDE.materia = "";

  const app = obtenerContenedor();

  app.innerHTML = `
    <h1 class="eudde-titulo">EUDDE Campus Virtual</h1>
    <p class="eudde-subtitulo">
      Aprende, practica y evalúa tus conocimientos.
    </p>

    <div class="eudde-grid">
      ${Object.keys(cursos).map(curso => `
        <div class="eudde-card">
          <h3>${curso}</h3>
          <p>Ingresa para revisar tus materias y módulos.</p>
          <button class="eudde-btn"
            onclick="mostrarEspecialidades('${curso}')">
            Ingresar
          </button>
        </div>
      `).join("")}
    </div>

    <div class="eudde-card" style="margin-top:20px">
      <h3>Mi progreso</h3>
      <p>Consulta tus evaluaciones anteriores.</p>
      <button class="eudde-btn eudde-btn-sec"
        onclick="mostrarHistorial()">
        Ver historial
      </button>
    </div>
  `;
}

function mostrarEspecialidades(curso) {
  EUDDE.curso = curso;

  const app = obtenerContenedor();
  const especialidades = Object.keys(cursos[curso]);

  if (especialidades.length === 1) {
    mostrarMaterias(curso, especialidades[0]);
    return;
  }

  app.innerHTML = `
    <button class="eudde-btn eudde-btn-sec"
      onclick="mostrarInicio()">← Volver</button>
    <h2 class="eudde-titulo">${curso}</h2>
    <p class="eudde-subtitulo">Selecciona tu especialidad.</p>

    <div class="eudde-grid">
      ${especialidades.map(esp => `
        <div class="eudde-card">
          <h3>${esp}</h3>
          <button class="eudde-btn"
            onclick="mostrarMaterias('${curso}','${esp}')">
            Entrar
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

function mostrarMaterias(curso, especialidad) {
  EUDDE.curso = curso;
  EUDDE.especialidad = especialidad;

  const materias = cursos[curso][especialidad];
  const app = obtenerContenedor();

  app.innerHTML = `
    <button class="eudde-btn eudde-btn-sec"
      onclick="mostrarEspecialidades('${curso}')">← Volver</button>

    <h2 class="eudde-titulo">${especialidad}</h2>
    <p class="eudde-subtitulo">${curso} · Selecciona una materia.</p>

    <div class="eudde-grid">
      ${Object.keys(materias).map(materia => `
        <div class="eudde-card">
          <h3>${materia}</h3>
          <p>5 módulos de aprendizaje.</p>
          <button class="eudde-btn"
            onclick="mostrarModulos('${materia}')">
            Abrir materia
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

function mostrarModulos(materia) {
  EUDDE.materia = materia;

  const temas = cursos[EUDDE.curso][EUDDE.especialidad][materia];
  const app = obtenerContenedor();

  app.innerHTML = `
    <button class="eudde-btn eudde-btn-sec"
      onclick="mostrarMaterias('${EUDDE.curso}','${EUDDE.especialidad}')">
      ← Volver a materias
    </button>

    <h2 class="eudde-titulo">${materia}</h2>
    <p class="eudde-subtitulo">
      Selecciona uno de los cinco módulos.
    </p>

    <div class="eudde-lista">
      ${temas.map((tema, i) => `
        <div class="eudde-item">
          <h3>Módulo ${i + 1}: ${tema}</h3>
          <p>Clase, ejemplos y actividad de aprendizaje.</p>
          <button class="eudde-btn"
            onclick="abrirModulo(${i})">
            Abrir módulo
          </button>
        </div>
      `).join("")}
    </div>

    <div class="eudde-card" style="margin-top:18px">
      <h3>Examen final de la materia</h3>
      <p>10 preguntas · Nota máxima: 10/10.</p>
      <button class="eudde-btn"
        onclick="iniciarExamen()">
        Realizar examen
      </button>
    </div>
  `;
}

function abrirModulo(indice) {
  const temas = cursos[EUDDE.curso][EUDDE.especialidad][EUDDE.materia];
  EUDDE.temaActual = temas[indice];

  const app = obtenerContenedor();

  app.innerHTML = `
    <button class="eudde-btn eudde-btn-sec"
      onclick="mostrarModulos('${EUDDE.materia}')">
      ← Volver a módulos
    </button>

    <h2 class="eudde-titulo">${EUDDE.temaActual}</h2>

    <div class="eudde-card">
      <h3>Clase explicativa</h3>
      <p>
        En este módulo aprenderás sobre ${EUDDE.temaActual}.
        Es importante reconocer sus conceptos principales,
        comprender sus características y relacionarlos con
        ejemplos de la vida diaria y de tu materia.
      </p>
      <h3>¿Qué debes aprender?</h3>
      <ul>
        <li>Reconocer el concepto del tema.</li>
        <li>Identificar sus características principales.</li>
        <li>Comprender su utilidad e importancia.</li>
        <li>Aplicar lo aprendido mediante ejercicios.</li>
      </ul>
      <h3>Actividad práctica</h3>
      <p>
        Repasa la explicación y realiza la evaluación de
        10 preguntas para comprobar tus conocimientos.
      </p>
      <button class="eudde-btn" onclick="iniciarActividad()">
        Iniciar actividad
      </button>
    </div>
  `;
}

/* EVALUACIONES */

function iniciarActividad() {
  iniciarEvaluacion("Actividad", EUDDE.temaActual);
}

function iniciarExamen() {
  const temas = cursos[EUDDE.curso][EUDDE.especialidad][EUDDE.materia];
  const preguntas = [];

  temas.forEach(tema => {
    crearPreguntas(tema, 2).forEach(p => preguntas.push({
      ...p,
      tema
    }));
  });

  iniciarEvaluacion("Examen final", EUDDE.materia, preguntas.slice(0, 10));
}

function iniciarEvaluacion(tipo, tema, preguntasPersonalizadas) {
  EUDDE.evaluacionActual = preguntasPersonalizadas ||
    crearPreguntas(tema, EUDDE.preguntasActividad);

  EUDDE.respuestas = new Array(EUDDE.evaluacionActual.length).fill(null);

  EUDDE.tipoEvaluacion = tipo;
  EUDDE.temaEvaluacion = tema;

  mostrarPregunta(0);
}

function mostrarPregunta(indice) {
  const app = obtenerContenedor();
  const preguntas = EUDDE.evaluacionActual;
  const p = preguntas[indice];

  if (!p) return;

  app.innerHTML = `
    <button class="eudde-btn eudde-btn-sec"
      onclick="volverAContenido()">
      ← Salir de evaluación
    </button>

    <h2 class="eudde-titulo">${EUDDE.tipoEvaluacion}</h2>
    <p class="eudde-subtitulo">
      Pregunta ${indice + 1} de ${preguntas.length}
    </p>

    <div class="eudde-progreso">
      <div style="width:${((indice + 1) / preguntas.length) * 100}%"></div>
    </div>

    <div class="eudde-card">
      <h3>${p.pregunta}</h3>

      ${p.opciones.map((opcion, i) => `
        <label class="eudde-opcion">
          <input type="radio" name="respuesta"
            value="${i}"
            ${EUDDE.respuestas[indice] === i ? "checked" : ""}
            onchange="guardarRespuesta(${indice},${i})">
          ${opcion}
        </label>
      `).join("")}

      <div style="margin-top:20px">
        ${indice > 0 ? `
          <button class="eudde-btn eudde-btn-sec"
            onclick="mostrarPregunta(${indice - 1})">
            Anterior
          </button>
        ` : ""}

        ${indice < preguntas.length - 1 ? `
          <button class="eudde-btn"
            onclick="siguientePregunta(${indice})">
            Siguiente
          </button>
        ` : `
          <button class="eudde-btn"
            onclick="finalizarEvaluacion()">
            Finalizar evaluación
          </button>
        `}
      </div>
    </div>
  `;
}

function guardarRespuesta(indice, respuesta) {
  EUDDE.respuestas[indice] = respuesta;
}

function siguientePregunta(indice) {
  if (EUDDE.respuestas[indice] === null) {
    alert("Selecciona una respuesta antes de continuar.");
    return;
  }
  mostrarPregunta(indice + 1);
}

function finalizarEvaluacion() {
  if (EUDDE.respuestas.some(r => r === null)) {
    alert("Responde todas las preguntas antes de finalizar.");
    return;
  }

  let correctas = 0;

  EUDDE.evaluacionActual.forEach((p, i) => {
    if (EUDDE.respuestas[i] === p.correcta) correctas++;
  });

  const nota = correctas;
  const registro = {
    curso: EUDDE.curso,
    especialidad: EUDDE.especialidad,
    materia: EUDDE.materia,
    tema: EUDDE.temaEvaluacion,
    tipo: EUDDE.tipoEvaluacion,
    correctas,
    total: EUDDE.evaluacionActual.length,
    nota,
    fecha: new Date().toLocaleString()
  };

  EUDDE.historial.unshift(registro);
  localStorage.setItem("eudde_historial", JSON.stringify(EUDDE.historial));

  mostrarResultado(correctas, nota);
}

function mostrarResultado(correctas, nota) {
  const app = obtenerContenedor();
  const preguntas = EUDDE.evaluacionActual;

  app.innerHTML = `
    <h2 class="eudde-titulo">Resultado de tu evaluación</h2>

    <div class="eudde-nota">
      <h1 style="font-size:48px;color:#168bd2">${nota}/10</h1>
      <h3>${nota >= 7 ? "¡Buen trabajo!" : "Puedes seguir practicando."}</h3>
      <p>Respuestas correctas: ${correctas} de 10.</p>
    </div>

    <h3>Revisión de respuestas</h3>

    <div class="eudde-lista">
      ${preguntas.map((p, i) => {
        const bien = EUDDE.respuestas[i] === p.correcta;
        return `
          <div class="eudde-item">
            <p><strong>${i + 1}. ${p.pregunta}</strong></p>
            <p class="${bien ? "eudde-correcta" : "eudde-incorrecta"}">
              ${bien ? "Correcta" : "Incorrecta"}
            </p>
            <p>Tu respuesta: ${
              EUDDE.respuestas[i] === null
                ? "Sin responder"
                : p.opciones[EUDDE.respuestas[i]]
            }</p>
            <p>Respuesta correcta: ${p.opciones[p.correcta]}</p>
            <p>${p.explicacion}</p>
          </div>
        `;
      }).join("")}
    </div>

    <button class="eudde-btn" onclick="mostrarModulos('${EUDDE.materia}')">
      Volver a la materia
    </button>
    <button class="eudde-btn eudde-btn-sec" onclick="mostrarHistorial()">
      Ver historial
    </button>
  `;
}

function volverAContenido() {
  if (EUDDE.tipoEvaluacion === "Examen final") {
    mostrarModulos(EUDDE.materia);
  } else {
    abrirModulo(
      cursos[EUDDE.curso][EUDDE.especialidad][EUDDE.materia]
        .indexOf(EUDDE.temaActual)
    );
  }
}

/* HISTORIAL */

function mostrarHistorial() {
  const app = obtenerContenedor();
  EUDDE.historial = JSON.parse(localStorage.getItem("eudde_historial") || "[]");

  app.innerHTML = `
    <button class="eudde-btn eudde-btn-sec"
      onclick="mostrarInicio()">← Inicio</button>

    <h2 class="eudde-titulo">Mi historial de evaluaciones</h2>

    ${EUDDE.historial.length === 0
      ? `<p>Aún no tienes evaluaciones realizadas.</p>`
      : `
        <div class="eudde-lista">
          ${EUDDE.historial.map(h => `
            <div class="eudde-item">
              <h3>${h.materia}</h3>
              <p>${h.tipo}: ${h.tema}</p>
              <p>Nota: <strong>${h.nota}/10</strong></p>
              <p>Correctas: ${h.correctas}/${h.total}</p>
              <small>${h.fecha}</small>
            </div>
          `).join("")}
        </div>
      `
    }
  `;
}

/* INICIO AUTOMÁTICO */

document.addEventListener("DOMContentLoaded", () => {
  instalarEstilos();

  const app = obtenerContenedor();
  if (!app.innerHTML.trim()) {
    mostrarInicio();
  }
});

/* FUNCIONES DISPONIBLES PARA LOS BOTONES DEL HTML */

window.mostrarInicio = mostrarInicio;
window.mostrarEspecialidades = mostrarEspecialidades;
window.mostrarMaterias = mostrarMaterias;
window.mostrarModulos = mostrarModulos;
window.abrirModulo = abrirModulo;
window.iniciarActividad = iniciarActividad;
window.iniciarExamen = iniciarExamen;
window.mostrarHistorial = mostrarHistorial;
window.guardarRespuesta = guardarRespuesta;
window.siguientePregunta = siguientePregunta;
window.finalizarEvaluacion = finalizarEvaluacion;
window.mostrarPregunta = mostrarPregunta;
window.volverAContenido = volverAContenido;
