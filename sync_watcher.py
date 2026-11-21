# -*- coding: utf-8 -*-
"""
sync_watcher.py
Vigilante en segundo plano para sincronización automática en tiempo real.
Monitorea la carpeta de copias de seguridad de la libreta de calificaciones y
actualiza js/data.js al instante ante cualquier modificación.
"""

import os
import time
import glob
import sys

# Agregar la ruta del agente de calificaciones para importar su sincronizador
AGENTE_DIR = r"C:\Users\Alex\OneDrive\MEDUCA\AGENTES\AGENTE_LIBRETA_CALIFICACIONES"
if AGENTE_DIR not in sys.path:
    sys.path.append(AGENTE_DIR)

BACKUP_DIR = os.path.join(AGENTE_DIR, "backups")

def get_latest_backup_info():
    if not os.path.exists(BACKUP_DIR):
        return None, 0
    files = glob.glob(os.path.join(BACKUP_DIR, "*.json"))
    if not files:
        return None, 0
    latest_file = max(files, key=os.path.getmtime)
    return latest_file, os.path.getmtime(latest_file)

def run_watcher():
    print("=================================================================")
    print("   MONITOR DE SINCRONIZACIÓN AUTOMÁTICA EN TIEMPO REAL")
    print(f"   Vigilando: {BACKUP_DIR}")
    print("=================================================================")
    
    last_file, last_mtime = get_latest_backup_info()
    print(f"Estado inicial: {os.path.basename(last_file) if last_file else 'Sin archivos'}")

    try:
        import sync_actividades
    except ImportError:
        print("[ERROR] No se pudo cargar sync_actividades.py")
        return

    while True:
        try:
            current_file, current_mtime = get_latest_backup_info()
            if current_file and (current_file != last_file or current_mtime > last_mtime):
                print(f"\n[CAMBIO DETECTADO] Actualización en la libreta: {os.path.basename(current_file)}")
                import json
                with open(current_file, "r", encoding="utf-8") as f:
                    raw_data = json.load(f)
                
                os.environ["SYNC_TIMESTAMP"] = time.strftime("%Y-%m-%d %H:%M:%S")
                import importlib
                importlib.reload(sync_actividades)
                sync_actividades.export_actividades_data(raw_data)
                last_file, last_mtime = current_file, current_mtime
                print("[SINCRONIZADO] Web de actividades actualizada con éxito.\n")
            
            time.sleep(2)
        except KeyboardInterrupt:
            print("\nMonitor detenido por el usuario.")
            break
        except Exception as e:
            print(f"[ERROR EN MONITOR] {e}")
            time.sleep(3)

if __name__ == "__main__":
    run_watcher()
