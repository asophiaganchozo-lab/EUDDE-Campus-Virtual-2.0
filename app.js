
// ============================================
// EUDDE CAMPUS VIRTUAL
// SISTEMA DE ACTIVIDADES Y EVALUACIONES
// ============================================

const EUDDE = {
  preguntasPorActividad: 15,
  preguntasPorExamen: 20,
  notaMaxima: 10,
  cursos: {
    "Primero de Bachillerato": {
      "Informática": {
        "Matemáticas": [
          "Función",
          "Función afín",
          "Recta",
          "Sistema de ecuaciones",
          "Vectores en el plano"
        ],
        "Física": [
          "MRU",
          "MRUV",
          "MCU",
          "MCUV",
          "Leyes de Newton"
        ],
        "Lengua": [
          "Neoclasicismo",
          "Comunicación para negocios",
          "Ensayo argumentativo temático",
          "Eufemismos",
          "Globalización y castellano"
        ],
        "Inglés": [
          "Present Perfect",
          "Past Simple vs Past Continuous",
          "Used to",
          "Vocabulario británico",
          "Comparatives"
        ],
        "Emprendimiento": [
          "Qué es emprender",
          "Tipos de emprendimiento",
          "Idea de negocio",
          "Características del emprendedor",
          "Necesidades y oportunidades"
        ],
        "Ética": [
          "Valores y ética",
          "Derechos humanos",
          "Convivencia y respeto",
          "Constitución del Ecuador",
          "Ciudadanía"
        ],
        "Programación y Desarrollo de Software": [
          "Lógica y algoritmos",
          "Variables",
          "Condicionales y bucles",
          "Programación en Python",
          "Programación orientada a objetos"
        ],
        "Diseño y Desarrollo Web": [
          "HTML y CSS",
          "JavaScript básico",
          "Diseño responsive",
          "Publicar una página web",
          "Estructura de un sitio web"
        ],
        "Bases de Datos": [
          "Modelo entidad-relación",
          "SQL",
          "Llaves primarias y foráneas",
          "Crear una base de datos",
          "Consultas y organización de datos"
        ],
        "Sistemas Operativos": [
          "Windows y Linux",
          "Instalación y configuración",
          "Gestión de archivos y usuarios",
          "Comandos de terminal",
          "Administración del sistema"
        ],
        "Redes y Conectividad": [
          "Redes LAN, WAN y WiFi",
          "Direcciones IP y DNS",
          "Modelo OSI y TCP/IP",
          "Configuración de router",
          "Conectividad de redes"
        ],
        "Soporte Técnico": [
          "Partes de la computadora",
          "Mantenimiento preventivo y correctivo",
          "Instalación de programas y drivers",
          "Diagnóstico de fallas",
          "Solución de problemas"
        ],
        "Aplicaciones Ofimáticas": [
          "Word",
          "Excel",
          "PowerPoint",
          "Google Drive y correo",
          "Documentos digitales"
        ],
        "Seguridad Informática": [
          "Virus, malware y phishing",
          "Contraseñas seguras y 2FA",
          "Copias de seguridad",
          "Firewall y antivirus",
          "Protección de información"
        ],
        "Inteligencia Artificial Aplicada": [
          "Qué es la IA",
          "ChatGPT y herramientas de IA",
          "Crear imágenes y textos con IA",
          "Uso ético de la IA",
          "Aplicaciones de la IA"
        ]
      }
    },

    "Segundo de Bachillerato": {
      "Informática": {
        "Matemáticas": [
          "Función cuadrática",
          "Función exponencial y logarítmica",
          "Trigonometría",
          "Estadística y probabilidad",
          "Progresiones"
        ],
        "Física": [
          "Trabajo y energía",
          "Potencia",
          "Impulso y cantidad de movimiento",
          "Hidrostática",
          "Calor y temperatura"
        ],
        "Inglés": [
          "Present Perfect Continuous",
          "First Conditional",
          "Second Conditional",
          "Passive Voice",
          "Phrasal Verbs"
        ],
        "Emprendimiento": [
          "Modelo Canvas",
          "Estudio de mercado",
          "Marketing y ventas",
          "Costos y presupuesto",
          "Prototipo"
        ],
        "Especialidad Informática": [
          "Programación avanzada",
          "Desarrollo web avanzado",
          "Bases de datos avanzadas",
          "Redes avanzadas",
          "Proyecto técnico"
        ]
      },
      "Ciencias": {
        "Matemáticas": [
          "Función cuadrática",
          "Función exponencial y logarítmica",
          "Trigonometría",
          "Estadística y probabilidad",
          "Progresiones"
        ],
        "Física": [
          "Trabajo y energía",
          "Potencia",
          "Impulso y cantidad de movimiento",
          "Hidrostática",
          "Calor y temperatura"
        ],
        "Química": [
          "Reacciones químicas",
          "Balanceo de ecuaciones",
          "Ácidos y bases",
          "Tabla periódica avanzada",
          "Estequiometría"
        ],
        "Biología": [
          "Célula",
          "ADN y herencia",
          "Ecosistemas",
          "Evolución",
          "Sistemas del cuerpo"
        ],
        "Inglés": [
          "Present Perfect Continuous",
          "First Conditional",
          "Second Conditional",
          "Passive Voice",
          "Phrasal Verbs"
        ],
        "Emprendimiento": [
          "Modelo Canvas",
          "Estudio de mercado",
          "Marketing",
          "Costos",
          "Prototipo"
        ]
      },
      "Contabilidad": {
        "Matemáticas": [
          "Función cuadrática",
          "Función exponencial",
          "Trigonometría",
          "Estadística",
          "Progresiones"
        ],
        "Contabilidad General": [
          "Activo, pasivo y patrimonio",
          "Libro diario",
          "Libro mayor",
          "Balance general",
          "Estado de resultados"
        ],
        "Inglés": [
          "Present Perfect Continuous",
          "First Conditional",
          "Second Conditional",
          "Passive Voice",
          "Phrasal Verbs"
        ],
        "Emprendimiento": [
          "Modelo Canvas",
          "Estudio de mercado",
          "Marketing",
          "Costos",
          "Prototipo"
        ]
      }
    },

    "Tercero de Bachillerato": {
      "Informática": {
        "Matemáticas": [
          "Límites",
          "Derivadas",
          "Integrales básicas",
          "Geometría en el espacio",
          "Matemática financiera"
        ],
        "Física": [
          "Ondas y sonido",
          "Óptica",
          "Electricidad: Ley de Ohm",
          "Magnetismo",
          "Física moderna"
        ],
        "Inglés": [
          "Reported Speech",
          "Third Conditional",
          "Relative Clauses",
          "Formal Letter",
          "Vocabulary for Work"
        ],
        "Emprendimiento": [
          "Plan de negocios",
          "Finanzas y rentabilidad",
          "Marca y publicidad",
          "Emprendimiento social",
          "Pitch"
        ],
        "Especialidad Informática": [
          "Proyecto final de software",
          "Desarrollo de aplicación o web completa",
          "Base de datos del proyecto",
          "Presentación y defensa",
          "Documentación del proyecto"
        ]
      },
      "Ciencias": {
        "Matemáticas": [
          "Límites",
          "Derivadas",
          "Integrales",
          "Geometría en el espacio",
          "Matemática financiera"
        ],
        "Física": [
          "Ondas y sonido",
          "Óptica",
          "Electricidad",
          "Magnetismo",
          "Física moderna"
        ],
        "Química": [
          "Química orgánica",
          "pH",
          "Reacciones redox",
          "Gases",
          "Soluciones"
        ],
        "Biología": [
          "Genética avanzada",
          "Biotecnología",
          "Salud y enfermedades",
          "Medio ambiente",
          "Proyecto de investigación"
        ],
        "Inglés": [
          "Reported Speech",
          "Third Conditional",
          "Relative Clauses",
          "Formal Letter",
          "Vocabulary for Work"
        ],
        "Emprendimiento": [
          "Plan de negocios",
          "Finanzas",
          "Marca",
          "Emprendimiento social",
          "Pitch"
        ]
      },
      "Contabilidad": {
        "Matemáticas": [
          "Límites",
          "Derivadas",
          "Integrales",
          "Geometría en el espacio",
          "Matemática financiera"
        ],
        "Contabilidad Avanzada": [
          "Contabilidad de costos",
          "Inventarios",
          "Nómina y roles de pago",
          "Impuestos: IVA y Renta",
          "Auditoría básica"
        ],
        "Inglés": [
          "Reported Speech",
          "Third Conditional",
          "Relative Clauses",
          "Formal Letter",
          "Vocabulary for Work"
        ],
        "Emprendimiento": [
          "Plan de negocios",
          "Finanzas",
          "Marca",
          "Emprendimiento social",
          "Pitch"
        ]
      }
    }
  }
};

