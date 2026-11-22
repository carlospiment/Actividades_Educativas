# Guía Oficial de Paleta de Colores y Estilos Visuales
## Portal Web de Actividades — Tecnología (Agricultura) MEDUCA 2026

**Documento:** Especificación del Sistema de Diseño (*Design System & Color Tokens*)  
**Institución:** Centro Educativo Básico General Cerro Tigre / MEDUCA  
**Área:** Tecnología (Agricultura)  

---

## 1. Identidad Institucional y Primaria

Colores corporativos oficiales del Ministerio de Educación y del ámbito agroeducativo:

| Token / Nombre | Valor HEX | Muestra | Uso Principal |
|:---|:---:|:---:|:---|
| `--color-meduca-navy` | `#0f2c59` | 🟦 | Barra superior (*Navbar*), cabecera institucional y pie de página |
| `--color-meduca-blue` | `#1e3a8a` | 🔷 | Botones secundarios, enlaces destacados y bordes activos |
| `--color-agro-green` | `#059669` | 🟩 | Botones primarios, estados confirmados y acentos agrícolas |
| `--color-agro-emerald` | `#10b981` | 🟢 | Bordes destacados, tarjetas hover e iconos de campo |
| `--color-gold` | `#d97706` | 🟨 | Badges de alerta, acento de periodos académicos y avisos |
| `background-body` | `#f8fafc` | ⬜ | Fondo general de la aplicación (Slate 50) |
| `text-primary` | `#0f172a` | ⬛ | Tipografía principal (Slate 900) |

---

## 2. Código Cromático por Grado Escolar

Cada grado académico cuenta con un gradiente y código de color único para una orientación visual inmediata del docente y estudiantes:

### 🌿 3.° Grado — Verde Esmeralda Tropical
- **Concepto:** Inicio del huerto escolar, nutrición, siembra y germinación.
- **Gradiente CSS:** `linear-gradient(135deg, #059669 0%, #10b981 55%, #34d399 100%)`
- **Sombra / Glow:** `box-shadow: 0 10px 24px -4px rgba(16, 185, 129, 0.42)`
- **Cabecera Modal:** `from-emerald-700 to-teal-800`

### 💧 4.° Grado — Azul Cielo / Turquesa Vivo
- **Concepto:** Sostenibilidad, abono Bocashi, riego y coberturas vivas.
- **Gradiente CSS:** `linear-gradient(135deg, #0284c7 0%, #0ea5e9 55%, #38bdf8 100%)`
- **Sombra / Glow:** `box-shadow: 0 10px 24px -4px rgba(14, 165, 233, 0.42)`
- **Cabecera Modal:** `from-sky-700 to-blue-800`

### ☀️ 5.° Grado — Naranja / Ámbar Cítrico de Cosecha
- **Concepto:** Conservación de suelo y agua, biofertilizante Biol y curvas a nivel.
- **Gradiente CSS:** `linear-gradient(135deg, #ea580c 0%, #f97316 55%, #fbbf24 100%)`
- **Sombra / Glow:** `box-shadow: 0 10px 24px -4px rgba(249, 115, 22, 0.42)`
- **Cabecera Modal:** `from-amber-600 to-orange-700`

### 🍇 6.° Grado — Púrpura / Índigo Real
- **Concepto:** Agroforestería, acidez y pH, enmiendas calcáreas y microcuencas.
- **Gradiente CSS:** `linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%)`
- **Sombra / Glow:** `box-shadow: 0 10px 24px -4px rgba(99, 102, 241, 0.42)`
- **Cabecera Modal:** `from-indigo-700 to-violet-800`

---

## 3. Código Cromático de Etiquetas y Badges por Categoría

| Categoría Pedagógica | Fondo Tailwind | Borde | Texto | Icono |
|:---|:---:|:---:|:---:|:---:|
| **Separador** | `bg-amber-100` | `border-amber-300` | `text-amber-800` | 🎨 |
| **Vocabulario / Glosario** | `bg-purple-100` | `border-purple-300` | `text-purple-800` | 📖 |
| **Charla / Exposición** | `bg-teal-100` | `border-teal-300` | `text-teal-800` | 🗣️ |
| **Organizador / Lección** | `bg-blue-100` | `border-blue-300` | `text-blue-800` | 🗺️ |
| **Campo / Limpieza / Huerto** | `bg-emerald-100` | `border-emerald-300` | `text-emerald-800` | 🌱 |
| **Evaluación / Prueba Sumativa** | `bg-rose-100` | `border-rose-300` | `text-rose-800` | 📝 |

---

## 4. Estilos y Contraste de Impresión (`@media print`)

- **Fondo:** Blanco absoluto (`#ffffff`).
- **Texto:** Negro puro (`#000000`).
- **Bordes:** `#cbd5e1` (Slate 300) con grosores de `1px` a `2px`.
- **Elementos Ocultos:** Todo elemento etiquetado con `.no-print` (botones de acción, selectores táctiles y animaciones).
