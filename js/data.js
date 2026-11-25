/**
 * Base de datos oficial sincronizada automáticamente desde la Libreta de Calificaciones
 */

var actividadesData = {
  "meta": {
    "institucion": "Centro Educativo Oficial",
    "asignatura": "Tecnología (Agricultura)",
    "docente": "Carlos Iván Pimentel Marín",
    "cedula": "9-700-1451",
    "ano_lectivo": 2026,
    "trimestre": "Tercer Trimestre",
    "trimestrePeriodo": "Septiembre - Diciembre 2026",
    "ultimaSincronizacion": ""
  },
  "horario": [
    {
      "dia": "LUNES",
      "grupo": "3C",
      "hora": "8:10 - 9:20 a.m.",
      "periodos": "III y IV",
      "grado": "3"
    },
    {
      "dia": "LUNES",
      "grupo": "5C",
      "hora": "10:15 - 11:25 a.m.",
      "periodos": "VI y VII",
      "grado": "5"
    },
    {
      "dia": "MARTES",
      "grupo": "3A",
      "hora": "7:00 - 8:10 a.m.",
      "periodos": "I y II",
      "grado": "3"
    },
    {
      "dia": "MARTES",
      "grupo": "4B",
      "hora": "8:10 - 9:20 a.m.",
      "periodos": "III y IV",
      "grado": "4"
    },
    {
      "dia": "MIÉRCOLES",
      "grupo": "6A",
      "hora": "7:00 - 8:10 a.m.",
      "periodos": "I y II",
      "grado": "6"
    },
    {
      "dia": "MIÉRCOLES",
      "grupo": "5B",
      "hora": "8:10 - 9:20 a.m.",
      "periodos": "III y IV",
      "grado": "5"
    },
    {
      "dia": "MIÉRCOLES",
      "grupo": "6C",
      "hora": "10:15 - 11:25 a.m.",
      "periodos": "VI y VII",
      "grado": "6"
    },
    {
      "dia": "JUEVES",
      "grupo": "3B",
      "hora": "7:00 - 8:10 a.m.",
      "periodos": "I y II",
      "grado": "3"
    },
    {
      "dia": "JUEVES",
      "grupo": "4C",
      "hora": "8:10 - 9:20 a.m.",
      "periodos": "III y IV",
      "grado": "4"
    },
    {
      "dia": "JUEVES",
      "grupo": "6B",
      "hora": "9:40 - 10:50 a.m.",
      "periodos": "V y VI",
      "grado": "6"
    },
    {
      "dia": "VIERNES",
      "grupo": "5A",
      "hora": "7:00 - 8:10 a.m.",
      "periodos": "I y II",
      "grado": "5"
    },
    {
      "dia": "VIERNES",
      "grupo": "4A",
      "hora": "8:10 - 9:20 a.m.",
      "periodos": "III y IV",
      "grado": "4"
    }
  ],
  "grados": {
    "3": {
      "numero": "3",
      "nombre": "Tercer Grado (3.°)",
      "color": "emerald",
      "grupos": {
        "3C": {
          "id": "3C",
          "nombre": "3.° Grado - Grupo C",
          "dia": "LUNES",
          "hora": "8:10 - 9:20 a.m.",
          "periodos": "III y IV",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795489429335",
              "nombre": "Separador Trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": "2026-09-21"
            },
            {
              "numero": 2,
              "id": "act_1795489511668",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": "2026-09-28"
            },
            {
              "numero": 3,
              "id": "act_1795490344804",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": "2026-09-28"
            },
            {
              "numero": 4,
              "id": "act_1795490362270",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": "2026-10-26"
            },
            {
              "numero": 5,
              "id": "act_1795490375566",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": "2026-11-09"
            },
            {
              "numero": 6,
              "id": "act_1795490387846",
              "nombre": "Prueba Evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": "2026-11-16"
            }
          ]
        },
        "3A": {
          "id": "3A",
          "nombre": "3.° Grado - Grupo A",
          "dia": "MARTES",
          "hora": "7:00 - 8:10 a.m.",
          "periodos": "I y II",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795292954547",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": "2026-09-15"
            },
            {
              "numero": 2,
              "id": "act_1795292959753",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": "2026-09-29"
            },
            {
              "numero": 3,
              "id": "act_1795292965051",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": "2026-10-27"
            },
            {
              "numero": 4,
              "id": "act_1795292970107",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": "2026-11-17"
            },
            {
              "numero": 5,
              "id": "act_1795292978251",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": "2026-11-16"
            },
            {
              "numero": 6,
              "id": "act_1795546279659",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": "2026-11-24"
            }
          ]
        },
        "3B": {
          "id": "3B",
          "nombre": "3.° Grado - Grupo B",
          "dia": "JUEVES",
          "hora": "7:00 - 8:10 a.m.",
          "periodos": "I y II",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795292890305",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": "2026-09-17"
            },
            {
              "numero": 2,
              "id": "act_1795292896679",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": "2026-09-24"
            },
            {
              "numero": 3,
              "id": "act_1795292902639",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": "2026-09-24"
            },
            {
              "numero": 4,
              "id": "act_1795292909603",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": "2026-10-22"
            },
            {
              "numero": 5,
              "id": "act_1795292917169",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": "2026-11-19"
            },
            {
              "numero": 6,
              "id": "act_1795292924141",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": "2026-11-12"
            },
            {
              "numero": 7,
              "id": "act_1795292932569",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": "2026-11-19"
            }
          ]
        }
      }
    },
    "4": {
      "numero": "4",
      "nombre": "Cuarto Grado (4.°)",
      "color": "blue",
      "grupos": {
        "4B": {
          "id": "4B",
          "nombre": "4.° Grado - Grupo B",
          "dia": "MARTES",
          "hora": "8:10 - 9:20 a.m.",
          "periodos": "III y IV",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795293072747",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795293077465",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795293083011",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795296974214",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            }
          ]
        },
        "4C": {
          "id": "4C",
          "nombre": "4.° Grado - Grupo C",
          "dia": "JUEVES",
          "hora": "8:10 - 9:20 a.m.",
          "periodos": "III y IV",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795293095433",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795293100023",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795293107697",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795293128983",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795293146369",
              "nombre": "Trabajo de Campo",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795293161799",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            }
          ]
        },
        "4A": {
          "id": "4A",
          "nombre": "4.° Grado - Grupo A",
          "dia": "VIERNES",
          "hora": "8:10 - 9:20 a.m.",
          "periodos": "III y IV",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795293006941",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795293011179",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795293016305",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795293022323",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795293058890",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795297004826",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            }
          ]
        }
      }
    },
    "5": {
      "numero": "5",
      "nombre": "Quinto Grado (5.°)",
      "color": "amber",
      "grupos": {
        "5C": {
          "id": "5C",
          "nombre": "5.° Grado - Grupo C",
          "dia": "LUNES",
          "hora": "10:15 - 11:25 a.m.",
          "periodos": "VI y VII",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795294067246",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795294071394",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795294075036",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795294080826",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795294086378",
              "nombre": "Prueba Evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795310298913",
              "nombre": "Bitácora: El Semillero de Aji",
              "categoria": "Bitácora",
              "tipo": "Cotidiana",
              "descripcion": "Registro técnico del semillero de ají criollo en cubetas biodegradables.",
              "fecha_inicio": ""
            }
          ]
        },
        "5B": {
          "id": "5B",
          "nombre": "5.° Grado - Grupo B",
          "dia": "MIÉRCOLES",
          "hora": "8:10 - 9:20 a.m.",
          "periodos": "III y IV",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795293998150",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795294002790",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795294025290",
              "nombre": "Preparación del Terreno",
              "categoria": "Práctica",
              "tipo": "Cotidiana",
              "descripcion": "Actividad didáctica formativa de Agricultura.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795294031586",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795294041596",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795294047618",
              "nombre": "Prueba Evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            },
            {
              "numero": 7,
              "id": "act_1795294054437",
              "nombre": "trabajo de campo",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 8,
              "id": "act_1795310291095",
              "nombre": "Bitácora: El Semillero de Aji",
              "categoria": "Bitácora",
              "tipo": "Cotidiana",
              "descripcion": "Registro técnico del semillero de ají criollo en cubetas biodegradables.",
              "fecha_inicio": ""
            }
          ]
        },
        "5A": {
          "id": "5A",
          "nombre": "5.° Grado - Grupo A",
          "dia": "VIERNES",
          "hora": "7:00 - 8:10 a.m.",
          "periodos": "I y II",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795293911687",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795293925851",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795293931607",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795293944977",
              "nombre": "Lección y Conceptual",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795293950990",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795293958763",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            },
            {
              "numero": 7,
              "id": "act_1795310281118",
              "nombre": "Bitácora: El Semillero de Aji",
              "categoria": "Bitácora",
              "tipo": "Cotidiana",
              "descripcion": "Registro técnico del semillero de ají criollo en cubetas biodegradables.",
              "fecha_inicio": ""
            }
          ]
        }
      }
    },
    "6": {
      "numero": "6",
      "nombre": "Sexto Grado (6.°)",
      "color": "indigo",
      "grupos": {
        "6A": {
          "id": "6A",
          "nombre": "6.° Grado - Grupo A",
          "dia": "MIÉRCOLES",
          "hora": "7:00 - 8:10 a.m.",
          "periodos": "I y II",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795294097040",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795294105653",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795294125570",
              "nombre": "Charla: Las Plantas Ornamentales",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795294142966",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795294147964",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795294154068",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            },
            {
              "numero": 7,
              "id": "act_1795294276406",
              "nombre": "Ensayo: Preparación de Alimentos",
              "categoria": "Práctica",
              "tipo": "Cotidiana",
              "descripcion": "Actividad didáctica formativa de Agricultura.",
              "fecha_inicio": ""
            }
          ]
        },
        "6C": {
          "id": "6C",
          "nombre": "6.° Grado - Grupo C",
          "dia": "MIÉRCOLES",
          "hora": "10:15 - 11:25 a.m.",
          "periodos": "VI y VII",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795294292650",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795294298778",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795294303970",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795294310050",
              "nombre": "Charla: Las Plantas Ornamentales",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795294317174",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795294323324",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 7,
              "id": "act_1795294331392",
              "nombre": "Ensayo: Preparación de Alimentos",
              "categoria": "Práctica",
              "tipo": "Cotidiana",
              "descripcion": "Actividad didáctica formativa de Agricultura.",
              "fecha_inicio": ""
            },
            {
              "numero": 8,
              "id": "act_1795294344064",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            }
          ]
        },
        "6B": {
          "id": "6B",
          "nombre": "6.° Grado - Grupo B",
          "dia": "JUEVES",
          "hora": "9:40 - 10:50 a.m.",
          "periodos": "V y VI",
          "oficialLibreta": true,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1795294178716",
              "nombre": "Charla: Las Plantas Ornamentales",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795294183230",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795294188866",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795294192812",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795294198098",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795294240736",
              "nombre": "Ensayo: Preparación de Alimentos",
              "categoria": "Práctica",
              "tipo": "Cotidiana",
              "descripcion": "Actividad didáctica formativa de Agricultura.",
              "fecha_inicio": ""
            },
            {
              "numero": 7,
              "id": "act_1795294249614",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            },
            {
              "numero": 8,
              "id": "act_1795294260058",
              "nombre": "Trabajo de Campo",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            }
          ]
        }
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.actividadesData = actividadesData;
  if (window.app && typeof window.app.onDataUpdated === 'function') {
    window.app.onDataUpdated(actividadesData);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { actividadesData };
}