// Preguntas de práctica iniciales.
// Cada pregunta tiene una respuesta correcta identificada.
const bancoPreguntas = {
  "Función": [
    {
      pregunta: "¿Qué representa una función matemática?",
      opciones: [
        "Una relación que asigna una salida a cada entrada",
        "Una operación de suma solamente",
        "Un conjunto sin relación",
        "Una figura geométrica"
      ],
      correcta: 0,
      explicacion: "Una función asigna exactamente un valor de salida a cada valor de entrada."
    },
    {
      pregunta: "Si f(x) = x + 3, ¿cuánto vale f(2)?",
      opciones: ["3", "5", "6", "9"],
      correcta: 1,
      explicacion: "Se reemplaza x por 2: f(2) = 2 + 3 = 5."
    },
    {
      pregunta: "En una función, ¿cómo se llama el valor que se introduce?",
      opciones: ["Imagen", "Variable independiente", "Resultado", "Pendiente"],
      correcta: 1,
      explicacion: "La variable independiente es el valor que se introduce."
    },
    {
      pregunta: "Si f(x) = 2x, ¿cuánto vale f(4)?",
      opciones: ["2", "4", "6", "8"],
      correcta: 3,
      explicacion: "f(4) = 2 × 4 = 8."
    },
    {
      pregunta: "¿Qué símbolo se utiliza frecuentemente para representar una función?",
      opciones: ["f(x)", "π", "√", "∞"],
      correcta: 0,
      explicacion: "La notación f(x) representa el valor de una función en x."
    }
  ],

  "MRU": [
    {
      pregunta: "¿Qué significa MRU?",
      opciones: [
        "Movimiento rectilíneo uniforme",
        "Movimiento rápido universal",
        "Movimiento rotatorio uniforme",
        "Movimiento relativo unitario"
      ],
      correcta: 0,
      explicacion: "MRU significa movimiento rectilíneo uniforme."
    },
    {
      pregunta: "¿Qué característica tiene el MRU?",
      opciones: [
        "La velocidad cambia constantemente",
        "La velocidad es constante",
        "La aceleración aumenta",
        "El objeto siempre está detenido"
      ],
      correcta: 1,
      explicacion: "En el MRU la velocidad permanece constante."
    },
    {
      pregunta: "¿Cuál es la fórmula de distancia en MRU?",
      opciones: ["d = v × t", "d = m × a", "d = v / t", "d = F × m"],
      correcta: 0,
      explicacion: "La distancia se obtiene multiplicando velocidad por tiempo."
    },
    {
      pregunta: "Un automóvil viaja a 20 km/h durante 2 horas. ¿Qué distancia recorre?",
      opciones: ["10 km", "20 km", "40 km", "60 km"],
      correcta: 2,
      explicacion: "d = 20 × 2 = 40 km."
    },
    {
      pregunta: "¿Qué unidad puede utilizarse para medir la velocidad?",
      opciones: ["Kilogramos", "Metros por segundo", "Litros", "Grados"],
      correcta: 1,
      explicacion: "La velocidad puede expresarse en metros por segundo (m/s)."
    }
  ]
};

