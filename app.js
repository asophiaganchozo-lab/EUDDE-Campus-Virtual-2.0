
// ==========================================
// EUDDE CAMPUS VIRTUAL
// Archivo principal de funcionamiento
// ==========================================

const cursos = {
  "Primero de Bachillerato": {
    "Informática": {
      "Matemáticas": [
        "Función", "Función afín", "Recta",
        "Sistema de ecuaciones", "Vectores en el plano"
      ],
      "Física": [
        "Movimiento rectilíneo uniforme (MRU)",
        "Movimiento rectilíneo uniformemente variado (MRUV)",
        "Movimiento circular uniforme (MCU)",
        "Movimiento circular uniformemente variado (MCUV)",
        "Leyes de Newton"
      ],
      "Lengua": [
        "Neoclasicismo", "Comunicación para negocios",
        "Ensayo argumentativo temático", "Eufemismos",
        "Influencia de la globalización en el castellano"
      ],
      "Inglés": [
        "Present Perfect", "Past Simple vs Past Continuous",
        "Used to", "Vocabulario británico",
        "Comparatives"
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
        "Crear una base de datos real",
        "Consultas y organización de datos"
      ],
      "Sistemas Operativos": [
        "Windows y Linux", "Instalación y configuración",
        "Gestión de archivos y usuarios",
        "Comandos de terminal", "Administración del sistema"
      ],
      "Redes y Conectividad": [
        "Tipos de redes LAN, WAN y WiFi",
        "Direcciones IP y DNS", "Modelo OSI y TCP/IP",
        "Configuración de router", "Conectividad de redes"
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
        "Trigonometría", "Estadística y probabilidad",
        "Progresiones"
      ],
      "Física": [
        "Trabajo y energía", "Potencia",
        "Impulso y cantidad de movimiento",
        "Hidrostática", "Calor y temperatura"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice",
        "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing y ventas", "Costos y presupuesto",
        "Prototipo"
      ],
      "Especialidad Informática": [
        "Programación avanzada", "Desarrollo web avanzado",
        "Bases de datos avanzadas", "Redes avanzadas",
        "Proyecto técnico"
      ]
    },

    "Ciencias": {
      "Matemáticas": [
        "Función cuadrática", "Función exponencial y logarítmica",
        "Trigonometría", "Estadística y probabilidad",
        "Progresiones"
      ],
      "Física": [
        "Trabajo y energía", "Potencia",
        "Impulso y cantidad de movimiento",
        "Hidrostática", "Calor y temperatura"
      ],
      "Química": [
        "Reacciones químicas", "Balanceo de ecuaciones",
        "Ácidos y bases", "Tabla periódica avanzada",
        "Estequiometría"
      ],
      "Biología": [
        "Célula", "ADN y herencia",
        "Ecosistemas", "Evolución",
        "Sistemas del cuerpo"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice",
        "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing", "Costos", "Prototipo"
      ]
    },

    "Contabilidad": {
      "Matemáticas": [
        "Función cuadrática", "Función exponencial",
        "Trigonometría", "Estadística",
        "Progresiones"
      ],
      "Contabilidad General": [
        "Activo, pasivo y patrimonio", "Libro diario",
        "Libro mayor", "Balance general",
        "Estado de resultados"
      ],
      "Inglés": [
        "Present Perfect Continuous", "First Conditional",
        "Second Conditional", "Passive Voice",
        "Phrasal Verbs"
      ],
      "Emprendimiento": [
        "Modelo Canvas", "Estudio de mercado",
        "Marketing", "Costos", "Prototipo"
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
        "Ondas y sonido", "Óptica",
        "Electricidad: Ley de Ohm", "Magnetismo",
        "Física moderna"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter",
        "Vocabulary for Work: CV e Interview"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas y rentabilidad",
        "Marca y publicidad", "Emprendimiento social",
        "Pitch"
      ],
      "Especialidad Informática": [
        "Proyecto final de software",
        "Desarrollo de aplicación o página web completa",
        "Base de datos del proyecto",
        "Presentación y defensa",
        "Documentación del proyecto"
      ]
    },

    "Ciencias": {
      "Matemáticas": [
        "Límites", "Derivadas", "Integrales",
        "Geometría en el espacio", "Matemática financiera"
      ],
      "Física": [
        "Ondas y sonido", "Óptica",
        "Electricidad", "Magnetismo", "Física moderna"
      ],
      "Química": [
        "Química orgánica", "pH",
        "Reacciones redox", "Gases", "Soluciones"
      ],
      "Biología": [
        "Genética avanzada", "Biotecnología",
        "Salud y enfermedades", "Medio ambiente",
        "Proyecto de investigación"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter",
        "Vocabulary for Work"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas",
        "Marca", "Emprendimiento social", "Pitch"
      ]
    },

    "Contabilidad": {
      "Matemáticas": [
        "Límites", "Derivadas", "Integrales",
        "Geometría en el espacio", "Matemática financiera"
      ],
      "Contabilidad Avanzada": [
        "Contabilidad de costos", "Inventarios",
        "Nómina y roles de pago",
        "Impuestos: IVA y Renta",
        "Auditoría básica"
      ],
      "Inglés": [
        "Reported Speech", "Third Conditional",
        "Relative Clauses", "Formal Letter",
        "Vocabulary for Work"
      ],
      "Emprendimiento": [
        "Plan de negocios", "Finanzas",
        "Marca", "Emprendimiento social", "Pitch"
      ]
    }
  }
};

