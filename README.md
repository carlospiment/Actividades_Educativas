# Portal Web de Actividades Curriculares — Tecnología (Agricultura) MEDUCA 2026

**Institución:** Centro Educativo Oficial / Ministerio de Educación (MEDUCA)  
**Docente:** Prof. Carlos Iván Pimentel Marín (Cédula: 9-700-1451)  
**Asignatura:** Tecnología (Especialidad: Agricultura) — 3.º a 6.º Grado  
**Año Lectivo:** 2026  
**Ubicación del Portal:** `g:\Mi unidad\MEDUCA\AGRICULTURA\ACTIVIDADES`

---

## 1. Descripción General

Esta aplicación web interactiva permite consultar, filtrar, organizar e imprimir el listado oficial de actividades curriculares y evaluativas de todos los grados (3.º, 4.º, 5.º y 6.º) y grupos (A, B y C, totalizando 12 grupos escolares).

Los datos han sido extraídos directamente de la carpeta oficial del sistema de calificaciones:
`C:\Users\Alex\OneDrive\MEDUCA\AGENTES\AGENTE_LIBRETA_CALIFICACIONES`

---

## 2. Características del Sistema

1. **Gestión Multi-Trimestre:**
   - **Tercer Trimestre (Periodo Académico Actual - Noviembre 2026):** Destacado por defecto con las 6 actividades oficiales registradas en el grupo 3C (`Separador trimestral`, `Glosario`, `Limpieza`, `Lección, Conceptual y Mental`, `Limpieza`, `Prueba evaluativa`) y la proyección curricular por competencias para todos los grados.
   - **Primer Trimestre:** Historial completo con 71 actividades evaluativas registradas en los 12 grupos.
   - **Segundo Trimestre:** Planificación curricular de huerto escolar, eras de siembra y labores culturales.

2. **Vistas Dinámicas e Interactivas:**
   - 🗂️ **Vista de Tarjetas por Grupo:** Cada grupo con su horario de clases, maestro de grado, número de estudiantes y lista de actividades clasificadas con badges.
   - 📊 **Vista de Tabla Detallada:** Tabla comparativa estructurada por Grado, Grupo, Número, Nombre de Actividad, Categoría y Competencia MEDUCA.
   - 🧭 **Vista de Competencias Clave:** Mapeo de actividades contra las competencias fundamentales del Ministerio de Educación y rúbricas oficiales.
   - 📅 **Vista de Horario Semanal:** Organización de grupos y actividades por día de la semana (Lunes a Viernes).

3. **Búsqueda y Filtros en Tiempo Real:**
   - Búsqueda instantánea por palabras clave (ej: *campo*, *vocabulario*, *herramientas*, *limpieza*, *mapa*).
   - Filtros rápidos por Grado (3.º, 4.º, 5.º, 6.º) y por Sección (A, B, C).
   - Filtro por Categoría didáctica (Trabajo de Campo, Vocabulario y Glosario, Organizadores Visuales, Evaluaciones Sumativas, Cuestionarios, Planes y Separadores).

4. **Herramientas de Exportación y Sincronización:**
   - 🖨️ **Impresión Oficial / Guardar en PDF:** Calibrado con CSS `@media print` para emitir un informe nítido con membrete institucional del Ministerio de Educación y líneas de firma para el docente y la dirección.
   - 📥 **Exportar a CSV:** Descarga el listado filtrado para abrir directamente en Microsoft Excel.
   - 🔄 **Sincronización Automática:** Botón en pantalla para cargar copias de seguridad `.json` de la libreta, más un script `actualizar_datos.bat` para actualizar la base de datos en cualquier momento.

---

## 3. Estructura de Archivos

```
ACTIVIDADES/
├── index.html              # Interfaz principal de la aplicación web
├── iniciar_web.bat         # Acceso directo para abrir la web con un doble clic
├── actualizar_datos.py     # Script Python para sincronizar con la Libreta de Calificaciones
├── actualizar_datos.bat    # Acceso directo para ejecutar la sincronización en Windows
├── README.md               # Documentación y manual de usuario (este archivo)
├── css/
│   └── styles.css          # Estilos institucionales MEDUCA, componentes y CSS de impresión
└── js/
    ├── data.js             # Base de datos estructurada de grupos, horarios y actividades
    └── app.js              # Lógica interactiva, filtros, búsqueda, modales y exportaciones
```

---

## 4. Instrucciones de Uso

### Abrir la Aplicación:
- Haz doble clic sobre el archivo `iniciar_web.bat` o abre directamente `index.html` en tu navegador favorito (Chrome, Edge, Firefox). Funciona **100% Offline**.

### Actualizar los Datos:
- Si agregas nuevas actividades en la Libreta de Calificaciones (`AGENTE_LIBRETA_CALIFICACIONES`), simplemente ejecuta `actualizar_datos.bat` o utiliza el botón **Sincronizar Libreta** dentro de la web.
