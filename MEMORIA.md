# MEMORIA TÉCNICA, PEDAGÓGICA Y OPERATIVA DEL SISTEMA
## Portal Web de Actividades Curriculares — Tecnología (Agricultura) MEDUCA 2026

**Documento:** Memoria Oficial del Proyecto  
**Institución:** Centro Educativo Básico General Cerro Tigre / Ministerio de Educación (MEDUCA)  
**Docente Responsable:** Prof. Carlos Iván Pimentel Marín (Cédula: 9-700-1451)  
**Asignatura:** Tecnología — Especialidad: Agricultura  
**Niveles Académicos:** Educación Básica General Primaria (3.º, 4.º, 5.º y 6.º Grado — 12 Grupos)  
**Periodo Escolar:** Año Lectivo 2026 — Tercer Trimestre (Septiembre - Diciembre 2026)  
**Ubicación del Repositorio:** `g:\Mi unidad\MEDUCA\AGRICULTURA\ACTIVIDADES`

---

## 1. Resumen Ejecutivo e Identificación Institucional

La presente **Memoria Técnica y Pedagógica** documenta de manera exhaustiva el diseño, la arquitectura de software, la fundamentación curricular y el protocolo de operación del **Portal Web de Actividades Curriculares de Agricultura**, desarrollado para respaldar la labor docente en el **Centro Educativo Básico General Cerro Tigre**.

El sistema fue concebido para superar las limitaciones de la gestión analógica y la dispersión documental, centralizando en una plataforma interactiva, ligera, offline y multiplataforma todas las actividades de aprendizaje, rúbricas de evaluación oficiales, lecciones conceptuales, organizadores gráficos interactivos y exámenes sumativos de los 12 grupos de primaria atendidos por la cátedra.

```
                    ┌────────────────────────────────────────────────────────┐
                    │     AGENTE_LIBRETA_CALIFICACIONES (Master Ledger)     │
                    │      (OneDrive - Backups JSON - Estudiantes T1-T3)     │
                    └───────────────────────────┬────────────────────────────┘
                                                │
                                       sync_actividades.py
                                       sync_watcher.py
                                                ▼
                    ┌────────────────────────────────────────────────────────┐
                    │      PORTAL DE ACTIVIDADES CURRICULARES (Offline)      │
                    │   G:\Mi unidad\MEDUCA\AGRICULTURA\ACTIVIDADES\index.html│
                    ├────────────────────────────────────────────────────────┤
                    │ • Mobile-First (Navegación Grado ➔ Grupo ➔ Actividad)  │
                    │ • Organizadores Gráficos Interactivos (Mermaid.js)     │
                    │ • Rúbricas Oficiales MEDUCA (Manualidades, Campo, etc) │
                    │ • Plataforma de Pruebas Sumativas Online y Offline     │
                    └────────────────────────────────────────────────────────┘
```

---

## 2. Marco Curricular y Pedagógico MEDUCA

El diseño didáctico del portal responde a las directrices del programa oficial del **Ministerio de Educación (MEDUCA)** de Panamá, integrando un enfoque por competencias en las áreas de ciencia, tecnología y desarrollo agrosostenible:

### 2.1 Áreas Curriculares Integradas
- **Área 1: Fundamentos de la Agricultura y Herramientas:** Reconocimiento de utensilios agrícolas, normas de seguridad y ergonomía escolar.
- **Área 2: Manejo de Suelos y Aguas:** Textura, pH, materia orgánica, biofertilización (Biol), abonos fermentados (Bocashi) y conservación mediante curvas a nivel.
- **Área 3: Alimentos para Consumo Humano y Nutrición:** Cultivos hortícolas, valor nutricional en la dieta escolar, etapas fenológicas (germinación a cosecha).
- **Área 4: Ambiente, Agroforestería y Sostenibilidad:** Coberturas vivas, leguminosas, sistemas silvopastoriles, milpa y protección de microcuencas hidrográficas.

### 2.2 Estructura Estándar de Actividades del Trimestre III
Cada grupo escolar cuenta con una secuencia de 6 actividades evaluativas y formativas estructuradas bajo criterios uniformes:

