# -*- coding: utf-8 -*-
"""
actualizar_datos.py
Script manual de sincronización para actualizar js/data.js con la copia más reciente de la libreta.
"""

import os
import sys
import json
import glob

AGENTE_DIR = r"C:\Users\Alex\OneDrive\MEDUCA\AGENTES\AGENTE_LIBRETA_CALIFICACIONES"
if AGENTE_DIR not in sys.path:
    sys.path.append(AGENTE_DIR)

import sync_actividades

def ejecutar_sincronizacion():
    backups_dir = os.path.join(AGENTE_DIR, "backups")
    archivos = sorted(glob.glob(os.path.join(backups_dir, "*.json")), key=os.path.getmtime, reverse=True)
    if not archivos:
        print("[ERROR] No se encontraron copias de seguridad en:", backups_dir)
        return False
    
    ultimo = archivos[0]
    print(f"Leyendo respaldo más reciente: {os.path.basename(ultimo)}")
    with open(ultimo, "r", encoding="utf-8") as f:
        data = json.load(f)

    return sync_actividades.export_actividades_data(data)

if __name__ == "__main__":
    ejecutar_sincronizacion()
