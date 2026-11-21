/**
 * app.js - Navegación móvil y sincronización en tiempo real
 * Especialidad: Tecnología (Agricultura) MEDUCA 2026
 * Tercer Trimestre (Trimestre Activo)
 */

(function() {
  class App {
    constructor() {
      this.data = window.actividadesData || { meta: {}, horario: [], grados: {} };
      this.currentScreen = 'grades'; // 'grades' | 'groups' | 'activities'
      this.currentGrade = '3';
      this.currentGroupId = '3C';
      this.activityLayout = 'cards'; // 'cards' | 'list'
      this._lastSerialized = JSON.stringify(this.data);
    }

    init() {
      console.log('[Actividades] Inicializando aplicación con sincronización automática...');
      this.setupAutoSync();
      this.setupModalEvents();
      this.goToGrades();
    }

    setupModalEvents() {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeActivityModal();
      });
      const modal = document.getElementById('activity-modal');
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeActivityModal();
        });
      }
    }

    // ── Sincronización Automática en Tiempo Real ─────────────────────────────
    setupAutoSync() {
      // 1. Al volver el foco a la ventana (cuando el profesor cambia de pestaña o aplicación)
      window.addEventListener('focus', () => {
        this.checkForUpdates();
      });

      // 2. Comprobación periódica cada 4 segundos
      setInterval(() => {
        this.checkForUpdates();
      }, 4000);
    }

    checkForUpdates() {
      // Recarga dinámica del script js/data.js con parámetro anti-caché
      const oldScript = document.getElementById('dynamic-data-script');
      if (oldScript) oldScript.remove();

      const script = document.createElement('script');
      script.id = 'dynamic-data-script';
      script.src = `js/data.js?t=${Date.now()}`;
      script.onload = () => {
        if (window.actividadesData) {
          const currentSerialized = JSON.stringify(window.actividadesData);
          if (currentSerialized !== this._lastSerialized) {
            console.log('[SYNC] ¡Nuevas actividades detectadas desde la libreta! Actualizando vista...');
            this._lastSerialized = currentSerialized;
            this.data = window.actividadesData;
            this.refreshCurrentView();
            this.showSyncToast('¡Actividades actualizadas desde la libreta!');
          }
        }
      };
      document.body.appendChild(script);
    }

    onDataUpdated(newData) {
      this.data = newData;
      this._lastSerialized = JSON.stringify(newData);
      this.refreshCurrentView();
    }

    refreshCurrentView() {
      if (this.currentScreen === 'grades') {
        this.goToGrades();
      } else if (this.currentScreen === 'groups') {
        this.goToGrade(this.currentGrade);
      } else if (this.currentScreen === 'activities') {
        this.goToGroup(this.currentGroupId);
      }
    }

    showSyncToast(msg) {
      let toast = document.getElementById('sync-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'sync-toast';
        toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-50 transition-all duration-300 opacity-0 pointer-events-none flex items-center gap-2';
        document.body.appendChild(toast);
      }
      toast.innerHTML = `<span>🔄</span><span>${msg}</span>`;
      toast.classList.remove('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none');
      }, 2500);
    }

    // ── Pantalla 1: Selección de Grado ──────────────────────────────────────
    goToGrades() {
      this.currentScreen = 'grades';
      document.getElementById('screen-grades').classList.remove('hidden');
      document.getElementById('screen-groups').classList.add('hidden');
      document.getElementById('screen-activities').classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ── Pantalla 2: Selección de Grupo ──────────────────────────────────────
    goToGrade(gradeNum) {
      this.currentGrade = gradeNum;
      this.currentScreen = 'groups';

      const gradeData = this.data.grados?.[gradeNum];
      if (!gradeData) return;

      document.getElementById('badge-current-grade').textContent = `${gradeNum}.° Grado`;
      document.getElementById('title-grade-name').textContent = gradeData.nombre;

      const container = document.getElementById('groups-button-list');
      if (container) {
        const groups = Object.values(gradeData.grupos || {});
        container.innerHTML = groups.map(g => `
          <button onclick="window.app.goToGroup('${g.id}')" class="btn-group-card flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shadow-xs">
                ${g.id}
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-black text-slate-900 text-base leading-tight">${g.nombre}</h3>
                  ${g.oficialLibreta ? '<span class="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300">Libreta</span>' : ''}
                </div>
                <p class="text-xs text-slate-500 mt-0.5">📅 ${g.dia} • ⏰ ${g.hora}</p>
              </div>
            </div>
            <div class="text-right">
              <span class="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                ${g.actividades?.length || 0} act.
              </span>
            </div>
          </button>
        `).join('') + `
          <!-- Botón para ver todos los grupos del grado en conjunto -->
          <button onclick="window.app.goToGroup('ALL')" class="w-full mt-2 p-3 rounded-xl border-2 border-dashed border-slate-300 hover:border-emerald-600 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 font-bold text-xs flex items-center justify-center gap-2 transition-all">
            <span>📚</span>
            <span>Ver todas las actividades de ${gradeNum}.° Grado (Grupos A, B y C)</span>
          </button>
        `;
      }

      document.getElementById('screen-grades').classList.add('hidden');
      document.getElementById('screen-groups').classList.remove('hidden');
      document.getElementById('screen-activities').classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    backToGroups() {
      this.goToGrade(this.currentGrade);
    }

    // ── Pantalla 3: Lista de Actividades del Grupo ──────────────────────────
    goToGroup(groupId) {
      this.currentGroupId = groupId;
      this.currentScreen = 'activities';

      const gradeData = this.data.grados?.[this.currentGrade];
      if (!gradeData) return;

      const headerEl = document.getElementById('active-group-header');
      if (groupId === 'ALL') {
        headerEl.innerHTML = `
          <div class="flex items-center justify-between">
            <div>
              <span class="text-[10px] font-black uppercase text-emerald-400 tracking-wider">Vista General de Grado</span>
              <h2 class="text-lg font-black text-white leading-tight mt-0.5">${gradeData.nombre} (Todos los Grupos)</h2>
              <p class="text-xs text-slate-300 mt-0.5">Tercer Trimestre • Secciones A, B y C</p>
            </div>
            <span class="text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-lg border border-white/20">
              3 Grupos
            </span>
          </div>
        `;
      } else {
        const group = gradeData.grupos?.[groupId];
        headerEl.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-xl bg-emerald-700 text-white font-black text-base flex items-center justify-center shadow-xs">
                ${group.id}
              </span>
              <div>
                <h2 class="text-base font-black text-white leading-tight">${group.nombre}</h2>
                <p class="text-xs text-slate-300 mt-0.5">📅 ${group.dia} • ⏰ ${group.hora} (${group.periodos})</p>
              </div>
            </div>
            <div class="text-right">
              <span class="text-xs font-bold bg-emerald-900/80 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                ${group.actividades?.length || 0} actividades
              </span>
              ${group.oficialLibreta ? '<div class="text-[10px] text-amber-300 font-bold mt-1">✓ Libreta Oficial</div>' : ''}
            </div>
          </div>
        `;
      }

      this.renderActivities();

      document.getElementById('screen-grades').classList.add('hidden');
      document.getElementById('screen-groups').classList.add('hidden');
      document.getElementById('screen-activities').classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setActivityLayout(layout) {
      this.activityLayout = layout;
      const btnCards = document.getElementById('toggle-cards');
      const btnList = document.getElementById('toggle-list');

      if (layout === 'cards') {
        btnCards.className = 'px-2.5 py-1 rounded-lg bg-white text-slate-800 shadow-xs transition-all';
        btnList.className = 'px-2.5 py-1 rounded-lg text-slate-600 hover:text-slate-900 transition-all';
      } else {
        btnList.className = 'px-2.5 py-1 rounded-lg bg-white text-slate-800 shadow-xs transition-all';
        btnCards.className = 'px-2.5 py-1 rounded-lg text-slate-600 hover:text-slate-900 transition-all';
      }

      this.renderActivities();
    }

    getBadgeColor(cat) {
      switch (cat) {
        case 'Separador': return 'bg-amber-100 text-amber-900 border-amber-300';
        case 'Vocabulario': return 'bg-indigo-100 text-indigo-900 border-indigo-300';
        case 'Campo': return 'bg-emerald-100 text-emerald-900 border-emerald-300';
        case 'Organizador': return 'bg-purple-100 text-purple-900 border-purple-300';
        case 'Evaluación': return 'bg-rose-100 text-rose-900 border-rose-300';
        case 'Plan / Taller': return 'bg-blue-100 text-blue-900 border-blue-300';
        default: return 'bg-slate-100 text-slate-800 border-slate-300';
      }
    }

    renderActivities() {
      const container = document.getElementById('activities-container');
      if (!container) return;

      const gradeData = this.data.grados?.[this.currentGrade];
      if (!gradeData) return;

      let acts = [];
      if (this.currentGroupId === 'ALL') {
        const firstGroup = Object.values(gradeData.grupos || {})[0];
        acts = firstGroup?.actividades || [];
      } else {
        acts = gradeData.grupos?.[this.currentGroupId]?.actividades || [];
      }

      if (acts.length === 0) {
        container.innerHTML = `
          <div class="py-12 text-center bg-white rounded-2xl border border-slate-200 p-6">
            <span class="text-3xl block mb-2">🌱</span>
            <p class="text-sm font-bold text-slate-700">Sin actividades registradas para este grupo.</p>
          </div>
        `;
        return;
      }

      if (this.activityLayout === 'cards') {
        container.innerHTML = acts.map(act => {
          const fechaInicio = act.fecha_inicio || act.fecha;
          const fechaBadge = fechaInicio 
            ? `<span class="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">📅 Inicio: ${fechaInicio}</span>`
            : `<span class="text-[10px] text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded-full">📅 Inicio: Pendiente</span>`;

          return `
          <div onclick="window.app.showActivityModal(${act.numero})" class="activity-card flex items-start gap-3.5 cursor-pointer hover:border-emerald-500 hover:shadow-md transition-all active:scale-[0.99]">
            <span class="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
              ${act.numero}
            </span>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="badge-tag ${this.getBadgeColor(act.categoria)}">
                  ${act.categoria}
                </span>
                ${fechaBadge}
                <span class="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 ml-auto">
                  Ver detalle
                </span>
              </div>
              <h3 class="font-black text-slate-900 text-base leading-snug">
                ${act.nombre}
              </h3>
              <p class="text-xs text-slate-600 mt-1 leading-relaxed">
                ${act.descripcion || 'Labor técnica formativa de Agricultura.'}
              </p>
            </div>
          </div>
        `;
        }).join('');
      } else {
        container.innerHTML = `
          <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
            ${acts.map(act => {
              const fechaInicio = act.fecha_inicio || act.fecha || 'Pendiente';
              return `
              <div onclick="window.app.showActivityModal(${act.numero})" class="p-3.5 flex items-center justify-between gap-3 hover:bg-emerald-50/50 cursor-pointer transition-colors">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="font-black text-slate-700 text-sm w-5 text-center flex-shrink-0">
                    ${act.numero}.
                  </span>
                  <div class="min-w-0">
                    <h4 class="font-bold text-slate-900 text-sm truncate">${act.nombre}</h4>
                    <div class="flex items-center gap-2 mt-0.5">
                      <p class="text-[11px] text-slate-500 truncate">${act.descripcion}</p>
                      <span class="text-[10px] text-slate-400 font-medium whitespace-nowrap">📅 ${fechaInicio}</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 flex-shrink-0">
                  <span class="badge-tag ${this.getBadgeColor(act.categoria)}">
                    ${act.categoria}
                  </span>
                  <span class="text-xs text-emerald-600 font-bold">Ver</span>
                </div>
              </div>
            `;
            }).join('')}
          </div>
        `;
      }
    }

    // ── Modal de Detalle, Instrucciones, Lección y Pruebas ──────────────────
    showActivityModal(actNumero) {
      const grade = this.currentGrade || '3';
      const gradeData = this.data.grados?.[grade];
      const group = gradeData?.grupos?.[this.currentGroupId] || Object.values(gradeData?.grupos || {})[0];
      const act = group?.actividades?.find(a => a.numero === actNumero) || {
        numero: actNumero,
        nombre: `Actividad ${actNumero}`,
        categoria: 'General',
        tipo: 'Actividad',
        descripcion: ''
      };

      const modal = document.getElementById('activity-modal');
      const modalHeader = document.getElementById('modal-header-color');
      const modalNum = document.getElementById('modal-act-num');
      const modalBadges = document.getElementById('modal-badges');
      const modalTitle = document.getElementById('modal-act-title');
      const modalBody = document.getElementById('modal-act-body');
      const modalFooter = document.getElementById('modal-act-footer');

      if (!modal) return;

      modalNum.textContent = act.numero;
      modalTitle.textContent = act.nombre;

      // Color de cabecera por grado o categoría
      if (grade === '3') modalHeader.className = 'bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-4 sm:p-5 flex items-center justify-between flex-shrink-0';
      else if (grade === '4') modalHeader.className = 'bg-gradient-to-r from-sky-700 to-blue-800 text-white p-4 sm:p-5 flex items-center justify-between flex-shrink-0';
      else if (grade === '5') modalHeader.className = 'bg-gradient-to-r from-amber-600 to-orange-700 text-white p-4 sm:p-5 flex items-center justify-between flex-shrink-0';
      else modalHeader.className = 'bg-gradient-to-r from-indigo-700 to-violet-800 text-white p-4 sm:p-5 flex items-center justify-between flex-shrink-0';

      modalBadges.innerHTML = `
        <span class="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white">
          ${grade}.° Grado • Trimestre III
        </span>
        <span class="text-[10px] font-bold bg-black/20 px-2 py-0.5 rounded text-white">
          ${act.categoria}
        </span>
        <span class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded text-white">
          📅 Inicio: ${act.fecha_inicio || act.fecha || 'Pendiente'}
        </span>
      `;

      // Render de contenido según número y grado
      let bodyHtml = '';
      let footerHtml = '';

      // Identificación semántica de la actividad (por categoría y nombre) para coincidencia exacta en todos los grupos (3A, 3B, 3C)
      const nom = (act.nombre || '').toLowerCase();
      const cat = (act.categoria || '').toLowerCase();

      const isSeparador = cat.includes('separador') || nom.includes('separador') || act.numero === 1;
      const isGlosario = cat.includes('vocabulario') || nom.includes('glosario') || nom.includes('vocabulario');
      const isLeccion = cat.includes('organizador') || nom.includes('lección') || nom.includes('leccion') || nom.includes('conceptual') || nom.includes('mental');
      const isPrueba = cat.includes('evaluación') || cat.includes('evaluacion') || nom.includes('prueba') || nom.includes('quiz') || nom.includes('evaluativa');

      if (isSeparador) {
        // ACTIVIDAD 1: SEPARADOR TRIMESTRAL - RÚBRICA OFICIAL: MANUALIDADES
        bodyHtml = `
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-950">
            <h4 class="text-sm font-black text-amber-900 uppercase tracking-wide mb-1 flex items-center gap-2">
              <span>🎨</span> Separador del Tercer Trimestre
            </h4>
            <p class="text-xs leading-relaxed text-amber-800">
              Apertura oficial del Tercer Trimestre en el cuaderno de Tecnología (Agricultura). Se elabora en página completa mediante diseño libre, creativo y alusivo al área que se está impartiendo.
            </p>
          </div>

          <div class="space-y-3">
            <h4 class="text-sm font-black text-slate-900 border-b pb-1">1. Materiales de Trabajo</h4>
            <ul class="text-xs text-slate-700 space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200 list-disc list-inside">
              <li><strong>Soporte base:</strong> Papel de construcción o papel cartulina (adaptado a la página completa del cuaderno).</li>
              <li><strong>Herramientas:</strong> Tijeras escolares de punta redonda.</li>
              <li><strong>Pegamento:</strong> Goma líquida o en barra (aplicación limpia y sin exceso).</li>
              <li><strong>Elementos decorativos alusivos:</strong> Recortes de páginas o revistas, collage, stickers o láminas con figuras representativas del área.</li>
              <li><strong>Rotulación artística:</strong> Lápices de colores, marcadores y bolígrafos para destacar el encabezado del trimestre.</li>
            </ul>

            <h4 class="text-sm font-black text-slate-900 border-b pb-1">2. Metodología de Elaboración</h4>
            <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <p>
                <strong>• Paso 1 (Preparación de la base):</strong> Recortar la hoja de papel de construcción o cartulina asegurando que cubra la página completa del cuaderno con bordes rectos y limpios.
              </p>
              <p>
                <strong>• Paso 2 (Diseño y composición temática):</strong> Seleccionar y distribuir las imágenes alusivas al área de aprendizaje (huerto, cultivos, herramientas o plantas) combinando collage, recortes o stickers.
              </p>
              <p>
                <strong>• Paso 3 (Recorte y pegado prolijo):</strong> Recortar cuidadosamente el contorno de cada figura y aplicar pegamento de forma uniforme para evitar arrugas o manchas en el cuaderno.
              </p>
              <p>
                <strong>• Paso 4 (Rotulación y detalles):</strong> Rotular creativamente el título del trimestre y agregar detalles decorativos con letra clara y legible.
              </p>
            </div>

            <h4 class="text-sm font-black text-slate-900 border-b pb-1">3. Rúbrica Oficial de Evaluación: Manualidades</h4>
            <p class="text-xs text-slate-500 italic">
              Matriz de valoración oficial (escala 20 pts / Nota 5.0):
            </p>

            <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table class="w-full text-xs text-left border-collapse">
                <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-2.5 w-16">Peso</th>
                    <th class="p-2.5">Criterio Oficial</th>
                    <th class="p-2.5 text-emerald-800">5 - Excelente (Máximo)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">30%</td>
                    <td class="p-2.5 font-bold text-slate-900">Destreza Técnica (Recortar y Pegar)</td>
                    <td class="p-2.5 text-slate-600"><strong>6 pts:</strong> Recortes exactos siguiendo los bordes. Pegado impecable, sin manchas ni exceso de pegamento.</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">25%</td>
                    <td class="p-2.5 font-bold text-slate-900">Creatividad y Diseño (Ilustrar y Letras)</td>
                    <td class="p-2.5 text-slate-600"><strong>5 pts:</strong> Dibujos originales y detallados. Letras altamente legibles con diseño artístico excepcional.</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">30%</td>
                    <td class="p-2.5 font-bold text-slate-900">Seguimiento de Instrucciones</td>
                    <td class="p-2.5 text-slate-600"><strong>6 pts:</strong> Sigue todos los pasos de manera secuencial y cumple con el 100% de los requerimientos.</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">15%</td>
                    <td class="p-2.5 font-bold text-slate-900">Orden y Aseo</td>
                    <td class="p-2.5 text-slate-600"><strong>3 pts:</strong> Presentación final impecable. El espacio de trabajo quedó perfectamente limpio y organizado.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="p-2 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-bold text-center">
              Puntaje Total: 20 Puntos = Calificación 5.0 (Excelente)
            </div>
          </div>
        `;
        footerHtml = `
          <button onclick="window.app.closeActivityModal()" class="w-full py-2.5 px-4 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">
            Cerrar
          </button>
        `;
      } else if (isGlosario) {
        if (grade === '4') {
          // GLOSARIO DE TÉRMINOS - 4TO GRADO (Lección 4.3.1: Beneficios e importancia del huerto escolar)
          bodyHtml = `
            <div class="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-sky-950">
              <h4 class="text-sm font-black text-sky-900 uppercase tracking-wide mb-1 flex items-center gap-2">
                <span>📖</span> Glosario de Términos Agrícolas (4.° Grado)
              </h4>
              <p class="text-xs leading-relaxed text-sky-800">
                Vocabulario técnico curricular: <strong>Beneficios e importancia del huerto escolar</strong> (Lección 4.3.1).
              </p>
            </div>

            <!-- Selector de Modo: Sin Definición vs Con Definición -->
            <div class="flex items-center justify-between bg-slate-100 p-1 rounded-xl text-xs font-bold">
              <button id="btn-glosario-palabras" onclick="window.app.setGlossaryView('palabras')" class="flex-1 py-1.5 px-3 rounded-lg bg-white text-slate-900 shadow-xs transition-all">
                📝 Palabras para el Estudiante (Sin Definición)
              </button>
              <button id="btn-glosario-definiciones" onclick="window.app.setGlossaryView('definiciones')" class="flex-1 py-1.5 px-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all">
                📘 Con Definiciones Completas
              </button>
            </div>

            <!-- Contenido Palabras (Sin Definiciones) -->
            <div id="glosario-view-palabras" class="space-y-2">
              <p class="text-xs text-slate-500 italic">
                Escribe estas 8 palabras oficiales en tu cuaderno para investigar o formular su significado en clase:
              </p>
              <ol class="space-y-1.5 text-xs font-bold text-slate-800 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 list-decimal list-inside">
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Huerto escolar</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Beneficio</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Beneficios económicos</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Beneficios nutritivos</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Beneficios comunitarios</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Comunidad educativa</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Nutrición</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Cooperación</li>
              </ol>
            </div>

            <!-- Contenido Con Definiciones (Mínimo 20 palabras por concepto) -->
            <div id="glosario-view-definiciones" class="space-y-2.5 hidden">
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-sky-900 block mb-0.5">1. Huerto escolar:</strong>
                <p class="text-slate-600">Espacio educativo dentro de la escuela destinado a cultivar plantas y producir alimentos frescos, donde los estudiantes aprenden técnicas agrícolas, cuidado ambiental y trabajo cooperativo.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-sky-900 block mb-0.5">2. Beneficio:</strong>
                <p class="text-slate-600">Ventaja, utilidad o aporte positivo que reciben las personas o la comunidad educativa al realizar con esfuerzo y dedicación una actividad productiva o de aprendizaje.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-sky-900 block mb-0.5">3. Beneficios económicos:</strong>
                <p class="text-slate-600">Aportes relacionados con el ahorro de dinero y el valor de los productos cultivados, disminuyendo la necesidad de comprarlos y enseñando el valor del trabajo agrícola.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-sky-900 block mb-0.5">4. Beneficios nutritivos:</strong>
                <p class="text-slate-600">Aportes relacionados con la obtención de alimentos sanos, variados y ricos en nutrientes producidos en la escuela, que favorecen el crecimiento adecuado y la salud integral.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-sky-900 block mb-0.5">5. Beneficios comunitarios:</strong>
                <p class="text-slate-600">Aportes positivos que unen y fortalecen a la escuela y las familias mediante el trabajo en equipo, la responsabilidad compartida y el cuidado mutuo de los espacios comunes.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-sky-900 block mb-0.5">6. Comunidad educativa:</strong>
                <p class="text-slate-600">Conjunto integrado por estudiantes, docentes, directivos, padres de familia y miembros de la comunidad que colaboran activamente para el desarrollo y bienestar del centro escolar.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-sky-900 block mb-0.5">7. Nutrición:</strong>
                <p class="text-slate-600">Proceso biológico indispensable mediante el cual nuestro organismo absorbe, transforma y aprovecha los nutrientes de los alimentos consumidos para obtener energía y mantenerse saludable.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-sky-900 block mb-0.5">8. Cooperación:</strong>
                <p class="text-slate-600">Acción solidaria y coordinada de trabajar juntos y apoyarse mutuamente entre compañeros con el propósito de alcanzar metas comunes en las labores del huerto escolar.</p>
              </div>
            </div>

            <!-- RÚBRICA OFICIAL VOCABULARIO ILUSTRADO -->
            <div class="space-y-2 pt-2 border-t border-slate-200">
              <h4 class="text-sm font-black text-slate-900">Rúbrica Oficial: Vocabulario Ilustrado</h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table class="w-full text-xs text-left border-collapse">
                  <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th class="p-2.5 w-16">Peso</th>
                      <th class="p-2.5">Criterio Oficial</th>
                      <th class="p-2.5 text-sky-900">5 - Excelente</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">30%</td>
                      <td class="p-2.5 font-bold text-slate-900">Definiciones</td>
                      <td class="p-2.5 text-slate-600">Precisas, completas (mínimo 20 palabras) y redactadas con sus propias palabras.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Cumplimiento en Clase</td>
                      <td class="p-2.5 text-slate-600">Trabajo realizado íntegramente durante la sesión de clase.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Ilustración</td>
                      <td class="p-2.5 text-slate-600">Cada término cuenta con ilustración creativa y pertinente.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">15%</td>
                      <td class="p-2.5 font-bold text-slate-900">Caligrafía y Orden</td>
                      <td class="p-2.5 text-slate-600">Letra impecable y términos ordenados alfabéticamente.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">15%</td>
                      <td class="p-2.5 font-bold text-slate-900">Ortografía</td>
                      <td class="p-2.5 text-slate-600">Sin errores ortográficos, de puntuación ni acentuación.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          `;
        } else {
          // GLOSARIO DE TÉRMINOS - 3ER GRADO (Lección 3.3.1: El huerto escolar, la salud y la nutrición)
          bodyHtml = `
            <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 text-indigo-950">
              <h4 class="text-sm font-black text-indigo-900 uppercase tracking-wide mb-1 flex items-center gap-2">
                <span>📖</span> Glosario de Términos Agrícolas (3.° Grado)
              </h4>
              <p class="text-xs leading-relaxed text-indigo-800">
                Vocabulario técnico curricular: <strong>El huerto escolar, la salud y la nutrición</strong>.
              </p>
            </div>

            <!-- Selector de Modo: Sin Definición vs Con Definición -->
            <div class="flex items-center justify-between bg-slate-100 p-1 rounded-xl text-xs font-bold">
              <button id="btn-glosario-palabras" onclick="window.app.setGlossaryView('palabras')" class="flex-1 py-1.5 px-3 rounded-lg bg-white text-slate-900 shadow-xs transition-all">
                📝 Palabras para el Estudiante (Sin Definición)
              </button>
              <button id="btn-glosario-definiciones" onclick="window.app.setGlossaryView('definiciones')" class="flex-1 py-1.5 px-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all">
                📘 Con Definiciones Completas
              </button>
            </div>

            <!-- Contenido Palabras (Sin Definiciones) -->
            <div id="glosario-view-palabras" class="space-y-2">
              <p class="text-xs text-slate-500 italic">
                Escribe estas 8 palabras oficiales en tu cuaderno para investigar o formular su significado en clase:
              </p>
              <ol class="space-y-1.5 text-xs font-bold text-slate-800 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 list-decimal list-inside">
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Huerto escolar</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Cultivo</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Alimento</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Nutrición</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Nutriente</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Valor nutricional</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Salud</li>
                <li class="p-1.5 bg-white rounded-lg border border-slate-200">Cosecha</li>
              </ol>
            </div>

            <!-- Contenido Con Definiciones -->
            <div id="glosario-view-definiciones" class="space-y-2.5 hidden">
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-emerald-800 block mb-0.5">1. Huerto escolar:</strong>
                <p class="text-slate-600">Espacio de la escuela donde sembramos y cuidamos plantas para aprender y cosechar alimentos nutritivos.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-emerald-800 block mb-0.5">2. Cultivo:</strong>
                <p class="text-slate-600">Planta sembrada y cuidada con cariño en la tierra para obtener frutos, hojas o semillas.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-emerald-800 block mb-0.5">3. Alimento:</strong>
                <p class="text-slate-600">Comida natural que consumimos diariamente para brindarle energía y nutrientes esenciales a todo nuestro cuerpo.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-emerald-800 block mb-0.5">4. Nutrición:</strong>
                <p class="text-slate-600">Proceso mediante el cual nuestro cuerpo utiliza los nutrientes de los alimentos para crecer sano.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-emerald-800 block mb-0.5">5. Nutriente:</strong>
                <p class="text-slate-600">Sustancia vital presente en los alimentos que el cuerpo aprovecha para funcionar, defenderse y desarrollarse.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-emerald-800 block mb-0.5">6. Valor nutricional:</strong>
                <p class="text-slate-600">Información sobre la cantidad de vitaminas, minerales y energía que cada alimento aporta al cuerpo.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-emerald-800 block mb-0.5">7. Salud:</strong>
                <p class="text-slate-600">Estado de completo bienestar físico y mental que nos permite jugar, estudiar y vivir felices.</p>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <strong class="text-emerald-800 block mb-0.5">8. Cosecha:</strong>
                <p class="text-slate-600">Recolección cuidadosa de los frutos y vegetales maduros producidos con esmero en nuestro huerto escolar.</p>
              </div>
            </div>

            <!-- RÚBRICA OFICIAL VOCABULARIO ILUSTRADO -->
            <div class="space-y-2 pt-2 border-t border-slate-200">
              <h4 class="text-sm font-black text-slate-900">Rúbrica Oficial: Vocabulario Ilustrado</h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table class="w-full text-xs text-left border-collapse">
                  <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th class="p-2.5 w-16">Peso</th>
                      <th class="p-2.5">Criterio Oficial</th>
                      <th class="p-2.5 text-emerald-800">5 - Excelente</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">30%</td>
                      <td class="p-2.5 font-bold text-slate-900">Definiciones</td>
                      <td class="p-2.5 text-slate-600">Precisas, completas y redactadas con sus propias palabras.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Cumplimiento en Clase</td>
                      <td class="p-2.5 text-slate-600">Trabajo realizado íntegramente durante la sesión de clase.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Ilustración</td>
                      <td class="p-2.5 text-slate-600">Cada término cuenta con ilustración creativa y pertinente.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">15%</td>
                      <td class="p-2.5 font-bold text-slate-900">Caligrafía y Orden</td>
                      <td class="p-2.5 text-slate-600">Letra impecable y términos ordenados alfabéticamente.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">15%</td>
                      <td class="p-2.5 font-bold text-slate-900">Ortografía</td>
                      <td class="p-2.5 text-slate-600">Sin errores ortográficos, de puntuación ni acentuación.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }
        footerHtml = `
          <button onclick="window.app.closeActivityModal()" class="w-full py-2.5 px-4 bg-slate-200 text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-300 transition-colors">
            Cerrar
          </button>
        `;
      } else if (isLeccion) {
        if (grade === '4') {
          // LECCIÓN 4.3.1, CONCEPTUAL Y MENTAL - 4TO GRADO
          bodyHtml = `
            <div class="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-sky-950">
              <h4 class="text-sm font-black text-sky-900 uppercase tracking-wide mb-1 flex items-center gap-2">
                <span>🌽</span> Lección 4.3.1: Beneficios e Importancia del Huerto Escolar
              </h4>
              <p class="text-xs leading-relaxed text-sky-800">
                Texto didáctico completo para el cuaderno, organizadores visuales y rúbricas oficiales de evaluación.
              </p>
            </div>

            <div class="space-y-3">
              <h4 class="text-sm font-black text-slate-900 border-b pb-1">1. Lección para el Cuaderno (Tablero)</h4>
              <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-3">
                <div>
                  <h5 class="text-sm font-black text-sky-950 mb-1 flex items-center gap-1.5">
                    <span>🌽</span> Beneficios e importancia del huerto escolar
                  </h5>
                  <p class="leading-relaxed">
                    El <strong>huerto escolar</strong> es un espacio educativo donde cultivamos plantas que pueden producir alimentos y donde aprendemos sobre agricultura y naturaleza.
                  </p>
                  <p class="mt-2 leading-relaxed">
                    El huerto proporciona diferentes beneficios:
                  </p>
                </div>

                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                  <strong class="text-amber-900 font-bold block">1. Beneficios económicos:</strong>
                  <p class="text-slate-600 leading-relaxed">
                    Los beneficios económicos se relacionan con el <strong>valor y ahorro</strong> que puede representar producir algunos alimentos. Por ejemplo, si cultivamos determinados productos podemos disminuir la necesidad de comprarlos y comprender el valor del trabajo agrícola.
                  </p>
                </div>

                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                  <strong class="text-emerald-900 font-bold block">2. Beneficios nutritivos:</strong>
                  <p class="text-slate-600 leading-relaxed">
                    Los beneficios nutritivos se relacionan con los alimentos que podemos producir en el huerto. Estos alimentos pueden formar parte de una <strong>alimentación variada</strong> y nos permiten aprender sobre nutrición.
                  </p>
                </div>

                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                  <strong class="text-indigo-900 font-bold block">3. Beneficios comunitarios:</strong>
                  <p class="text-slate-600 leading-relaxed">
                    El huerto beneficia a la comunidad educativa porque:
                  </p>
                  <ul class="list-disc list-inside space-y-1 text-slate-600 pl-1">
                    <li>Promueve el trabajo en equipo.</li>
                    <li>Permite compartir responsabilidades.</li>
                    <li>Sirve como espacio para aprender.</li>
                    <li>Favorece el cuidado de la escuela y la naturaleza.</li>
                  </ul>
                </div>

                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                  <strong class="text-blue-900 font-bold block">Importancia del huerto escolar:</strong>
                  <p class="text-slate-600 leading-relaxed">
                    El huerto escolar es importante porque nos ayuda a:
                  </p>
                  <ul class="list-disc list-inside space-y-1 text-slate-600 pl-1">
                    <li>Aprender agricultura.</li>
                    <li>Producir alimentos.</li>
                    <li>Comprender la nutrición.</li>
                    <li>Trabajar cooperativamente.</li>
                    <li>Cuidar las plantas y el ambiente.</li>
                    <li>Valorar el esfuerzo necesario para producir alimentos.</li>
                  </ul>
                </div>

                <div class="p-3 bg-sky-100/70 border border-sky-300 rounded-xl text-sky-950 font-bold">
                  <span class="block text-[11px] uppercase tracking-wider text-sky-800 font-black mb-0.5">🌱 Idea principal:</span>
                  El huerto escolar proporciona beneficios económicos, nutritivos y comunitarios y es un espacio importante para aprender, producir alimentos y trabajar en equipo.
                </div>

                <!-- Requisito de Ilustración en el Cuaderno -->
                <div class="p-3 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-950 font-semibold space-y-1">
                  <span class="font-bold flex items-center gap-1.5 text-amber-900">
                    <span>🖼️</span> Ilustración Obligatoria en el Cuaderno:
                  </span>
                  <p>
                    Al copiar esta lección en el cuaderno, se debe ilustrar obligatoriamente con recortes, figuras o dibujos coloreados alusivos a los tres beneficios del huerto (ahorro económico, alimentación nutritiva y trabajo cooperativo).
                  </p>
                </div>
              </div>

              <!-- Metodología de Elaboración de los Mapas -->
              <h4 class="text-sm font-black text-slate-900 border-b pb-1">2. Metodología de Elaboración de los Mapas (Tarjetitas y Montaje)</h4>
              <div class="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-200 text-xs text-indigo-950 space-y-2">
                <p class="font-bold text-indigo-900">
                  Instrucciones para elaborar el Mapa Conceptual y el Mapa Mental:
                </p>
                <div class="space-y-1.5 pl-1">
                  <p>
                    <strong>• 1. Confección de tarjetitas:</strong> Recortar pequeñas tarjetas en papel (blanco o de colores) y escribir a mano en cada una de ellas las distintas partes que componen el mapa: el título principal (<em>"HUERTO ESCOLAR"</em>), los bloques principales (<em>"Beneficios"</em>, <em>"Importancia"</em>), las categorías (<em>"Económicos"</em>, <em>"Nutritivos"</em>, <em>"Comunitarios"</em>) y cada uno de los conceptos secundarios y ramificaciones.
                  </p>
                  <p>
                    <strong>• 2. Armado sobre página blanca:</strong> Ordenar y pegar las tarjetitas sobre una <strong>página blanca limpia</strong>, siguiendo la estructura y organización espacial del mapa borrador que el maestro dibujó y explicó en el tablero durante la clase.
                  </p>
                  <p>
                    <strong>• 3. Trazado y colores jerárquicos:</strong> Trazar las líneas o flechas de enlace y aplicar colores distintos para cada nivel jerárquico del esquema.
                  </p>
                  <p>
                    <strong>• 4. Pegado final en el cuaderno:</strong> Una vez terminado el mapa en la página blanca, pegar esa página completa de forma ordenada y limpia en el cuaderno sobre el mapa borrador de clase.
                  </p>
                </div>
              </div>

              <h4 class="text-sm font-black text-slate-900 border-b pb-1">3. Rúbrica Oficial: Lección Escrita y Montaje</h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table class="w-full text-xs text-left border-collapse">
                  <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th class="p-2.5 w-16">Peso</th>
                      <th class="p-2.5">Criterio Oficial</th>
                      <th class="p-2.5 text-sky-800">5 - Excelente</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">30%</td>
                      <td class="p-2.5 font-bold text-slate-900">Calidad del Contenido Copiado</td>
                      <td class="p-2.5 text-slate-600">Transcribe toda la lección de forma impecable, sin errores y letra clara.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">30%</td>
                      <td class="p-2.5 font-bold text-slate-900">Creatividad y Precisión</td>
                      <td class="p-2.5 text-slate-600">Figuras originales, de alta precisión y totalmente integradas al tema.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Orden y Limpieza</td>
                      <td class="p-2.5 text-slate-600">Montaje impecable, perfectamente alineado y sin rastro de pegamento.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Cumplimiento de Tareas</td>
                      <td class="p-2.5 text-slate-600">Realiza todas las fases del proceso de forma ejemplar y puntual.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 class="text-sm font-black text-slate-900 border-b pb-1">4. Rúbrica Oficial: Mapa Conceptual</h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table class="w-full text-xs text-left border-collapse">
                  <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th class="p-2.5 w-16">Peso</th>
                      <th class="p-2.5">Criterio Oficial</th>
                      <th class="p-2.5 text-sky-800">5 - Excelente</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">40%</td>
                      <td class="p-2.5 font-bold text-slate-900">Precisión del Contenido</td>
                      <td class="p-2.5 text-slate-600">Conceptos precisos y ubicados exactamente según el diagrama.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Uso de Colores Jerárquicos</td>
                      <td class="p-2.5 text-slate-600">Colores distintos y consistentes para cada nivel jerárquico.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Organización Espacial</td>
                      <td class="p-2.5 text-slate-600">Distribución lógica, equilibrada y perfectamente ordenada.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Presentación y Limpieza</td>
                      <td class="p-2.5 text-slate-600">Presentación impecable, pegado perfecto sin residuos.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- ORGANIZADORES GRÁFICOS OFICIALES DE CUARTO GRADO -->
              <h4 class="text-sm font-black text-slate-900 border-b pb-1">5. Organizadores Gráficos (4.° Grado)</h4>
              <div class="flex items-center justify-between bg-slate-100 p-1 rounded-xl text-xs font-bold mb-2">
                <button id="btn-org-conceptual" onclick="window.app.setOrganizerView('conceptual')" class="flex-1 py-1.5 px-3 rounded-lg bg-white text-slate-900 shadow-xs transition-all">
                  🗺️ Mapa Conceptual
                </button>
                <button id="btn-org-mental" onclick="window.app.setOrganizerView('mental')" class="flex-1 py-1.5 px-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all">
                  🧠 Mapa Mental
                </button>
              </div>

              <!-- Vista 1: Mapa Conceptual de 4to Grado -->
              <div id="org-view-conceptual" class="space-y-2">
                <div class="p-4 bg-sky-50/60 rounded-2xl border border-sky-200 text-xs space-y-3">
                  <div class="text-center font-bold text-slate-900">
                    <span class="inline-block px-4 py-1.5 bg-sky-800 text-white rounded-xl shadow-xs text-xs font-black">🌽 HUERTO ESCOLAR</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                    <div class="p-3 bg-white rounded-xl border border-sky-300 shadow-2xs space-y-2">
                      <div class="text-center font-black text-sky-900 border-b border-sky-100 pb-1">🌟 1. BENEFICIOS</div>
                      <div class="grid grid-cols-3 gap-1.5 text-center">
                        <div class="p-1.5 bg-amber-50 rounded-lg border border-amber-200">
                          <strong class="text-amber-900 block font-bold text-[10px]">💰 Económicos</strong>
                          <span class="text-slate-600 block text-[9px] mt-0.5">• Ahorro</span>
                          <span class="text-slate-600 block text-[9px]">• Valor prod.</span>
                        </div>
                        <div class="p-1.5 bg-emerald-50 rounded-lg border border-emerald-200">
                          <strong class="text-emerald-900 block font-bold text-[10px]">🥗 Nutritivos</strong>
                          <span class="text-slate-600 block text-[9px] mt-0.5">• Alimentos</span>
                          <span class="text-slate-600 block text-[9px]">• Nutrición</span>
                        </div>
                        <div class="p-1.5 bg-indigo-50 rounded-lg border border-indigo-200">
                          <strong class="text-indigo-900 block font-bold text-[10px]">👥 Comunitarios</strong>
                          <span class="text-slate-600 block text-[9px] mt-0.5">• Equipo</span>
                          <span class="text-slate-600 block text-[9px]">• Aprendizaje</span>
                          <span class="text-slate-600 block text-[9px]">• Responsab.</span>
                        </div>
                      </div>
                    </div>

                    <div class="p-3 bg-white rounded-xl border border-blue-300 shadow-2xs space-y-2">
                      <div class="text-center font-black text-blue-900 border-b border-blue-100 pb-1">🎯 2. IMPORTANCIA</div>
                      <div class="grid grid-cols-3 gap-1.5 text-center">
                        <div class="p-1.5 bg-slate-50 rounded-lg border border-slate-200">
                          <strong class="text-slate-800 block font-bold text-[10px]">🌱 Cultivar</strong>
                          <span class="text-slate-600 block text-[9px] mt-0.5">Producción</span>
                        </div>
                        <div class="p-1.5 bg-slate-50 rounded-lg border border-slate-200">
                          <strong class="text-slate-800 block font-bold text-[10px]">📚 Aprender</strong>
                          <span class="text-slate-600 block text-[9px] mt-0.5">Agricultura</span>
                        </div>
                        <div class="p-1.5 bg-slate-50 rounded-lg border border-slate-200">
                          <strong class="text-slate-800 block font-bold text-[10px]">🌿 Cuidar</strong>
                          <span class="text-slate-600 block text-[9px] mt-0.5">Naturaleza</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-[11px] text-center text-slate-500">
                    Estructura conceptual oficial: 3 tipos de beneficios + 3 ejes de importancia educativa.
                  </p>
                </div>
              </div>

              <!-- Vista 2: Mapa Mental de 4to Grado (Lluvia de Ideas) -->
              <div id="org-view-mental" class="space-y-2 hidden">
                <div class="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-200 text-xs space-y-3">
                  <div class="text-center font-bold text-slate-900">
                    <span class="inline-block px-4 py-1.5 bg-indigo-900 text-white rounded-full text-xs shadow-xs font-black">🌱 Beneficios del Huerto (Lluvia de Ideas)</span>
                  </div>
                  <p class="text-[11px] text-center text-indigo-900 font-semibold italic">
                    ¿Qué obtenemos de un huerto escolar además de alimentos?
                  </p>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                    <div class="p-2.5 bg-white rounded-xl border border-amber-300 shadow-2xs">
                      <strong class="text-amber-900 block font-bold mb-1">💰 Económicos</strong>
                      <span class="text-slate-700 block font-semibold">• Ahorro familiar</span>
                      <span class="text-slate-700 block font-semibold">• Valor de productos</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-emerald-300 shadow-2xs">
                      <strong class="text-emerald-900 block font-bold mb-1">🥗 Nutritivos</strong>
                      <span class="text-slate-700 block font-semibold">• Alimentos frescos</span>
                      <span class="text-slate-700 block font-semibold">• Nutrición variada</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-indigo-300 shadow-2xs">
                      <strong class="text-indigo-900 block font-bold mb-1">👥 Comunitarios</strong>
                      <span class="text-slate-700 block font-semibold">• Cooperación</span>
                      <span class="text-slate-700 block font-semibold">• Aprendizaje mutuo</span>
                      <span class="text-slate-700 block font-semibold">• Responsabilidad</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-purple-300 shadow-2xs">
                      <strong class="text-purple-900 block font-bold mb-1">🌿 Ambientales</strong>
                      <span class="text-slate-700 block font-semibold">• Cuidado de plantas</span>
                      <span class="text-slate-700 block font-semibold">• Trabajo cooperativo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          `;
        } else {
          // LECCIÓN, CONCEPTUAL Y MENTAL - LECCIÓN DE 3ER GRADO
          bodyHtml = `
            <div class="bg-purple-50 border border-purple-200 rounded-2xl p-4 text-purple-950">
              <h4 class="text-sm font-black text-purple-900 uppercase tracking-wide mb-1 flex items-center gap-2">
                <span>🌽</span> Lección: El Huerto Escolar, Salud y Nutrición
              </h4>
              <p class="text-xs leading-relaxed text-purple-800">
                Texto didáctico completo para el cuaderno, organizadores visuales y rúbricas oficiales de evaluación.
              </p>
            </div>

            <div class="space-y-3">
              <h4 class="text-sm font-black text-slate-900 border-b pb-1">1. Lección para el Cuaderno (Tablero)</h4>
              <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-3">
                <div>
                  <h5 class="text-sm font-black text-emerald-950 mb-1 flex items-center gap-1.5">
                    <span>🌽</span> El huerto escolar, la salud y la nutrición
                  </h5>
                  <p class="leading-relaxed">
                    El <strong>huerto escolar</strong> es un espacio donde cultivamos plantas que pueden producir alimentos. También es un lugar donde aprendemos sobre agricultura y el cuidado de la naturaleza.
                  </p>
                  <p class="mt-2 leading-relaxed">
                    En el huerto podemos cultivar plantas como <strong>maíz, frijol, tomate, pepino, ají, culantro y otras especies</strong>.
                  </p>
                </div>

                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                  <strong class="text-emerald-900 font-bold block">Importancia del huerto escolar:</strong>
                  <p class="text-slate-600">El huerto escolar es importante porque:</p>
                  <ul class="list-disc list-inside space-y-1 text-slate-600 pl-1">
                    <li>Nos permite aprender a producir alimentos.</li>
                    <li>Nos enseña a cuidar las plantas.</li>
                    <li>Nos ayuda a conocer de dónde vienen algunos alimentos.</li>
                    <li>Promueve el trabajo en equipo.</li>
                    <li>Favorece el cuidado del ambiente.</li>
                  </ul>
                </div>

                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                  <strong class="text-blue-900 font-bold block">Salud y nutrición:</strong>
                  <p class="text-slate-600 leading-relaxed">
                    La <strong>salud</strong> es el bienestar de nuestro cuerpo y está relacionada con buenos hábitos, entre ellos una alimentación adecuada.
                  </p>
                  <p class="text-slate-600 leading-relaxed">
                    La <strong>nutrición</strong> es la manera en que nuestro cuerpo obtiene y utiliza los nutrientes de los alimentos.
                  </p>
                  <p class="text-slate-600 leading-relaxed">
                    El <strong>valor nutricional</strong> indica qué nutrientes y energía aporta un alimento.
                  </p>
                  <p class="text-slate-600 leading-relaxed">
                    Por eso es importante consumir alimentos variados y aprender a reconocer los productos que podemos obtener de las plantas.
                  </p>
                </div>

                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong class="text-purple-900 font-bold block">Del huerto a nuestra alimentación:</strong>
                  <div class="p-2.5 bg-amber-50 rounded-lg border border-amber-200 font-bold text-amber-900 text-center">
                    Planta • Alimento • Nutrientes • Cuerpo
                  </div>
                </div>

                <div class="p-3 bg-emerald-100/70 border border-emerald-300 rounded-xl text-emerald-950 font-bold">
                  <span class="block text-[11px] uppercase tracking-wider text-emerald-800 font-black mb-0.5">🌱 Idea principal:</span>
                  El huerto escolar nos ayuda a aprender cómo se producen alimentos y a comprender su importancia para la alimentación, la nutrición y la salud.
                </div>

                <!-- Requisito de Ilustración en el Cuaderno -->
                <div class="p-3 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-950 font-semibold space-y-1">
                  <span class="font-bold flex items-center gap-1.5 text-amber-900">
                    <span>🖼️</span> Ilustración Obligatoria en el Cuaderno:
                  </span>
                  <p>
                    Al copiar esta lección en el cuaderno, se debe ilustrar obligatoriamente con recortes, figuras o dibujos coloreados alusivos al contenido (el huerto escolar, plantas cultivadas, hortalizas, siembra, salud y nutrición).
                  </p>
                </div>
              </div>

              <!-- Metodología de Elaboración de los Mapas -->
              <h4 class="text-sm font-black text-slate-900 border-b pb-1">2. Metodología de Elaboración de los Mapas (Tarjetitas y Montaje)</h4>
              <div class="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-200 text-xs text-indigo-950 space-y-2">
                <p class="font-bold text-indigo-900">
                  Instrucciones para elaborar el Mapa Conceptual y el Mapa Mental:
                </p>
                <div class="space-y-1.5 pl-1">
                  <p>
                    <strong>• 1. Confección de tarjetitas:</strong> Recortar pequeñas tarjetas en papel (blanco o de colores) y escribir a mano en cada una de ellas las distintas partes que componen el mapa: el título principal (ej. <em>"HUERTO ESCOLAR"</em>), los conectores o enlaces (<em>"Produce"</em>, <em>"Permite aprender"</em>, <em>"Promueve"</em>, <em>"Se relaciona con"</em>) y cada uno de los conceptos secundarios y ramificaciones.
                  </p>
                  <p>
                    <strong>• 2. Armado sobre página blanca:</strong> Ordenar y pegar las tarjetitas sobre una <strong>página blanca limpia</strong>, siguiendo la estructura y organización espacial del mapa borrador que el maestro dibujó y explicó en el tablero durante la clase.
                  </p>
                  <p>
                    <strong>• 3. Trazado y colores jerárquicos:</strong> Trazar las líneas o flechas de enlace y aplicar colores distintos para cada nivel jerárquico del esquema.
                  </p>
                  <p>
                    <strong>• 4. Pegado final en el cuaderno:</strong> Una vez terminado el mapa en la página blanca, pegar esa página completa de forma ordenada y limpia en el cuaderno sobre el mapa borrador de clase.
                  </p>
                </div>
              </div>

              <h4 class="text-sm font-black text-slate-900 border-b pb-1">3. Rúbrica Oficial: Lección Escrita y Montaje</h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table class="w-full text-xs text-left border-collapse">
                  <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th class="p-2.5 w-16">Peso</th>
                      <th class="p-2.5">Criterio Oficial</th>
                      <th class="p-2.5 text-emerald-800">5 - Excelente</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">30%</td>
                      <td class="p-2.5 font-bold text-slate-900">Calidad del Contenido Copiado</td>
                      <td class="p-2.5 text-slate-600">Transcribe toda la lección de forma impecable, sin errores y letra clara.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">30%</td>
                      <td class="p-2.5 font-bold text-slate-900">Creatividad y Precisión</td>
                      <td class="p-2.5 text-slate-600">Figuras originales, de alta precisión y totalmente integradas al tema.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Orden y Limpieza</td>
                      <td class="p-2.5 text-slate-600">Montaje impecable, perfectamente alineado y sin rastro de pegamento.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Cumplimiento de Tareas</td>
                      <td class="p-2.5 text-slate-600">Realiza todas las fases del proceso de forma ejemplar y puntual.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 class="text-sm font-black text-slate-900 border-b pb-1">4. Rúbrica Oficial: Mapa Conceptual</h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table class="w-full text-xs text-left border-collapse">
                  <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th class="p-2.5 w-16">Peso</th>
                      <th class="p-2.5">Criterio Oficial</th>
                      <th class="p-2.5 text-emerald-800">5 - Excelente</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">40%</td>
                      <td class="p-2.5 font-bold text-slate-900">Precisión del Contenido</td>
                      <td class="p-2.5 text-slate-600">Conceptos precisos y ubicados exactamente según el diagrama.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Uso de Colores Jerárquicos</td>
                      <td class="p-2.5 text-slate-600">Colores distintos y consistentes para cada nivel jerárquico.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Organización Espacial</td>
                      <td class="p-2.5 text-slate-600">Distribución lógica, equilibrada y perfectamente ordenada.</td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-slate-600">20%</td>
                      <td class="p-2.5 font-bold text-slate-900">Presentación y Limpieza</td>
                      <td class="p-2.5 text-slate-600">Presentación impecable, pegado perfecto sin residuos.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- ORGANIZADORES GRÁFICOS OFICIALES DE TERCER GRADO -->
              <h4 class="text-sm font-black text-slate-900 border-b pb-1">5. Organizadores Gráficos (3.° Grado)</h4>
              <div class="flex items-center justify-between bg-slate-100 p-1 rounded-xl text-xs font-bold mb-2">
                <button id="btn-org-conceptual" onclick="window.app.setOrganizerView('conceptual')" class="flex-1 py-1.5 px-3 rounded-lg bg-white text-slate-900 shadow-xs transition-all">
                  🗺️ Mapa Conceptual
                </button>
                <button id="btn-org-mental" onclick="window.app.setOrganizerView('mental')" class="flex-1 py-1.5 px-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all">
                  🧠 Mapa Mental
                </button>
              </div>

              <!-- Vista 1: Mapa Conceptual de 3er Grado -->
              <div id="org-view-conceptual" class="space-y-2">
                <div class="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 text-xs space-y-3">
                  <div class="text-center font-bold text-slate-900">
                    <span class="inline-block px-4 py-1.5 bg-emerald-800 text-white rounded-xl shadow-xs text-xs font-black">🌽 HUERTO ESCOLAR</span>
                  </div>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                    <div class="p-2.5 bg-white rounded-xl border border-emerald-300 shadow-2xs text-center space-y-1">
                      <strong class="text-emerald-900 block font-bold">🌱 Produce</strong>
                      <span class="text-slate-700 block font-semibold">Alimentos</span>
                      <span class="text-amber-800 font-bold block bg-amber-50 rounded px-1 py-0.5">Nutrientes</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-blue-300 shadow-2xs text-center space-y-1">
                      <strong class="text-blue-900 block font-bold">📚 Permite aprender</strong>
                      <span class="text-slate-600 block">• Agricultura</span>
                      <span class="text-slate-600 block">• Plantas</span>
                      <span class="text-slate-600 block">• Ambiente</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-purple-300 shadow-2xs text-center space-y-1">
                      <strong class="text-purple-900 block font-bold">🤝 Promueve</strong>
                      <span class="text-slate-600 block">• Responsabilidad</span>
                      <span class="text-slate-600 block">• Trabajo en equipo</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-rose-300 shadow-2xs text-center space-y-1">
                      <strong class="text-rose-900 block font-bold">❤️ Se relaciona con</strong>
                      <span class="text-slate-600 block">• Salud</span>
                      <span class="text-slate-600 block">• Nutrición</span>
                    </div>
                  </div>
                  <p class="text-[11px] text-center text-slate-500">
                    Conexión directa: Alimentos aportan nutrientes que benefician la salud y la nutrición.
                  </p>
                </div>
              </div>

              <!-- Vista 2: Mapa Mental de 3er Grado -->
              <div id="org-view-mental" class="space-y-2 hidden">
                <div class="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-200 text-xs space-y-3">
                  <div class="text-center font-bold text-slate-900">
                    <span class="inline-block px-4 py-1.5 bg-indigo-800 text-white rounded-full text-xs shadow-xs font-black">🌽 Huerto Escolar (Lluvia de Ideas)</span>
                  </div>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                    <div class="p-2.5 bg-white rounded-xl border border-emerald-300 shadow-2xs">
                      <strong class="text-emerald-900 block font-bold mb-1">🌽 Cultivos</strong>
                      <span class="text-slate-700 block font-semibold">• Maíz</span>
                      <span class="text-slate-700 block font-semibold">• Tomate</span>
                      <span class="text-slate-700 block font-semibold">• Pepino</span>
                      <span class="text-slate-700 block font-semibold">• Frijol</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-blue-300 shadow-2xs">
                      <strong class="text-blue-900 block font-bold mb-1">📖 Aprendizaje</strong>
                      <span class="text-slate-700 block font-semibold">• Siembra</span>
                      <span class="text-slate-700 block font-semibold">• Cuidado</span>
                      <span class="text-slate-700 block font-semibold">• Cosecha</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-amber-300 shadow-2xs">
                      <strong class="text-amber-900 block font-bold mb-1">🍽️ Alimentación</strong>
                      <span class="text-slate-700 block font-semibold">• Alimentos</span>
                      <span class="text-slate-700 block font-semibold">• Nutrientes</span>
                      <span class="text-slate-700 block font-semibold">• Salud</span>
                    </div>
                    <div class="p-2.5 bg-white rounded-xl border border-purple-300 shadow-2xs">
                      <strong class="text-purple-900 block font-bold mb-1">🤝 Valores</strong>
                      <span class="text-slate-700 block font-semibold">• Responsabilidad</span>
                      <span class="text-slate-700 block font-semibold">• Cooperación</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          `;
        }

        const mapConceptualUrl = grade === '3' ? 'recursos/tercero-mapa-conceptual.html'
                               : grade === '4' ? 'recursos/cuarto-mapa-conceptual.html'
                               : 'recursos/metodos-mapa-conceptual.html';
        const mapMentalUrl = grade === '3' ? 'recursos/tercero-mapa-mental.html'
                           : grade === '4' ? 'recursos/cuarto-mapa-mental.html'
                           : 'recursos/metodos-mapa-mental.html';

        const btnClass = grade === '4' ? 'bg-sky-700 hover:bg-sky-800' : 'bg-emerald-700 hover:bg-emerald-800';

        footerHtml = `
          <div class="flex flex-col sm:flex-row gap-2 w-full">
            <a href="${mapConceptualUrl}" target="_blank" class="flex-1 py-2.5 px-3 ${btnClass} text-white rounded-xl text-xs font-bold text-center transition-colors">
              🗺️ Ver Mapa Conceptual Completo
            </a>
            <a href="${mapMentalUrl}" target="_blank" class="flex-1 py-2.5 px-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl text-xs font-bold text-center transition-colors">
              🧠 Ver Mapa Mental Completo
            </a>
            <button onclick="window.app.closeActivityModal()" class="py-2.5 px-3 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors">
              Cerrar
            </button>
          </div>
        `;
      } else if (isPrueba) {
        // PRUEBA EVALUATIVA
        const targetPage = grade === '3' ? 'pruebas/tercer_grado.html'
                         : grade === '4' ? 'pruebas/cuarto_grado.html'
                         : grade === '5' ? 'pruebas/quinto_grado.html'
                         : 'pruebas/sexto_grado.html';
        const leccionDesc = grade === '4' ? 'Lección 4.3.1: Beneficios e importancia del huerto escolar'
                          : 'Lección 3.3.1: El huerto escolar, la salud y la nutrición';

        bodyHtml = `
          <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-rose-950">
            <div class="flex items-center justify-between mb-1">
              <h4 class="text-sm font-black text-rose-900 uppercase tracking-wide flex items-center gap-2">
                <span>📝</span> Prueba Sumativa de Agricultura
              </h4>
              <span class="text-xs font-black bg-rose-200 text-rose-900 px-2 py-0.5 rounded-full">
                19 Puntos
              </span>
            </div>
            <p class="text-xs leading-relaxed text-rose-800">
              Evaluación formativa y sumativa oficial vinculada con la ${leccionDesc} del Programa de Agricultura.
            </p>
          </div>

          <div class="space-y-3">
            <div class="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900">
              <span class="font-bold block mb-0.5">📌 Oportunidad para Estudiantes Ausentes:</span>
              Los alumnos que no asistieron a clase pueden realizar su prueba desde cualquier teléfono, tableta o computadora accediendo con su nombre.
            </div>

            <h4 class="text-sm font-black text-slate-900 border-b pb-1">Vista Previa de la Estructura del Examen</h4>
            <div class="space-y-2 text-xs">
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div class="flex justify-between items-center mb-1">
                  <strong class="text-slate-900">Parte A: Completa con Banco de Palabras</strong>
                  <span class="font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">5 Puntos</span>
                </div>
                <p class="text-slate-600">Palabras clave: <em>huerto, nutrición, nutrientes, germinación, cosecha</em>. Oraciones guiadas sobre el espacio del huerto y etapas del cultivo.</p>
              </div>

              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div class="flex justify-between items-center mb-1">
                  <strong class="text-slate-900">Parte B: Selección Múltiple Ilustrada</strong>
                  <span class="font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">5 Puntos</span>
                </div>
                <p class="text-slate-600">Reactivos con opciones gráficas sobre la utilidad del huerto, características del tomate, herramientas y métodos.</p>
              </div>

              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div class="flex justify-between items-center mb-1">
                  <strong class="text-slate-900">Parte C: Métodos y Prácticas Agrícolas</strong>
                  <span class="font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">9 Puntos</span>
                </div>
                <p class="text-slate-600">Diferenciación entre prácticas tradicionales y modernas, cuidado de los recursos y medidas de seguridad.</p>
              </div>
            </div>
          </div>
        `;
        footerHtml = `
          <div class="flex items-center gap-2 w-full">
            <a href="${targetPage}" target="_blank" class="flex-1 py-3 px-4 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white rounded-xl text-xs font-black text-center shadow-md transition-all flex items-center justify-center gap-2">
              <span>✍️</span> Acceder a Realizar la Prueba Online
            </a>
            <button onclick="window.app.closeActivityModal()" class="py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors">
              Cerrar
            </button>
          </div>
        `;
      } else {
        // LABORES DE CAMPO Y LIMPIEZA - RÚBRICA OFICIAL: TRABAJO EN CAMPO
        const esMantenimiento = nom.includes('mantenimiento') || nom.includes('huerto') || act.numero === 5;
        const tituloCampo = act.nombre || (esMantenimiento ? 'Mantenimiento del Huerto Escolar' : 'Limpieza y Preparación de Era');
        bodyHtml = `
          <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-950">
            <h4 class="text-sm font-black text-emerald-900 uppercase tracking-wide mb-1 flex items-center gap-2">
              <span>🌱</span> ${tituloCampo}
            </h4>
            <p class="text-xs leading-relaxed text-emerald-800">
              Labor técnica formativa y práctica de campo realizada en el terreno escolar del C.E.B.G. Cerro Tigre.
            </p>
          </div>

          <div class="space-y-3">
            <h4 class="text-sm font-black text-slate-900 border-b pb-1">1. Objetivos de la Labor Práctica</h4>
            <ul class="text-xs text-slate-700 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200 list-disc list-inside">
              ${esMantenimiento ? `
                <li>Deshierbe manual alrededor de las plantas cultivadas sin lastimar las raíces.</li>
                <li>Aporque: arrimar tierra fértil a la base del tallo para fortalecer las raíces.</li>
                <li>Riego oportuno y dosificado para mantener la humedad adecuada del bancal.</li>
                <li>Inspección fitosanitaria para detectar daños de insectos o malezas.</li>
              ` : `
                <li>Delimitar y limpiar el área del cantero o era de cultivo.</li>
                <li>Retirar piedras, plásticos y malezas que compiten por nutrientes.</li>
                <li>Remover y airear la capa superficial del suelo.</li>
                <li>Nivelar con rastrillo y preparar el lecho de siembra.</li>
              `}
            </ul>

            <h4 class="text-sm font-black text-slate-900 border-b pb-1">2. Rúbrica Oficial: Trabajo en Campo</h4>
            <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table class="w-full text-xs text-left border-collapse">
                <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-2.5 w-16">Peso</th>
                    <th class="p-2.5">Criterio Oficial</th>
                    <th class="p-2.5 text-emerald-800">5 - Excelente</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">25%</td>
                    <td class="p-2.5 font-bold text-slate-900">Uso de Herramientas y Seguridad</td>
                    <td class="p-2.5 text-slate-600">Selecciona y emplea correctamente todas las herramientas. Uso de EPP en todo momento.</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">25%</td>
                    <td class="p-2.5 font-bold text-slate-900">Ejecución Técnica</td>
                    <td class="p-2.5 text-slate-600">Protocolos técnicos estrictos y de precisión en el terreno.</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">20%</td>
                    <td class="p-2.5 font-bold text-slate-900">Sostenibilidad y Cuidado</td>
                    <td class="p-2.5 text-slate-600">Respeto excepcional, optimización de recursos y manejo de residuos.</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">15%</td>
                    <td class="p-2.5 font-bold text-slate-900">Registro y Observación</td>
                    <td class="p-2.5 text-slate-600">Diario detallado, datos precisos, esquemas y seguimiento.</td>
                  </tr>
                  <tr>
                    <td class="p-2.5 font-bold text-slate-600">15%</td>
                    <td class="p-2.5 font-bold text-slate-900">Actitud y Trabajo en Equipo</td>
                    <td class="p-2.5 text-slate-600">Liderazgo, proactividad excepcional y colaboración con sus compañeros.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="p-2 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-bold text-center">
              Puntaje Total: 100% = Calificación 5.0 (Excelente)
            </div>
          </div>
        `;
        footerHtml = `
          <button onclick="window.app.closeActivityModal()" class="w-full py-2.5 px-4 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors">
            Cerrar
          </button>
        `;
      }

      modalBody.innerHTML = bodyHtml;
      modalFooter.innerHTML = footerHtml;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    closeActivityModal() {
      const modal = document.getElementById('activity-modal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    setGlossaryView(mode) {
      const btnPalabras = document.getElementById('btn-glosario-palabras');
      const btnDefiniciones = document.getElementById('btn-glosario-definiciones');
      const viewPalabras = document.getElementById('glosario-view-palabras');
      const viewDefiniciones = document.getElementById('glosario-view-definiciones');

      if (mode === 'palabras') {
        btnPalabras.className = 'flex-1 py-1.5 px-3 rounded-lg bg-white text-slate-900 shadow-xs transition-all';
        btnDefiniciones.className = 'flex-1 py-1.5 px-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all';
        viewPalabras.classList.remove('hidden');
        viewDefiniciones.classList.add('hidden');
      } else {
        btnDefiniciones.className = 'flex-1 py-1.5 px-3 rounded-lg bg-white text-slate-900 shadow-xs transition-all';
        btnPalabras.className = 'flex-1 py-1.5 px-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all';
        viewDefiniciones.classList.remove('hidden');
        viewPalabras.classList.add('hidden');
      }
    }

    setOrganizerView(view) {
      const btnConceptual = document.getElementById('btn-org-conceptual');
      const btnMental = document.getElementById('btn-org-mental');
      const viewConceptual = document.getElementById('org-view-conceptual');
      const viewMental = document.getElementById('org-view-mental');

      if (!btnConceptual || !btnMental || !viewConceptual || !viewMental) return;

      if (view === 'conceptual') {
        btnConceptual.className = 'flex-1 py-1.5 px-3 rounded-lg bg-white text-slate-900 shadow-xs transition-all';
        btnMental.className = 'flex-1 py-1.5 px-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all';
        viewConceptual.classList.remove('hidden');
        viewMental.classList.add('hidden');
      } else {
        btnMental.className = 'flex-1 py-1.5 px-3 rounded-lg bg-white text-slate-900 shadow-xs transition-all';
        btnConceptual.className = 'flex-1 py-1.5 px-3 rounded-lg text-slate-600 hover:text-slate-900 transition-all';
        viewMental.classList.remove('hidden');
        viewConceptual.classList.add('hidden');
      }
    }
  }

  window.app = new App();
  document.addEventListener('DOMContentLoaded', () => {
    window.app.init();
  });
})();