| N.º | Actividad Tipo | Categoría | Instrumento / Rúbrica MEDUCA | Enfoque Pedagógico |
|:---:|:---|:---:|:---|:---|
| **1** | **Separador Trimestral** | Manualidades | Rúbrica de Manualidades (20 pts / Nota 5.0): Destreza técnica (30%), Creatividad (25%), Limpieza (20%), Materiales (15%), Puntualidad (10%). | Apertura artística del cuaderno, identidad de área y motricidad fina. |
| **2** | **Glosario Técnico** | Vocabulario | Lista de Cotejo / Tarjetas de Memoria: Dominio de términos técnicos, ortografía y conceptualización contextualizada. | Refuerzo de léxico técnico agronómico y comprensión lectora. |
| **3** | **Labor Práctica / Charla** | Campo / Exposición | Rúbrica de Campo o Evaluación de Exposición: Plantas ornamentales, huerto escolar y bioseguridad. | Práctica vivencial y expresión oral aplicada a las ciencias del agro. |
| **4** | **Lección y Organizadores** | Organizador | Evaluación Formativa / Rúbrica de Mapas Conceptuales y Mentales: Jerarquización de ideas y conexiones lógicas. | Asimilación significativa mediante pensamiento visual e interactivo. |
| **5** | **Trabajo de Campo / Mantenimiento** | Práctica | Rúbrica Oficial de Trabajo en Campo (100% / 5.0): Manejo de herramientas (25%), Ejecución técnica (25%), Cuidado ecológico (20%), Registro (15%), Actitud (15%). | Trabajo cooperativo en eras, huertos escolares, aporque, deshierbe y siembra. |
| **6** | **Prueba Evaluativa Sumativa** | Evaluación | Examen Escrito / Digital (19 Puntos): Pareo/banco de palabras (5 pts), Selección múltiple (5 pts), Aplicación técnica (9 pts). | Validación sumativa del logro de los objetivos de aprendizaje. |

---

## 3. Arquitectura del Sistema de Información

El proyecto se estructura bajo un diseño modular desacoplado en el *frontend* y con scripts de orquestación en *Python*:

```
ACTIVIDADES/
├── index.html                  # Interfaz principal SPA Mobile-First (Tailwind CDN)
├── MEMORIA.md                  # Memoria técnica, pedagógica y operativa (este documento)
├── README.md                   # Manual de usuario y presentación general
├── iniciar_web.bat             # Lanzador rápido en navegador predeterminado
├── actualizar_datos.bat        # Acceso directo para sincronización manual
├── actualizar_datos.py         # Script Python de extracción y sincronización
├── sync_watcher.py             # Monitor continuo en segundo plano (Hot-Reloading)
├── .gitignore                  # Exclusión de temporales y cachés
├── css/
│   └── styles.css              # Estilos personalizados, gradientes y print media queries
├── js/
│   ├── app.js                  # Lógica de la SPA, eventos, modales, vistas y sincronizador
│   ├── data.js                 # Base de datos JSON embebida con metadatos y horarios
│   └── mermaid.min.js          # Motor offline para renderizado de diagramas de flujo y mapas
├── pruebas/                    # Módulo de Evaluaciones Sumativas Interactivas
│   ├── index.html              # Selector de evaluaciones digitales
│   ├── docente.html            # Panel de monitoreo de calificaciones para el docente
│   ├── tercer_grado.html       # Prueba interactiva de 3.º Grado (Nutrición y Huerto)
│   ├── cuarto_grado.html       # Prueba interactiva de 4.º Grado (Sostenibilidad y Huerto)
│   ├── quinto_grado.html       # Prueba interactiva de 5.º Grado (Métodos de Producción)
│   ├── sexto_grado.html        # Prueba interactiva de 6.º Grado (Destino de la Producción)
│   ├── manifest.json           # Manifiesto Web App PWA para ejecución en teléfonos
│   ├── css/style.css           # Estilos de la suite de exámenes
│   ├── data/                   # Preguntas JSON, bancos de reactivos y nómina de estudiantes
│   └── js/                     # Scripts de validación, temporizador y sincronización Firebase
└── recursos/                   # Recursos pedagógicos complementarios y organizadores
    ├── Plantas_Ornamentales.pdf # Guía técnica de apoyo didáctico
    ├── tercero-mapa-conceptual.html / tercero-mapa-mental.html
    ├── cuarto-mapa-conceptual.html  / cuarto-mapa-mental.html
    ├── quinto-mapa-conceptual.html  / quinto-mapa-mental.html
    ├── sexto-mapa-conceptual.html   / sexto-mapa-mental.html
    └── metodos-*.html          # Fichas metodológicas sobre semilleros, campo y glosario
```

