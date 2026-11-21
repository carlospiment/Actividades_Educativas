@echo off
title Portal de Actividades de Agricultura - MEDUCA 2026
echo =========================================================================
echo    PORTAL WEB DE ACTIVIDADES DIDACTICAS - TERCER TRIMESTRE
echo    Ministerio de Educacion (MEDUCA) - Republica de Panama
echo    Prof. Carlos Ivan Pimentel Marin - Cedula: 9-700-1451
echo =========================================================================
echo.
echo Sincronizando con los ultimos cambios de la libreta de calificaciones...
python actualizar_datos.py
echo.
echo Abriendo aplicacion en tu navegador...
start "" "index.html"
echo.
echo Iniciando monitor de sincronizacion automatica en segundo plano...
start /min "Sincronizador en Vivo" python sync_watcher.py
echo.
echo [LISTO] La web se actualizara en vivo cada vez que guardes en la libreta.
timeout /t 3 >nul
exit
