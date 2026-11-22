---
name: evaluaciones-digitales-pruebas
description: Administra el banco de reactivos, la configuración de exámenes y el seguimiento de notas de las pruebas sumativas de Agricultura en la plataforma digital interactiva.
---

# Evaluaciones Digitales Interactivas (Pruebas Sumativas)

Esta habilidad documenta la administración, diseño pedagógico y seguimiento de las evaluaciones interactivas del portal `pruebas/`.

## Estructura Estandarizada del Examen (19 Puntos)

Cada prueba trimestral consta de 3 secciones balanceadas:
1. **Parte A: Completar con Banco de Palabras (5 Puntos):** Enunciados guiados con retroalimentación inmediata.
2. **Parte B: Selección Múltiple Ilustrada (5 Puntos):** Reactivos conceptuales acompañados de imágenes y opciones claras.
3. **Parte C: Aplicación Técnica y Prácticas Agrícolas (9 Puntos):** Resolución de casos prácticos, medidas de seguridad y sostenibilidad.

## Vistas y Rutas de la Suite

- **Acceso Estudiantil:**
  - 3.º Grado: `pruebas/tercer_grado.html`
  - 4.º Grado: `pruebas/cuarto_grado.html`
  - 5.º Grado: `pruebas/quinto_grado.html`
  - 6.º Grado: `pruebas/sexto_grado.html`
- **Panel Docente de Resultados:** `pruebas/docente.html`
- **Banco de Reactivos y Nómina:**
  - Estudiantes: `pruebas/data/estudiantes.json`
  - Pruebas por Grado: `pruebas/data/prueba_3ro.json`, `prueba_4to.json`, `prueba_5to.json`, `prueba_6to.json`

## Resiliencia y Funcionamiento Híbrido
- Funciona 100% offline mediante almacenamiento en `localStorage`.
- Cuenta con sincronización opcional con Firebase Firestore (`pruebas/js/firebase-config.js`) cuando hay conexión a internet disponible.