---

## 4. Componentes y Módulos Técnicos

### 4.1 Interfaz de Usuario Mobile-First (SPA)
- **Flujo de Pantallas Adaptativo:** Diseñado con botones táctiles de ancho completo para facilitar la operación en dispositivos móviles y tabletas:
  1. **Pantalla 1 (`screen-grades`):** Selección de Grado escolar (3.º, 4.º, 5.º, 6.º) con código de color institucional.
  2. **Pantalla 2 (`screen-groups`):** Selección de Grupo específico (A, B, C) o botón de visualización general ("Ver Todos los Grupos").
  3. **Pantalla 3 (`screen-activities`):** Visualización de actividades en modo **Tarjetas** (Cards) o modo **Lista Compacta**, con resumen del docente, horario oficial y contador de actividades.
- **Modal de Detalle Dinámico (`activity-modal`):**
  - Identificación semántica automática del tipo de actividad.
  - Presentación de rúbricas oficiales tabuladas con porcentajes y descripciones exactas del MEDUCA.
  - Pestañas interactivas de vocabulario (Banco de Palabras vs. Definiciones y Flashcards).
  - Pestañas conmutables entre **Mapa Conceptual** y **Mapa Mental** impulsados por `mermaid.min.js` integrado localmente (sin conexión a internet).
  - Enlaces directos a las pruebas evaluativas interactivas.

### 4.2 Motor de Sincronización Automática en Tiempo Real
El sistema cuenta con un circuito de datos bidireccional entre la libreta de calificaciones y el portal web:

1. **Vigilante en Segundo Plano (`sync_watcher.py`):**
   - Utiliza sondeo eficiente del sistema de archivos sobre la carpeta `backups/` del Agente de Libreta de Calificaciones.
   - Detecta cualquier guardado de notas o nueva actividad mediante comparación de marcas de tiempo (`mtime`).
   - Invoca dinámicamente `sync_actividades.export_actividades_data()` para generar de forma atómica el archivo `js/data.js`.
2. **Detección Dinámica en Frontend (`app.js`):**
   - Evento `window.focus`: Al volver a la pestaña tras registrar datos en otra aplicación, recarga el script en segundo plano.
   - Sondeo pasivo cada 4 segundos con parámetro de rotura de caché (`js/data.js?t=Date.now()`).
   - Mensaje flotante animado (*Toast Notification*): Informa inmediatamente al usuario cuando los datos han sido actualizados en pantalla sin reiniciar la sesión.

### 4.3 Sistema de Exámenes Digitales (`pruebas/`)
- Módulo PWA accesible por estudiantes para realizar sus evaluaciones diagnósticas, formativas o sumativas.
- Conexión opcional a Firebase Firestore con persistencia local en `localStorage` para garantizar operación ininterrumpida si se pierde la señal de internet.
- Panel docente protegido para visualizar promedios, reactivos con mayor índice de error y exportación de actas de notas.

---

## 5. Distribución de Horarios y Malla Curricular

La base de datos del sistema refleja fielmente la asignación horaria oficial del docente para los 12 grupos:

