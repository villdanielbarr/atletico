let currentDay = 1;
let activeTimers = {};
let workoutSetsData = {};

function changeDay(day) {
    currentDay = day;
    
    document.querySelectorAll('.day-pill').forEach((pill, index) => {
        pill.classList.toggle('active', index + 1 === day);
    });
    
    renderDay(day);
}

function renderDay(day) {
    const data = workoutData[day];
    const dayInfo = document.getElementById('dayInfo');
    const content = document.getElementById('exerciseContent');
    
    dayInfo.innerHTML = `
        <div class="day-label">${data.label}</div>
        <div class="day-title">${data.title}</div>
        <div class="day-subtitle">${data.subtitle}</div>
    `;
    
    if (data.type === 'rest' || data.type === 'fullRest') {
        content.innerHTML = `
            <div class="rest-day">
                <div class="rest-day-title">${data.type === 'rest' ? 'Opciones de Descanso Activo' : 'Prioridades de Recuperación'}</div>
                <div class="rest-day-subtitle">${data.type === 'rest' ? 'Elige una actividad ligera' : 'Enfócate en tu bienestar'}</div>
                <div class="rest-options">
                    ${(data.options || data.activities).map(opt => `
                        <div class="rest-option">${opt}</div>
                    `).join('')}
                </div>
            </div>
        `;
        return;
    }
    
    let html = '<div class="exercise-list">';
    
    // Add warmup section if applicable
    if (data.warmup && warmupData) {
        html += `
            <div class="section-label">CALENTAMIENTO UNIVERSAL (10 MIN)</div>
            <div class="warmup-card">
                ${warmupData.sections.map((section, idx) => `
                    <div class="warmup-section" id="warmup_${idx}">
                        <div class="warmup-section-header" onclick="toggleWarmupSection('warmup_${idx}')">
                            <div class="warmup-section-title">${section.title}</div>
                            <div class="warmup-expand-icon">▼</div>
                        </div>
                        <div class="warmup-exercises">
                            <div class="warmup-exercises-inner">
                                ${section.exercises.map(ex => `
                                    <div class="warmup-exercise">${ex}</div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (data.type === 'circuit') {
        html += `
                <div class="section-label">CIRCUITO FULL BODY</div>
                <div class="core-circuit">
                    <div class="circuit-title">${data.circuitRounds} Rondas Completas</div>
                    ${data.circuit.map((ex, i) => `
                        <div class="circuit-exercise">
                            <div class="circuit-name">${ex.name}</div>
                            <div class="circuit-reps">${ex.reps} reps</div>
                        </div>
                    `).join('')}
                    <div style="margin-top: 16px; padding-top: 16px; border-top: 2px solid var(--border); font-size: 14px; color: var(--text-secondary);">
                        <div style="margin-bottom: 8px;"><strong>${data.restBetweenEx}</strong></div>
                        <div><strong>${data.restBetweenRounds}</strong></div>
                    </div>
                </div>
                
                <div class="section-label" style="margin-top: 32px;">HIIT CARDIO</div>
                <div class="core-circuit">
                    <div class="circuit-title">${data.hiit.duration}</div>
                    <div style="font-size: 15px; color: var(--text-secondary); line-height: 1.8;">
                        <div style="margin-bottom: 12px;"><strong>Protocolo:</strong> ${data.hiit.protocol}</div>
                        <div style="margin-bottom: 12px;"><strong>Total:</strong> ${data.hiit.rounds}</div>
                        <div><strong>Opciones:</strong> ${data.hiit.options}</div>
                    </div>
                </div>
            </div>
        `;
        content.innerHTML = html;
        return;
    }
    
    html += '<div class="section-label">EJERCICIOS PRINCIPALES</div>';
    
    data.exercises.forEach((ex, idx) => {
        const exId = `d${day}_ex${idx}`;
        html += renderExercise(ex, exId, day, idx);
    });
    
    if (data.core) {
        html += `
            <div class="section-label" style="margin-top: 32px;">CORE CIRCUIT (${data.coreRounds} RONDAS)</div>
            <div class="core-circuit">
                ${data.core.map(ex => `
                    <div class="circuit-exercise">
                        <div class="circuit-name">${ex.name}</div>
                        <div class="circuit-reps">${ex.duration || ex.reps}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (data.cardio) {
        html += `
            <div class="section-label" style="margin-top: 32px;">CARDIO POST-ENTRENAMIENTO</div>
            <div class="exercise-card">
                <div class="exercise-header">
                    <div class="exercise-info">
                        <div class="exercise-name">Cardio Moderado</div>
                        <div class="exercise-meta">
                            <div class="meta-badge">${data.cardio}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    content.innerHTML = html;
    
    // Load saved data
    setTimeout(loadSavedData, 100);
}

function renderExercise(ex, exId, day, idx) {
    return `
        <div class="exercise-card" id="${exId}">
            <div class="exercise-header" onclick="toggleExercise('${exId}')">
                <div class="exercise-info">
                    <div class="exercise-name">${ex.name}</div>
                    <div class="exercise-meta">
                        <div class="meta-badge">${ex.sets} × ${ex.reps}</div>
                        <div class="meta-badge">${ex.rest}s</div>
                    </div>
                    <div class="muscle-tag">${ex.muscle}</div>
                </div>
                <div class="expand-icon">▼</div>
            </div>
            <div class="exercise-details">
                <div class="exercise-body">
                    <div class="exercise-notes">
                        <div class="notes-title">Técnica</div>
                        ${ex.notes}
                    </div>
                    <div class="sets-header">
                        <div class="header-cell">Set</div>
                        <div class="header-cell">Peso</div>
                        <div class="header-cell">Reps</div>
                        <div class="header-cell"></div>
                    </div>
                    <div class="sets-container">
                        ${Array.from({length: ex.sets}, (_, i) => `
                            <div class="set-row">
                                <div class="set-number">${i + 1}</div>
                                <input type="number" 
                                       class="set-input" 
                                       placeholder="${ex.reps === 'Al fallo' ? '—' : 'kg'}"
                                       data-exercise="${exId}"
                                       data-set="${i + 1}"
                                       data-field="weight"
                                       onchange="handleSetInput(this)">
                                <input type="number" 
                                       class="set-input" 
                                       placeholder="${ex.reps === 'Al fallo' ? 'Max' : '#'}"
                                       data-exercise="${exId}"
                                       data-set="${i + 1}"
                                       data-field="reps"
                                       onchange="handleSetInput(this)">
                                <div class="set-checkbox" 
                                     data-exercise="${exId}"
                                     data-set="${i + 1}"
                                     onclick="toggleCheck(this)">
                                    <svg viewBox="0 0 24 24">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="rest-timer">
                        <div class="timer-label">Descanso</div>
                        <div class="rest-timer-display" id="timer_${exId}">${formatTime(ex.rest)}</div>
                        <div class="timer-controls">
                            <button class="timer-btn" onclick="startTimer('timer_${exId}', ${ex.rest})">Iniciar</button>
                            <button class="timer-btn secondary" onclick="resetTimer('timer_${exId}', ${ex.rest})">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadSavedData() {
    if (!workoutSetsData) return;
    
    // Load all input values and checkboxes
    document.querySelectorAll('.set-input').forEach(input => {
        const exerciseKey = input.dataset.exercise;
        const setNumber = input.dataset.set;
        const field = input.dataset.field;
        
        if (workoutSetsData[exerciseKey] && 
            workoutSetsData[exerciseKey][`set${setNumber}`] && 
            workoutSetsData[exerciseKey][`set${setNumber}`][field]) {
            input.value = workoutSetsData[exerciseKey][`set${setNumber}`][field];
        }
    });
    
    document.querySelectorAll('.set-checkbox').forEach(checkbox => {
        const exerciseKey = checkbox.dataset.exercise;
        const setNumber = checkbox.dataset.set;
        
        if (workoutSetsData[exerciseKey] && 
            workoutSetsData[exerciseKey][`set${setNumber}`] && 
            workoutSetsData[exerciseKey][`set${setNumber}`].completed) {
            checkbox.classList.add('checked');
        }
    });
}

function handleSetInput(input) {
    const exerciseKey = input.dataset.exercise;
    const setNumber = input.dataset.set;
    const field = input.dataset.field;
    const value = input.value;
    
    if (window.saveSetData) {
        window.saveSetData(exerciseKey, setNumber, field, value);
    }
}

function toggleExercise(id) {
    document.getElementById(id).classList.toggle('expanded');
}

function toggleCheck(element) {
    const isChecked = element.classList.toggle('checked');
    
    const exerciseKey = element.dataset.exercise;
    const setNumber = element.dataset.set;
    
    if (window.saveSetComplete) {
        window.saveSetComplete(exerciseKey, setNumber, isChecked);
    }
}

function startTimer(timerId, seconds) {
    if (activeTimers[timerId]) {
        clearInterval(activeTimers[timerId]);
    }

    let remaining = seconds;
    const display = document.getElementById(timerId);
    display.classList.add('active');
    
    activeTimers[timerId] = setInterval(() => {
        remaining--;
        display.textContent = formatTime(remaining);
        
        if (remaining <= 0) {
            clearInterval(activeTimers[timerId]);
            display.textContent = '¡Listo!';
            display.classList.remove('active');
            
            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200, 100, 200]);
            }
            
            setTimeout(() => {
                resetTimer(timerId, seconds);
            }, 2000);
        }
    }, 1000);
}

function resetTimer(timerId, seconds) {
    if (activeTimers[timerId]) {
        clearInterval(activeTimers[timerId]);
        delete activeTimers[timerId];
    }
    const display = document.getElementById(timerId);
    display.textContent = formatTime(seconds);
    display.classList.remove('active');
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}