const workoutData = {
    1: {
        label: "LUNES • SEMANA 1",
        title: "Tren Superior<br>Push",
        subtitle: "Empuje • 7 ejercicios • ~60 min",
        type: "workout",
        exercises: [
            { name: "Press de Banca con Barra", sets: 4, reps: "8-10", rest: 90, notes: "Control en bajada (2-3 seg), explosivo al subir. Enfoque en rango completo de movimiento. Mantén escápulas retraídas.", muscle: "Pecho" },
            { name: "Press Militar con Mancuernas", sets: 3, reps: "10-12", rest: 75, notes: "Mantén core activado, evita arquear la espalda. Movimiento controlado. Empuja las mancuernas hacia arriba y ligeramente hacia adentro.", muscle: "Hombros" },
            { name: "Press Inclinado con Mancuernas", sets: 3, reps: "10-12", rest: 75, notes: "Ángulo de banco 30-45 grados. Enfoque en pecho superior. Mantén control en todo el rango de movimiento.", muscle: "Pecho Superior" },
            { name: "Fondos en Paralelas (Dips)", sets: 3, reps: "8-12", rest: 90, notes: "Si no puedes hacerlos, usa máquina asistida. Inclínate ligeramente hacia adelante para más énfasis en pecho. Controla el descenso.", muscle: "Tríceps / Pecho" },
            { name: "Elevaciones Laterales", sets: 3, reps: "12-15", rest: 60, notes: "Movimiento controlado, sin impulso. Sube hasta altura de hombros. Mantén codos ligeramente flexionados.", muscle: "Hombros Laterales" },
            { name: "Tríceps en Polea (Pushdown)", sets: 3, reps: "12-15", rest: 60, notes: "Codos pegados al cuerpo. Contracción completa abajo. No uses impulso del cuerpo, solo mueve los antebrazos.", muscle: "Tríceps" },
            { name: "Push-ups (Flexiones) - Finisher", sets: 2, reps: "Al fallo", rest: 60, notes: "Cuerpo recto, core activado. Todas las que puedas con buena forma. Cuando la técnica se deteriore, detente.", muscle: "Pecho / Tríceps" }
        ],
        cardio: "10 min caminadora o elíptica (60-70% FC máx)"
    },
    2: {
        label: "MARTES • SEMANA 1",
        title: "Tren Inferior<br>+ Core",
        subtitle: "Piernas • 6 ejercicios • ~60 min",
        type: "workout",
        exercises: [
            { name: "Sentadilla con Barra (Back Squat)", sets: 4, reps: "8-10", rest: 120, notes: "Profundidad: paralelo o más bajo. Espalda recta, pecho arriba. Rodillas alineadas con los pies.", muscle: "Piernas" },
            { name: "Peso Muerto Rumano", sets: 4, reps: "8-10", rest: 120, notes: "Énfasis en isquiotibiales y glúteos. Barra cerca de las piernas. Bisagra de cadera, mantén espalda neutra.", muscle: "Isquiotibiales" },
            { name: "Zancadas con Mancuernas", sets: 3, reps: "12 por pierna", rest: 90, notes: "Mantén torso erguido. Rodilla de atrás casi toca el suelo. Empuje desde el talón delantero.", muscle: "Piernas" },
            { name: "Prensa de Piernas (Leg Press)", sets: 3, reps: "12-15", rest: 90, notes: "Pies a ancho de hombros. No despegues glúteos del asiento. Rango completo de movimiento.", muscle: "Cuádriceps" },
            { name: "Curl de Isquiotibiales", sets: 3, reps: "12-15", rest: 75, notes: "Movimiento controlado. Evita arquear espalda. Contracción completa arriba.", muscle: "Isquiotibiales" },
            { name: "Elevación de Pantorrillas", sets: 3, reps: "15-20", rest: 60, notes: "Pausa de 1 seg en la cima. Rango completo de movimiento. Estira bien abajo.", muscle: "Pantorrillas" }
        ],
        core: [
            { name: "Plancha Frontal", duration: "45-60 seg" },
            { name: "Mountain Climbers", reps: "20 total" },
            { name: "Russian Twists", reps: "20 total" },
            { name: "Dead Bug", reps: "12 por lado" }
        ],
        coreRounds: 3,
        cardio: "10 min bicicleta estática (ritmo moderado)"
    },
    3: {
        label: "MIÉRCOLES • SEMANA 1",
        title: "Descanso<br>Activo",
        subtitle: "Recuperación ligera",
        type: "rest",
        options: [
            "Caminata 30-40 min a ritmo moderado",
            "Natación ligera 20-30 min",
            "Yoga o estiramientos 30 min",
            "Ciclismo recreativo 30-40 min",
            "Descanso completo si sientes fatiga"
        ]
    },
    4: {
        label: "JUEVES • SEMANA 1",
        title: "Tren Superior<br>Pull",
        subtitle: "Tracción • 8 ejercicios • ~60 min",
        type: "workout",
        exercises: [
            { name: "Dominadas (Pull-ups)", sets: 4, reps: "6-10", rest: 120, notes: "Usa banda elástica o máquina asistida si es necesario. Agarre pronado. Pecho hacia la barra.", muscle: "Espalda" },
            { name: "Remo con Barra (Bent-Over Row)", sets: 4, reps: "8-10", rest: 90, notes: "Espalda recta, jala hacia el ombligo. Aprieta escápulas. Torso a 45 grados.", muscle: "Espalda" },
            { name: "Remo en Polea Baja", sets: 3, reps: "10-12", rest: 75, notes: "Aprieta escápulas al final. Mantén espalda recta. No uses impulso del cuerpo.", muscle: "Espalda" },
            { name: "Pullover con Mancuerna", sets: 3, reps: "12", rest: 75, notes: "Estira bien el dorsal. Movimiento amplio. Mantén core activado.", muscle: "Dorsales" },
            { name: "Face Pulls (Polea Alta)", sets: 3, reps: "15", rest: 60, notes: "Para hombros posteriores y postura. Jala hacia la cara. Separa las manos al final.", muscle: "Hombros Posteriores" },
            { name: "Curl de Bíceps con Barra", sets: 3, reps: "10-12", rest: 60, notes: "Sin balanceo. Codos fijos. Contracción completa arriba.", muscle: "Bíceps" },
            { name: "Curl Martillo con Mancuernas", sets: 3, reps: "12", rest: 60, notes: "Agarre neutro. Movimiento controlado. Alterna o simultáneo.", muscle: "Bíceps" },
            { name: "Dead Hang (Cuelgue Muerto)", sets: 2, reps: "30-45 seg", rest: 90, notes: "Fuerza de agarre y descompresión espinal. Relaja hombros.", muscle: "Agarre" }
        ],
        cardio: "10 min escaladora o elíptica (ritmo moderado)"
    },
    5: {
        label: "VIERNES • SEMANA 1",
        title: "Tren Inferior<br>+ Core",
        subtitle: "Piernas • 6 ejercicios • ~60 min",
        type: "workout",
        exercises: [
            { name: "Sentadilla Frontal / Goblet Squat", sets: 4, reps: "10-12", rest: 90, notes: "Más énfasis en cuádriceps. Mantén torso vertical. Codos arriba en frontal.", muscle: "Cuádriceps" },
            { name: "Peso Muerto Convencional", sets: 4, reps: "6-8", rest: 120, notes: "Movimiento rey para fuerza total. Espalda neutra. Barra pegada a las piernas.", muscle: "Cuerpo Completo" },
            { name: "Zancadas Búlgaras", sets: 3, reps: "10 por pierna", rest: 90, notes: "Pie trasero elevado en banco. Desafiante para equilibrio. Torso erguido.", muscle: "Piernas" },
            { name: "Extensión de Cuádriceps", sets: 3, reps: "12-15", rest: 75, notes: "Contracción de 1 seg en la cima. Movimiento controlado. No hiperextiendas rodillas.", muscle: "Cuádriceps" },
            { name: "Hip Thrust con Barra", sets: 3, reps: "12-15", rest: 90, notes: "Excelente para glúteos. Aprieta fuerte arriba. Espalda apoyada en banco.", muscle: "Glúteos" },
            { name: "Elevación Pantorrillas Sentado", sets: 3, reps: "15-20", rest: 60, notes: "Trabaja el sóleo. Rango completo. Pausa arriba.", muscle: "Pantorrillas" }
        ],
        core: [
            { name: "Plancha Lateral", duration: "30-45 seg/lado" },
            { name: "Bicicleta Abdominal", reps: "20 total" },
            { name: "Leg Raises", reps: "12-15" },
            { name: "Pallof Press", reps: "12 por lado" }
        ],
        coreRounds: 3,
        cardio: "10 min rowing machine (ritmo moderado)"
    },
    6: {
        label: "SÁBADO • SEMANA 1",
        title: "Full Body<br>+ HIIT",
        subtitle: "Circuito • 5 ejercicios • 4 rondas",
        type: "circuit",
        circuit: [
            { name: "Thrusters con Mancuernas", reps: "12" },
            { name: "Pull-ups o Remo con Banda", reps: "10" },
            { name: "Burpees", reps: "10" },
            { name: "Kettlebell Swings", reps: "15" },
            { name: "Push-ups", reps: "15" }
        ],
        circuitRounds: 4,
        restBetweenEx: "15 seg entre ejercicios",
        restBetweenRounds: "2 min entre rondas",
        hiit: {
            duration: "20 min",
            protocol: "30 seg sprint / 30 seg recuperación",
            rounds: "20 rondas",
            options: "Bicicleta, Remo, Caminadora inclinada, Elíptica, Saltos de cuerda"
        }
    },
    7: {
        label: "DOMINGO • SEMANA 1",
        title: "Descanso<br>Completo",
        subtitle: "Recuperación total",
        type: "fullRest",
        activities: [
            "Recuperación total del cuerpo",
            "Estiramientos ligeros si deseas (10-15 min)",
            "Foam rolling (rodillo de espuma) para tejidos",
            "Enfócate en hidratación (3-4 litros agua)",
            "Nutrición de calidad (alta proteína)",
            "Prioriza 8-9 horas de sueño"
        ]
    }
};