| Día | Periodos | Horario | Grado y Grupo | Sede / Ubicación |
|:---|:---:|:---:|:---:|:---|
| **Lunes** | III y IV | 8:10 – 9:20 a.m. | **3.° C** | Huerto / Salón de Grado |
| **Lunes** | VI y VII | 10:15 – 11:25 a.m. | **5.° C** | Huerto / Salón de Grado |
| **Martes** | I y II | 7:00 – 8:10 a.m. | **3.° A** | Huerto / Salón de Grado |
| **Martes** | III y IV | 8:10 – 9:20 a.m. | **4.° B** | Huerto / Salón de Grado |
| **Miércoles** | I y II | 7:00 – 8:10 a.m. | **6.° A** | Huerto / Salón de Grado |
| **Miércoles** | III y IV | 8:10 – 9:20 a.m. | **5.° B** | Huerto / Salón de Grado |
| **Miércoles** | VI y VII | 10:15 – 11:25 a.m. | **6.° C** | Huerto / Salón de Grado |
| **Jueves** | I y II | 7:00 – 8:10 a.m. | **3.° B** | Huerto / Salón de Grado |
| **Jueves** | III y IV | 8:10 – 9:20 a.m. | **4.° C** | Huerto / Salón de Grado |
| **Jueves** | V y VI | 9:40 – 10:50 a.m. | **6.° B** | Huerto / Salón de Grado |
| **Viernes** | I y II | 7:00 – 8:10 a.m. | **5.° A** | Huerto / Salón de Grado |
| **Viernes** | III y IV | 8:10 – 9:20 a.m. | **4.° A** | Huerto / Salón de Grado |

---

## 6. Bitácora de Desarrollo e Hitos Técnicos

1. **Fase 1: Extracción y Consolidación Curricular**
   - Integración con la libreta de calificaciones oficial en OneDrive.
   - Normalización de las 71 actividades del I Trimestre y estructuración de la proyección temática del III Trimestre.
2. **Fase 2: Rediseño de Experiencia de Usuario (Mobile-First)**
   - Sustitución de vistas complejas de escritorio por un embudo de 3 pantallas táctiles.
   - Incorporación de tipografía legible, botones grandes tipo tarjeta y paletas cromáticas diferenciadas por grado escolar.
3. **Fase 3: Visualizadores de Organizadores Gráficos y Rúbricas Oficiales**
   - Implementación de Mermaid.js en local (`js/mermaid.min.js`) para desplegar mapas conceptuales y esquemas mentales sin depender de servidores externos.
   - Creación de páginas de recursos dedicados en `recursos/` para visualización en pantalla completa.
   - Inclusión de las rúbricas oficiales de Manualidades, Glosarios y Trabajo de Campo del MEDUCA.
4. **Fase 4: Sincronización Bidireccional en Tiempo Real**
   - Creación del script vigilante `sync_watcher.py`.
   - Implementación del cargador dinámico con prevención de caché en `js/app.js` y avisos toast de actualización exitosa.

---

## 7. Manual de Operación y Mantenimiento

### 7.1 Iniciar la Aplicación en Modo Local
- Ejecutar el archivo `iniciar_web.bat` haciendo doble clic.
- Abrirá automáticamente el navegador predeterminado en `index.html`. No se requiere servidor HTTP, Node.js ni conexión a internet activa.

### 7.2 Activar la Sincronización Automática
Para trabajar simultáneamente con la Libreta de Calificaciones y el Portal de Actividades:
1. Abrir una consola de PowerShell o CMD en la carpeta del proyecto.
2. Ejecutar:
   ```powershell
   python sync_watcher.py
   ```
3. Cualquier cambio realizado y guardado en la libreta actualizará la base de datos `js/data.js` en milisegundos y se reflejará en el navegador sin perder el estado de la sesión.

### 7.3 Impresión y Generación de Informes en PDF
- Presionar `Ctrl + P` dentro de cualquier vista de actividades.
- Los estilos `@media print` de `css/styles.css` eliminan barras de navegación, botones y fondos innecesarios, formateando la página como un **Informe Curricular Oficial** con membrete y líneas de firma para la Dirección del plantel.

---

*Memoria técnica registrada y actualizada para el año lectivo 2026. Centro Educativo Básico General Cerro Tigre.*
