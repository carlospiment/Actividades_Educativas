/**
 * Base de datos oficial sincronizada automáticamente desde la Libreta de Calificaciones
 */

const actividadesData = {
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
              "id": "act_1795283186297",
              "nombre": "Separador trimestral",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795283198055",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795283208462",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795283250341",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795283266698",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795283304461",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
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
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795292959753",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795292965051",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795292970107",
              "nombre": "Lección, Conceptual y Mental",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795292978251",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
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
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_1795292896679",
              "nombre": "Glosario",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_1795292902639",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_1795292909603",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_1795292917169",
              "nombre": "Prueba evaluativa",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_1795292924141",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 7,
              "id": "act_1795292932569",
              "nombre": "Limpieza",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
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
            }
          ]
        },
        "4C": {
          "id": "4C",
          "nombre": "4.° Grado - Grupo C",
          "dia": "JUEVES",
          "hora": "8:10 - 9:20 a.m.",
          "periodos": "III y IV",
          "oficialLibreta": false,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1",
              "nombre": "Separador trimestral: Sostenibilidad",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_2",
              "nombre": "Glosario: Materia Orgánica e Inorgánica",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_3",
              "nombre": "Taller: Elaboración de Abono Bocashi",
              "categoria": "Plan / Taller",
              "tipo": "Cotidiana",
              "descripcion": "Planificación técnica y taller práctico.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_4",
              "nombre": "Campo: Aplicación de Bocashi y Cobertura",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_5",
              "nombre": "Mapa Conceptual: Coberturas Vivas y Leguminosas",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_6",
              "nombre": "Prueba evaluativa trimestral",
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
          "oficialLibreta": false,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1",
              "nombre": "Separador trimestral: Agricultura Agrosostenible",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_2",
              "nombre": "Glosario: Texturas y Salud del Suelo",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_3",
              "nombre": "Taller: Texturas del Suelo al Tacto",
              "categoria": "Plan / Taller",
              "tipo": "Cotidiana",
              "descripcion": "Planificación técnica y taller práctico.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_4",
              "nombre": "Campo: Preparación de Biofertilizante Líquido (Biol)",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_5",
              "nombre": "Práctica: Construcción de Nivel 'A' y Curvas",
              "categoria": "Práctica",
              "tipo": "Cotidiana",
              "descripcion": "Actividad didáctica formativa de Agricultura.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_6",
              "nombre": "Prueba evaluativa: Conservación del Suelo y Agua",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
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
          "oficialLibreta": false,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1",
              "nombre": "Separador trimestral: Agricultura Agrosostenible",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_2",
              "nombre": "Glosario: Texturas y Salud del Suelo",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_3",
              "nombre": "Taller: Texturas del Suelo al Tacto",
              "categoria": "Plan / Taller",
              "tipo": "Cotidiana",
              "descripcion": "Planificación técnica y taller práctico.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_4",
              "nombre": "Campo: Preparación de Biofertilizante Líquido (Biol)",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_5",
              "nombre": "Práctica: Construcción de Nivel 'A' y Curvas",
              "categoria": "Práctica",
              "tipo": "Cotidiana",
              "descripcion": "Actividad didáctica formativa de Agricultura.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_6",
              "nombre": "Prueba evaluativa: Conservación del Suelo y Agua",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
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
          "oficialLibreta": false,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1",
              "nombre": "Separador trimestral: Agricultura Agrosostenible",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_2",
              "nombre": "Glosario: Texturas y Salud del Suelo",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_3",
              "nombre": "Taller: Texturas del Suelo al Tacto",
              "categoria": "Plan / Taller",
              "tipo": "Cotidiana",
              "descripcion": "Planificación técnica y taller práctico.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_4",
              "nombre": "Campo: Preparación de Biofertilizante Líquido (Biol)",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_5",
              "nombre": "Práctica: Construcción de Nivel 'A' y Curvas",
              "categoria": "Práctica",
              "tipo": "Cotidiana",
              "descripcion": "Actividad didáctica formativa de Agricultura.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_6",
              "nombre": "Prueba evaluativa: Conservación del Suelo y Agua",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
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
          "oficialLibreta": false,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1",
              "nombre": "Separador trimestral: Agroforestería y pH",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_2",
              "nombre": "Glosario: Asociación Milpa y Silvopastoril",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_3",
              "nombre": "Mapa Conceptual: Propiedades Químicas y pH",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_4",
              "nombre": "Campo: Aplicación de Enmiendas y Cal Agrícola",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_5",
              "nombre": "Taller: Proyecto de Protección de Microcuencas",
              "categoria": "Plan / Taller",
              "tipo": "Cotidiana",
              "descripcion": "Planificación técnica y taller práctico.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_6",
              "nombre": "Prueba evaluativa sumativa final",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
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
          "oficialLibreta": false,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1",
              "nombre": "Separador trimestral: Agroforestería y pH",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_2",
              "nombre": "Glosario: Asociación Milpa y Silvopastoril",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_3",
              "nombre": "Mapa Conceptual: Propiedades Químicas y pH",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_4",
              "nombre": "Campo: Aplicación de Enmiendas y Cal Agrícola",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_5",
              "nombre": "Taller: Proyecto de Protección de Microcuencas",
              "categoria": "Plan / Taller",
              "tipo": "Cotidiana",
              "descripcion": "Planificación técnica y taller práctico.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_6",
              "nombre": "Prueba evaluativa sumativa final",
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
          "oficialLibreta": false,
          "actividades": [
            {
              "numero": 1,
              "id": "act_1",
              "nombre": "Separador trimestral: Agroforestería y pH",
              "categoria": "Separador",
              "tipo": "Cotidiana",
              "descripcion": "Apertura y rotulación del cuaderno del trimestre.",
              "fecha_inicio": ""
            },
            {
              "numero": 2,
              "id": "act_2",
              "nombre": "Glosario: Asociación Milpa y Silvopastoril",
              "categoria": "Vocabulario",
              "tipo": "Cotidiana",
              "descripcion": "Definición e ilustración de términos técnicos.",
              "fecha_inicio": ""
            },
            {
              "numero": 3,
              "id": "act_3",
              "nombre": "Mapa Conceptual: Propiedades Químicas y pH",
              "categoria": "Organizador",
              "tipo": "Cotidiana",
              "descripcion": "Construcción de mapas conceptuales y esquemas mentales.",
              "fecha_inicio": ""
            },
            {
              "numero": 4,
              "id": "act_4",
              "nombre": "Campo: Aplicación de Enmiendas y Cal Agrícola",
              "categoria": "Campo",
              "tipo": "Cotidiana",
              "descripcion": "Labores prácticas en terreno, huerto escolar y áreas verdes.",
              "fecha_inicio": ""
            },
            {
              "numero": 5,
              "id": "act_5",
              "nombre": "Taller: Proyecto de Protección de Microcuencas",
              "categoria": "Plan / Taller",
              "tipo": "Cotidiana",
              "descripcion": "Planificación técnica y taller práctico.",
              "fecha_inicio": ""
            },
            {
              "numero": 6,
              "id": "act_6",
              "nombre": "Prueba evaluativa sumativa final",
              "categoria": "Evaluación",
              "tipo": "Cotidiana",
              "descripcion": "Comprobación sumativa de conocimientos adquiridos.",
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