// Generar preguntas disponibles para un tema.
// No se inventan preguntas para completar los cuestionarios:
// si falta el banco completo, se informa al estudiante.
function obtenerPreguntas(tema, cantidad) {
  const disponibles = bancoPreguntas[tema] || [];

  if (disponibles.length < cantidad) {
    return null;
  }

  const mezcladas = [...disponibles].sort(() => Math.random() - 0.5);
  return mezcladas.slice(0, cantidad);
}

// Estado de la evaluación activa
let evaluacionActual = null;
let indicePregunta = 0;
let respuestasUsuario = [];

// Iniciar una evaluación
function iniciarEvaluacion(tema, tipo = "actividad") {
  const cantidad = tipo === "examen"
    ? EUDDE.preguntasPorExamen
    : EUDDE.preguntasPorActividad;

  const preguntas = obtenerPreguntas(tema, cantidad);

  if (!preguntas) {
    alert(
      `El banco de preguntas de "${tema}" todavía no está completo. ` +
      `Se necesitan ${cantidad} preguntas para iniciar esta evaluación.`
    );
    return;
  }

  evaluacionActual = {
    tema,
    tipo,
    preguntas
  };

  indicePregunta = 0;
  respuestasUsuario = Array(cantidad).fill(null);

  mostrarPregunta();
}

