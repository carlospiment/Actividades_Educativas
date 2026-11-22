---
name: organizadores-graficos-mermaid
description: Diseña, renderiza y actualiza mapas conceptuales y esquemas mentales interactivos con Mermaid.js para las lecciones de Agricultura de 3.º a 6.º grado en modo offline.
---

# Organizadores Gráficos Interactivos con Mermaid.js

Esta habilidad guía la creación y mantenimiento de esquemas visuales y mapas conceptuales embebidos en el portal de actividades y en la carpeta `recursos/`.

## Requisitos de Sintaxis y Rendimiento Offline

1. **Dependencia Local:**
   - La librería está embebida localmente en `js/mermaid.min.js`. No requiere CDN ni acceso a internet.
2. **Sintaxis de Mapas Conceptuales (`graph TD`):**
   - Utilizar nodos con identificadores claros y etiquetas entre corchetes:
     ```mermaid
     graph TD
       A["EL HUERTO ESCOLAR"] --> B["Aporte Nutricional"]
       A --> C["Educación Agrícola"]
       B --> D["Vitaminas y Minerales"]
       C --> E["Trabajo en Equipo"]
     ```
3. **Sintaxis de Mapas Mentales (`mindmap`):**
   ```mermaid
   mindmap
     root((Agricultura Agrosostenible))
       Suelo
         Materia Orgánica
         Textura y pH
       Abonos
         Bocashi
         Biol Líquido
       Prácticas
         Curvas a Nivel
         Coberturas Vivas
   ```

## Ubicación de Recursos Espejo
Cada grado cuenta con su recurso visual independiente para visualización en pantalla completa o impresión:
- `recursos/tercero-mapa-conceptual.html` y `recursos/tercero-mapa-mental.html`
- `recursos/cuarto-mapa-conceptual.html` y `recursos/cuarto-mapa-mental.html`
- `recursos/quinto-mapa-conceptual.html` y `recursos/quinto-mapa-mental.html`
- `recursos/sexto-mapa-conceptual.html` y `recursos/sexto-mapa-mental.html`