// Elemento donde aparecerán las pantallas de los cursos
const contenido = document.createElement("section");
contenido.id = "contenido-cursos";
contenido.style.cssText = `
  display:none;
  padding:35px 8%;
  background:#f3faff;
  min-height:400px;
`;
document.querySelector("main").appendChild(contenido);

// Pantalla de selección de curso
function seleccionarCurso(curso, especialidad) {
  mostrarMaterias(curso, especialidad);
}

// Mostrar especialidades
function mostrarEspecialidades(curso) {
  contenido.style.display = "block";

  const especialidades = Object.keys(cursos[curso]);

  contenido.innerHTML = `
    <button class="volver" onclick="volverInicio()">← Volver al inicio</button>
    <h2>${curso}</h2>
    <p>Selecciona tu especialidad para continuar.</p>
    <div class="tarjetas-cursos">
      ${especialidades.map(especialidad => `
        <button class="tarjeta-opcion"
          onclick="mostrarMaterias('${curso}', '${especialidad}')">
          <span>🎓</span>
          <h3>${especialidad}</h3>
          <p>Ver materias y módulos</p>
        </button>
      `).join("")}
    </div>
  `;

  contenido.scrollIntoView({ behavior: "smooth" });
}

// Mostrar materias
function mostrarMaterias(curso, especialidad) {
  const materias = cursos[curso]?.[especialidad];

  if (!materias) {
    alert("No se encontraron las materias de este curso.");
    return;
  }

  contenido.style.display = "block";

  contenido.innerHTML = `
    <button class="volver" onclick="volverInicio()">← Inicio</button>
    <button class="volver" onclick="mostrarEspecialidades('${curso}')">
      ← Especialidades
    </button>
    <span class="etiqueta">EUDDE CAMPUS VIRTUAL</span>
    <h2>${curso}</h2>
    <h3>${especialidad}</h3>
    <p>Selecciona una materia para ver sus cinco módulos.</p>

    <div class="tarjetas-cursos">
      ${Object.entries(materias).map(([materia, temas]) => `
        <button class="tarjeta-opcion"
          onclick="mostrarModulos('${curso}', '${especialidad}', '${materia}')">
          <span>📘</span>
          <h3>${materia}</h3>
          <p>5 módulos de aprendizaje</p>
        </button>
      `).join("")}
    </div>
  `;

  contenido.scrollIntoView({ behavior: "smooth" });
}

// Mostrar módulos de cada materia
function mostrarModulos(curso, especialidad, materia) {
  const temas = cursos[curso][especialidad][materia];

  contenido.innerHTML = `
    <button class="volver"
      onclick="mostrarMaterias('${curso}', '${especialidad}')">
      ← Volver a materias
    </button>
    <span class="etiqueta">${especialidad}</span>
    <h2>${materia}</h2>
    <p>Selecciona uno de los cinco módulos.</p>

    <div class="lista-modulos">
      ${temas.map((tema, indice) => `
        <article class="modulo">
          <div>
            <span class="numero-modulo">MÓDULO ${indice + 1}</span>
            <h3>${tema}</h3>
            <p>Clase, ejemplos, video y práctica.</p>
          </div>
          <button onclick="abrirModulo('${curso}', '${especialidad}', '${materia}', ${indice})">
            Entrar
          </button>
        </article>
      `).join("")}
    </div>
  `;

  contenido.scrollIntoView({ behavior: "smooth" });
}

