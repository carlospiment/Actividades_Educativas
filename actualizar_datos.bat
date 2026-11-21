@echo off
title Sincronizar Actividades desde Libreta de Calificaciones
echo =========================================================================
echo    SINCRONIZACION DE ACTIVIDADES DESDE AGENTE_LIBRETA_CALIFICACIONES
echo =========================================================================
echo.
echo Buscando el ultimo respaldo JSON en:
echo C:\Users\Alex\OneDrive\MEDUCA\AGENTES\AGENTE_LIBRETA_CALIFICACIONES\backups
echo.
python actualizar_datos.py
echo.
if %ERRORLEVEL% EQU 0 (
    echo [EXITO] Datos actualizados correctamente.
) else (
    echo [ERROR] Hubo un problema al sincronizar los datos.
)
echo.
pause