// Mostrar una pregunta
function mostrarPregunta() {
  const pregunta = evaluacionActual.preguntas[indicePregunta];
  const zona = document.getElementById("contenido-cursos");

  if (!zona) return;

  const progreso =
    ((indicePregunta + 1) / evaluacionActual.preguntas.length) * 100;

  zona.innerHTML = `
    <div class="evaluacion">
      <button class="volver" onclick="salirEvaluacion()">
        ← Salir de la evaluación
      </button>

      <div class="evaluacion-cabecera">
        <span>${evaluacionActual.tipo === "examen"
          ? "EXAMEN FINAL"
          : "ACTIVIDAD DEL MÓDULO"}</span>
        <h2>${evaluacionActual.tema}</h2>
        <p>Pregunta ${indicePregunta + 1} de
          ${evaluacionActual.preguntas.length}</p>
      </div>

      <div class="barra-progreso">
        <div style="width:${progreso}%"></div>
      </div>

      <div class="pregunta-tarjeta">
        <h3>${indicePregunta + 1}. ${pregunta.pregunta}</h3>

        <div class="opciones-pregunta">
          ${pregunta.opciones.map((opcion, i) => `
            <label class="opcion">
              <input
                type="radio"
                name="respuesta"
                value="${i}"
                ${respuestasUsuario[indicePregunta] === i ? "checked" : ""}
                onchange="guardarRespuesta(${i})"
              >
              <span>${opcion}</span>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="controles-evaluacion">
        <button onclick="preguntaAnterior()"
          ${indicePregunta === 0 ? "disabled" : ""}>
          Anterior
        </button>

        ${
          indicePregunta === evaluacionActual.preguntas.length - 1
          ? `<button class="entregar" onclick="entregarEvaluacion()">
              Entregar evaluación
            </button>`
          : `<button class="siguiente" onclick="preguntaSiguiente()">
              Siguiente →
            </button>`
        }
      </div>
    </div>
  `;
}

function guardarRespuesta(opcion) {
  respuestasUsuario[indicePregunta] = opcion;
}

function preguntaSiguiente() {
  if (respuestasUsuario[indicePregunta] === null) {
    alert("Selecciona una respuesta antes de continuar.");
    return;
  }

  if (indicePregunta < evaluacionActual.preguntas.length - 1) {
    indicePregunta++;
    mostrarPregunta();
  }
}

function preguntaAnterior() {
  if (indicePregunta > 0) {
    indicePregunta--;
    mostrarPregunta();
  }
}

// Calcular resultado
function entregarEvaluacion() {
  if (respuestasUsuario.some(r => r === null)) {
    alert("Debes responder todas las preguntas antes de entregar.");
    return;
  }

  const preguntas = evaluacionActual.preguntas;
  let correctas = 0;

  preguntas.forEach((pregunta, i) => {
    if (respuestasUsuario[i] === pregunta.correcta) {
      correctas++;
    }
  });

  const nota = Number(
    (correctas / preguntas.length * EUDDE.notaMaxima).toFixed(2)
  );

  mostrarResultado(correctas, preguntas.length, nota);
}

// Mostrar calificación y explicación
function mostrarResultado(correctas, total, nota) {
  const zona = document.getElementById("contenido-cursos");

  const detalle = evaluacionActual.preguntas.map((p, i) => {
    const acertada = respuestasUsuario[i] === p.correcta;

    return `
      <article class="resultado-pregunta">
        <h4>${i + 1}. ${p.pregunta}</h4>
        <p>${acertada ? "✅ Respuesta correcta" : "❌ Respuesta incorrecta"}</p>
        <p><strong>Respuesta correcta:</strong> ${p.opciones[p.correcta]}</p>
        <p>${p.explicacion || ""}</p>
      </article>
    `;
  }).join("");

  zona.innerHTML = `
    <div class="resultado-final">
      <span>RESULTADO DE LA EVALUACIÓN</span>
      <h2>${nota} / 10</h2>
      <h3>${correctas} de ${total} respuestas correctas</h3>
      <p>${nota >= 7
        ? "¡Buen trabajo! Has alcanzado la nota de aprobación."
        : "Sigue practicando y vuelve a intentarlo cuando estés preparado."}</p>
        

      <div class="detalle-resultados">
        ${detalle}
      </div>

      <button class="siguiente" onclick="volverInicio()">
        Volver al inicio
      </button>
    </div>
  `;
}

function salirEvaluacion() {
  if (confirm("¿Deseas salir? Se perderán las respuestas de esta evaluación.")) {
    evaluacionActual = null;
    volverInicio();
  }
}

// Guardar la nota de manera local en este navegador
function guardarNotaLocal(tema, tipo, nota) {
  const historial = JSON.parse(
    localStorage.getItem("eudde_calificaciones") || "[]"
  );

  historial.push({
    tema,
    tipo,
    nota,
    fecha: new Date().toLocaleDateString("es-EC")
  });

  localStorage.setItem(
    "eudde_calificaciones",
    JSON.stringify(historial)
  
// ============================================
// EUDDE CAMPUS VIRTUAL
// NAVEGACIÓN Y PANTALLAS
// ============================================

let zonaCursos = document.getElementById("contenido-cursos");

if (!zonaCursos) {
  zonaCursos = document.createElement("section");
  zonaCursos.id = "contenido-cursos";
  document.querySelector("main").appendChild(zonaCursos);
}

zonaCursos.style.cssText = `
  display:none;
  padding:35px 8%;
  background:#f3faff;
  min-height:450px;
`;

// Seleccionar el primer curso
function seleccionarCurso(curso, especialidad) {
  mostrarMaterias(curso, especialidad);
}

// Mostrar especialidades disponibles
function mostrarEspecialidades(curso) {
  zonaCursos.style.display = "block";

  const especialidades = Object.keys(EUDDE.cursos[curso] || {});

  zonaCursos.innerHTML = `
    <button class="eudde-volver" onclick="volverInicio()">← Inicio</button>
    <span class="eudde-etiqueta">BACHILLERATO</span>
    <h2>${curso}</h2>
    <p>Selecciona tu especialidad.</p>

    <div class="eudde-grid">
      ${especialidades.map(especialidad => `
        <button class="eudde-card"
          onclick='mostrarMaterias("${curso}", "${especialidad}")'>
          <span>🎓</span>
          <h3>${especialidad}</h3>
          <p>Ver materias</p>
        </button>
      `).join("")}
    </div>
  `;

  zonaCursos.scrollIntoView({ behavior: "smooth" });
}

// Mostrar materias del curso
function mostrarMaterias(curso, especialidad) {
  const materias = EUDDE.cursos[curso]?.[especialidad];

  if (!materias) {
    alert("No se encontraron las materias de este curso.");
    return;
  }

  zonaCursos.style.display = "block";

  zonaCursos.innerHTML = `
    <button class="eudde-volver" onclick="volverInicio()">← Inicio</button>
    <button class="eudde-volver"
      onclick='mostrarEspecialidades("${curso}")'>← Especialidades</button>

    <span class="eudde-etiqueta">${especialidad}</span>
    <h2>${curso}</h2>
    <p>Selecciona una materia para revisar sus módulos.</p>

    <div class="eudde-grid">
      ${Object.keys(materias).map(materia => `
        <button class="eudde-card"
          onclick='mostrarModulos("${curso}", "${especialidad}", "${materia}")'>
          <span>📘</span>
          <h3>${materia}</h3>
          <p>5 módulos de aprendizaje</p>
        </button>
      `).join("")}
    </div>
  `;

  zonaCursos.scrollIntoView({ behavior: "smooth" });
}

// Mostrar los cinco módulos
function mostrarModulos(curso, especialidad, materia) {
  const temas = EUDDE.cursos[curso][especialidad][materia];

  zonaCursos.style.display = "block";

  zonaCursos.innerHTML = `
    <button class="eudde-volver"
      onclick='mostrarMaterias("${curso}", "${especialidad}")'>
      ← Volver a materias
    </button>

    <span class="eudde-etiqueta">${especialidad}</span>
    <h2>${materia}</h2>
    <p>Elige el módulo que deseas estudiar.</p>

    <div class="eudde-modulos">
      ${temas.map((tema, indice) => `
        <article class="eudde-modulo">
          <div>
            <span class="eudde-etiqueta">MÓDULO ${indice + 1}</span>
            <h3>${tema}</h3>
            <p>Clase, video, ejemplos y actividad.</p>
          </div>
          <button class="eudde-azul"
            onclick='abrirModulo("${curso}", "${especialidad}", "${materia}", ${indice})'>
            Entrar
          </button>
        </article>
      `).join("")}
    </div>

    <button class="eudde-examen"
      onclick='iniciarEvaluacion("${materia}", "examen")'>
      🎓 Examen de la materia
    </button>
  `;

  zonaCursos.scrollIntoView({ behavior: "smooth" });
}

// Abrir una clase
function abrirModulo(curso, especialidad, materia, indice) {
  const tema = EUDDE.cursos[curso][especialidad][materia][indice];
  const esPractica = materia === "Matemáticas" || materia === "Física";

  zonaCursos.style.display = "block";

  zonaCursos.innerHTML = `
    <button class="eudde-volver"
      onclick='mostrarModulos("${curso}", "${especialidad}", "${materia}")'>
      ← Volver a módulos
    </button>

    <span class="eudde-etiqueta">MÓDULO ${indice + 1}</span>
    <h2>${tema}</h2>

    <div class="eudde-contenido">
      <article class="eudde-bloque">
        <h3>📖 Clase</h3>
        <p>En esta sección se presenta la explicación del tema,
        sus conceptos principales y ejemplos.</p>
      </article>

      <article class="eudde-bloque">
        <h3>🎥 Videos educativos</h3>
        <p>Consulta videos para reforzar lo aprendido.</p>
        <a class="eudde-azul"
          href="https://www.youtube.com/results?search_query=${encodeURIComponent(tema + " explicación educativa")}"
          target="_blank" rel="noopener noreferrer">
          Buscar videos
        </a>
      </article>

      <article class="eudde-bloque">
        <h3>${esPractica ? "🧮 Ejercicios prácticos" : "✍️ Actividad de aprendizaje"}</h3>
        <p>${esPractica
          ? "Se incluirán fórmulas, ejercicios resueltos paso a paso y problemas para practicar."
          : "Se incluirán ejemplos y ejercicios relacionados con el contenido de esta clase."}
        </p>
      </article>

      <article class="eudde-bloque">
        <h3>📝 Actividad del módulo</h3>
        <p>Cuestionario de 15 preguntas de selección múltiple.</p>
        <button class="eudde-azul"
          onclick='iniciarEvaluacion("${tema}", "actividad")'>
          Resolver actividad
        </button>
      </article>
    </div>
  `;

  zonaCursos.scrollIntoView({ behavior: "smooth" });
}

// Regresar a la página principal
function volverInicio() {
  zonaCursos.style.display = "none";
  document.getElementById("inicio")?.scrollIntoView({
    behavior: "smooth"
  });
}

// Guardar resultados y mostrar revisión de respuestas
function mostrarResultado(correctas, total, nota) {
  guardarNotaLocal(
    evaluacionActual.tema,
    evaluacionActual.tipo,
    nota
  );

  const detalle = evaluacionActual.preguntas.map((pregunta, i) => {
    const acertada = respuestasUsuario[i] === pregunta.correcta;

    return `
      <article class="eudde-revision">
        <h4>${i + 1}. ${pregunta.pregunta}</h4>
        <p>${acertada ? "✅ Correcta" : "❌ Incorrecta"}</p>
        <p><strong>Respuesta correcta:</strong>
          ${pregunta.opciones[pregunta.correcta]}</p>
        <p>${pregunta.explicacion || ""}</p>
      </article>
    `;
  }).join("");

  zonaCursos.innerHTML = `
    <div class="eudde-resultado">
      <span class="eudde-etiqueta">EVALUACIÓN FINALIZADA</span>
      <h2>Tu calificación</h2>
      <div class="eudde-nota">${nota}/10</div>
      <h3>${correctas} de ${total} respuestas correctas</h3>
      <p>${nota >= 7
        ? "¡Felicitaciones! Has alcanzado la nota de aprobación."
        : "Puedes seguir practicando para mejorar tu resultado."}</p>

      <h3>Revisión de respuestas</h3>
      ${detalle}

      <button class="eudde-azul" onclick="volverInicio()">
        Volver al inicio
      </button>
    </div>
  `;

  evaluacionActual = null;
  zonaCursos.scrollIntoView({ behavior: "smooth" });
}

// Estilos de las pantallas internas
const estiloEudde = document.createElement("style");

estiloEudde.textContent = `
  #contenido-cursos h2 {
    color:#20364d;
    font-size:29px;
    margin:12px 0;
  }

  #contenido-cursos p {
    color:#718096;
    margin:8px 0 18px;
  }

  .eudde-etiqueta {
    color:#168bc5;
    font-size:11px;
    font-weight:800;
    letter-spacing:1.4px;
  }

  .eudde-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
    gap:18px;
    margin-top:25px;
  }

  .eudde-card {
    background:white;
    border:1px solid #dcecf6;
    border-radius:15px;
    padding:24px;
    text-align:left;
    cursor:pointer;
    transition:.2s;
  }

  .eudde-card:hover {
    transform:translateY(-4px);
    box-shadow:0 8px 22px #cdeafa;
  }

  .eudde-card span {
    font-size:30px;
  }

  .eudde-card h3 {
    color:#20364d;
    margin-top:12px;
  }

  .eudde-modulos {
    display:grid;
    gap:14px;
    margin-top:25px;
  }

  .eudde-modulo,
  .eudde-bloque {
    background:white;
    border:1px solid #dcecf6;
    border-radius:14px;
    padding:22px;
  }

  .eudde-modulo {
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:15px;
  }

  .eudde-modulo h3,
  .eudde-bloque h3 {
    color:#20364d;
    margin:8px 0;
  }

  .eudde-volver,
  .eudde-azul,
  .eudde-examen {
    display:inline-block;
    border:0;
    border-radius:9px;
    padding:11px 17px;
    margin:5px 7px 15px 0;
    cursor:pointer;
    font-weight:700;
    text-decoration:none;
  }

  .eudde-volver {
    background:#e3f5ff;
    color:#168bc5;
  }

  .eudde-azul {
    background:#58b9e9;
    color:white;
  }

  .eudde-examen {
    background:#20364d;
    color:white;
    margin-top:25px;
  }

  .eudde-contenido {
    display:grid;
    gap:16px;
    margin-top:25px;
  }

  .eudde-resultado {
    background:white;
    border-radius:16px;
    padding:25px;
  }

  .eudde-nota {
    font-size:48px;
    font-weight:800;
    color:#168bc5;
    margin:15px 0;
  }

  .eudde-revision {
    border:1px solid #dcecf6;
    border-radius:10px;
    padding:15px;
    margin:12px 0;
  }

  .eudde-revision h4 {
    color:#20364d;
  }

  .eudde-revision p {
    margin:6px 0 !important;
  }

  @media(max-width:600px) {
    .eudde-modulo {
      align-items:flex-start;
      flex-direction:column;
    }
  }
`;

document.head.appendChild(estiloEudde);

console.log("EUDDE: navegación y pantallas cargadas.");