// Abrir el contenido del módulo
function abrirModulo(curso, especialidad, materia, indice) {
  const tema = cursos[curso][especialidad][materia][indice];
  const esPractica = materia === "Matemáticas" || materia === "Física";

  contenido.innerHTML = `
    <button class="volver"
      onclick="mostrarModulos('${curso}', '${especialidad}', '${materia}')">
      ← Volver a módulos
    </button>

    <span class="etiqueta">MÓDULO ${indice + 1}</span>
    <h2>${tema}</h2>

    <div class="contenido-modulo">
      <article class="bloque-aprendizaje">
        <h3>📖 Clase</h3>
        <p>En esta sección estará la explicación completa de ${tema},
        con conceptos, ejemplos y material de aprendizaje.</p>
      </article>

      <article class="bloque-aprendizaje">
        <h3>🎥 Video educativo</h3>
        <p>Busca material audiovisual relacionado con este tema.</p>
        <a target="_blank" rel="noopener noreferrer"
          href="https://www.youtube.com/results?search_query=${encodeURIComponent(tema + " explicación educativa")}"
          class="boton-azul">Ver videos educativos</a>
      </article>

      <article class="bloque-aprendizaje">
        <h3>${esPractica ? "🧮 Ejercicios y procedimientos" : "✍️ Actividad práctica"}</h3>
        <p>${esPractica
          ? "Aquí se incluirán fórmulas, ejercicios resueltos paso a paso y problemas para practicar."
          : "Aquí se incluirán ejemplos, ejercicios y actividades relacionadas con el tema."}
        </p>
      </article>

      <article class="bloque-aprendizaje">
        <h3>📝 Actividad del módulo</h3>
        <p>15 preguntas de selección múltiple. Se calificará sobre 10.</p>
        <button class="boton-azul"
          onclick="alert('El banco de 15 preguntas de este tema se incorporará en la siguiente etapa.')">
          Actividad
        </button>
      </article>
    </div>
  `;

  contenido.scrollIntoView({ behavior: "smooth" });
}

// Volver a la página de inicio
function volverInicio() {
  contenido.style.display = "none";
  document.getElementById("inicio").scrollIntoView({
    behavior: "smooth"
  });
}

// Estilos adicionales de las pantallas internas
const estilos = document.createElement("style");

estilos.textContent = `
  #contenido-cursos h2 {
    color:#20364d;
    font-size:30px;
    margin:12px 0;
  }

  #contenido-cursos h3 {
    color:#20364d;
  }

  #contenido-cursos p {
    color:#718096;
    margin:7px 0 18px;
  }

  .etiqueta {
    display:inline-block;
    color:#168bc5;
    font-size:12px;
    font-weight:800;
    letter-spacing:1.5px;
  }

  .tarjetas-cursos {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(210px,1fr));
    gap:18px;
    margin-top:25px;
  }

  .tarjeta-opcion {
    border:1px solid #dcecf6;
    background:white;
    border-radius:15px;
    padding:25px;
    text-align:left;
    cursor:pointer;
    transition:.2s;
  }

  .tarjeta-opcion:hover {
    transform:translateY(-4px);
    border-color:#58b9e9;
    box-shadow:0 8px 22px #cdeafa;
  }

  .tarjeta-opcion span {
    font-size:30px;
  }

  .tarjeta-opcion h3 {
    margin-top:12px;
  }

  .volver {
    border:0;
    background:#e3f5ff;
    color:#168bc5;
    padding:10px 16px;
    border-radius:8px;
    margin:0 8px 22px 0;
    cursor:pointer;
    font-weight:700;
  }

  .lista-modulos {
    display:grid;
    gap:14px;
    margin-top:25px;
  }

  .modulo {
    background:white;
    border:1px solid #dcecf6;
    border-radius:13px;
    padding:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:15px;
  }

  .numero-modulo {
    color:#168bc5;
    font-size:11px;
    font-weight:800;
  }

  .modulo p {
    margin-bottom:0 !important;
  }

  .modulo button,
  .boton-azul {
    display:inline-block;
    border:0;
    background:#58b9e9;
    color:white;
    padding:11px 19px;
    border-radius:8px;
    font-weight:700;
    cursor:pointer;
    text-decoration:none;
    white-space:nowrap;
  }

  .contenido-modulo {
    display:grid;
    gap:18px;
    margin-top:25px;
  }

  .bloque-aprendizaje {
    background:white;
    padding:23px;
    border:1px solid #dcecf6;
    border-radius:13px;
  }

  @media(max-width:600px) {
    .modulo {
      align-items:flex-start;
      flex-direction:column;
    }
  }
`;

document.head.appendChild(estilos);

console.log("EUDDE Campus Virtual está iniciado correctamente.");
