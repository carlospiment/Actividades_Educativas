---
name: sincronizar-actividades
description: Sincroniza en tiempo real o bajo demanda las actividades, horarios y notas entre la Libreta de Calificaciones oficial y el Portal Web de Actividades de Agricultura MEDUCA.
---

# Sincronización de Actividades MEDUCA

Esta habilidad permite ejecutar y auditar el flujo de sincronización automática y manual entre el Agente de Libreta de Calificaciones y el Portal Web de Actividades Curriculares.

## Flujos de Trabajo

### 1. Monitor Automático en Segundo Plano (Recomendado)
Para mantener la web actualizada en tiempo real ante cualquier cambio guardado en la libreta:
```powershell
python sync_watcher.py
```
- Vigila la carpeta de respaldos `C:\Users\Alex\OneDrive\MEDUCA\AGENTES\AGENTE_LIBRETA_CALIFICACIONES\backups`.
- Al detectar un nuevo archivo `.json` o modificación de `mtime`, ejecuta `sync_actividades.export_actividades_data()`.
- Actualiza `js/data.js` al instante.

### 2. Sincronización Manual Inmediata
Si el vigilante no está corriendo o se requiere forzar la actualización:
```powershell
python actualizar_datos.py
```
O ejecutando el archivo por lotes `actualizar_datos.bat`.

### 3. Verificación de Integridad
- Revisar que `js/data.js` contenga la fecha y hora de la última sincronización en `meta.ultimaSincronizacion`.
- Comprobar que los 12 grupos (`3A` a `6C`) y sus actividades del Tercer Trimestre estén presentes en `actividadesData.grados`.
