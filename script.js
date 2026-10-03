// ==========================================================================
// PETUALANGAN PECAHAN AJAIB - JAVASCRIPT CONTROLLER
// ==========================================================================

const state = {
    student: {
        name: '',
        class: '',
        school: 'SD Negeri 1 Nusantara',
        character: null,
        stars: 0
    },
    currentScreen: 'screenLogin',
    selectedCharTemp: null,

    // Latihan state
    latihanIndex: 0,
    latihanAnswered: false,

    // Evaluasi state
    evaluasiIndex: 0,
    evaluasiScore: 0,
    evaluasiAnswers: [],
    evaluasiTimer: null,
    evaluasiSeconds: 600,
    selectedExamOption: null,

    // Mini-games state
    pizzaOrder: { targetNum: 3, targetDen: 6, selectedSlices: [] },
    balloonInterval: null,
    balloonScore: 0,
    memoryFlipped: [],
    memoryMatched: 0
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initLogin();
    renderCharacters();
    renderPanduan();
    renderPetunjuk();
    renderCptp();
    renderMateri();
    renderVideos();
    setupNavigation();
    setupSoundControls();
    initConfetti();
});

// ==================== CONFETTI CELEBRATION ENGINE ====================
let confettiParticles = [];
let confettiAnimationId = null;

function initConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function launchConfetti(count = 70) {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'];

    for (let i = 0; i < count; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: -20,
            size: Math.random() * 8 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 4 + 3,
            speedX: Math.random() * 4 - 2,
            rotation: Math.random() * 360,
            rotSpeed: Math.random() * 8 - 4
        });
    }

    if (!confettiAnimationId) {
        animateConfetti(ctx, canvas);
    }
}

function animateConfetti(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach((p, index) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        if (p.y > canvas.height + 20) {
            confettiParticles.splice(index, 1);
        }
    });

    if (confettiParticles.length > 0) {
        confettiAnimationId = requestAnimationFrame(() => animateConfetti(ctx, canvas));
    } else {
        confettiAnimationId = null;
    }
}

// ==================== NAVIGATION & ROUTING ====================
function navigateTo(screenId) {
    window.soundManager.playPop();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        state.currentScreen = screenId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const userPill = document.getElementById('userPill');
    const btnHome = document.getElementById('btnHome');
    const btnSwitchChar = document.getElementById('btnSwitchChar');

    if (screenId === 'screenLogin' || screenId === 'screenCharacter') {
        userPill.style.display = 'none';
        btnHome.style.display = 'none';
        btnSwitchChar.style.display = 'none';
    } else {
        userPill.style.display = 'flex';
        btnHome.style.display = 'flex';
        btnSwitchChar.style.display = 'flex';
    }

    if (screenId === 'screenLatihan') {
        startLatihan();
    } else if (screenId === 'screenGame') {
        initPizzaGame();
    }
}

function setupNavigation() {
    document.getElementById('brandBtn').addEventListener('click', () => {
        if (state.student.name && state.student.character) {
            navigateTo('screenDashboard');
        }
    });

    document.getElementById('btnHome').addEventListener('click', () => {
        navigateTo('screenDashboard');
    });

    document.getElementById('btnSwitchChar').addEventListener('click', () => {
        navigateTo('screenCharacter');
    });

    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            if (target) navigateTo(target);
        });
    });
}

function setupSoundControls() {
    const btnSound = document.getElementById('btnSound');
    btnSound.addEventListener('click', () => {
        const isBgmOn = window.soundManager.toggleBgm();
        btnSound.textContent = isBgmOn ? '🎵' : '🔇';
    });
}

function addStars(count) {
    state.student.stars += count;
    document.getElementById('starScore').textContent = state.student.stars;
}

// ==================== 1. LOGIN ====================
function initLogin() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.soundManager.ensureContext();
        window.soundManager.playFanfare();

        const nameInput = document.getElementById('studentName').value.trim();
        const classInput = document.getElementById('studentClass').value;
        const schoolInput = document.getElementById('studentSchool').value.trim() || 'SD Negeri 1 Nusantara';

        state.student.name = nameInput;
        state.student.class = classInput;
        state.student.school = schoolInput;

        document.getElementById('navName').textContent = nameInput;
        document.getElementById('navClass').textContent = classInput;

        navigateTo('screenCharacter');
    });
}

// ==================== 2. CHARACTER SELECTION ====================
function renderCharacters() {
    const grid = document.getElementById('charGrid');
    grid.innerHTML = '';

    APP_DATA.characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.innerHTML = `
            <div class="char-avatar">${char.avatar}</div>
            <div class="char-name">${char.name}</div>
            <div class="char-title">${char.title}</div>
            <span class="char-badge-tag">${char.badge}</span>
        `;

        card.addEventListener('click', () => {
            window.soundManager.playPop();
            document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            state.selectedCharTemp = char;
            const greetingEl = document.getElementById('charGreeting');
            greetingEl.textContent = `"${char.greeting}"`;
            greetingEl.style.borderColor = char.color;

            document.getElementById('btnConfirmCharacter').disabled = false;
        });

        grid.appendChild(card);
    });

    document.getElementById('btnConfirmCharacter').addEventListener('click', () => {
        if (!state.selectedCharTemp) return;
        window.soundManager.playFanfare();
        state.student.character = state.selectedCharTemp;

        document.getElementById('navAvatar').textContent = state.student.character.avatar;
        document.getElementById('heroAvatar').textContent = state.student.character.avatar;
        document.getElementById('heroGreeting').textContent = `Halo, ${state.student.name}! (${state.student.character.name}) 🌟`;

        launchConfetti(40);
        navigateTo('screenDashboard');
    });
}

// ==================== 3 & 4. PANDUAN & PETUNJUK ====================
function renderPanduan() {
    const list = document.getElementById('panduanList');
    list.innerHTML = '';

    APP_DATA.guides.panduan.forEach(item => {
        const card = document.createElement('div');
        card.className = 'concept-card';
        card.style.textAlign = 'left';
        card.style.display = 'flex';
        card.style.alignItems = 'center';
        card.style.gap = '16px';
        card.innerHTML = `
            <div style="font-size: 2.4rem; background: #EEF2FF; padding: 14px; border-radius: var(--radius-lg); flex-shrink:0;">${item.icon}</div>
            <div>
                <h4 style="color: var(--primary-dark); font-size: 1.2rem; margin-bottom: 4px;">${item.title}</h4>
                <p style="color: #64748B; font-size: 1rem; line-height: 1.4;">${item.desc}</p>
            </div>
        `;
        list.appendChild(card);
    });
}

function renderPetunjuk() {
    const grid = document.getElementById('petunjukGrid');
    grid.innerHTML = '';

    APP_DATA.guides.petunjuk.forEach(p => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.style.textAlign = 'left';
        card.innerHTML = `
            <div style="font-size: 2.8rem; margin-bottom: 8px;">${p.icon}</div>
            <h4 style="color: var(--primary-dark); font-size: 1.15rem; margin-bottom: 4px;">${p.name}</h4>
            <p style="color: #64748B; font-size: 0.9rem; line-height: 1.4;">${p.desc}</p>
        `;
        grid.appendChild(card);
    });
}

// ==================== 5. CP & TP ====================
function renderCptp() {
    document.getElementById('cpKurikulum').textContent = APP_DATA.cptp.kurikulum;
    document.getElementById('cpContent').textContent = APP_DATA.cptp.capaianPembelajaran;

    const tpList = document.getElementById('tpList');
    tpList.innerHTML = '';
    APP_DATA.cptp.tujuanPembelajaran.forEach(tp => {
        const li = document.createElement('li');
        li.className = 'concept-card';
        li.style.textAlign = 'left';
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.gap = '14px';
        li.innerHTML = `
            <span style="background: var(--primary); color: white; font-weight: 900; padding: 6px 14px; border-radius: 8px; font-size: 0.9rem;">${tp.kode}</span>
            <span style="font-weight: 600; font-size: 1.05rem; color: #1E293B;">${tp.text}</span>
        `;
        tpList.appendChild(li);
    });

    const indList = document.getElementById('indikatorList');
    indList.innerHTML = '';
    APP_DATA.cptp.indikator.forEach((ind, i) => {
        const li = document.createElement('li');
        li.className = 'concept-card';
        li.style.textAlign = 'left';
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.gap = '14px';
        li.innerHTML = `
            <span style="background: var(--accent-orange); color: white; font-weight: 900; padding: 6px 14px; border-radius: 8px; font-size: 0.9rem;">Indikator ${i + 1}</span>
            <span style="font-weight: 600; font-size: 1.05rem; color: #1E293B;">${ind}</span>
        `;
        indList.appendChild(li);
    });
}

// ==================== 6. MATERI INTERAKTIF ====================
function renderMateri() {
    const tabs = document.getElementById('materiTabs');
    tabs.innerHTML = '';

    APP_DATA.materiList.forEach((materi, idx) => {
        const btn = document.createElement('button');
        btn.className = `btn-back ${idx === 0 ? 'active' : ''}`;
        btn.style.borderRadius = '50px';
        btn.innerHTML = `${materi.icon} <span>${materi.title.split('.')[1] || materi.title}</span>`;
        
        btn.addEventListener('click', () => {
            window.soundManager.playPop();
            document.querySelectorAll('#materiTabs .btn-back').forEach(b => {
                b.style.background = 'white';
                b.style.color = '#1E293B';
                b.style.borderColor = '#CBD5E1';
            });
            btn.style.background = 'var(--primary)';
            btn.style.color = 'white';
            btn.style.borderColor = 'var(--primary)';
            loadMateriContent(materi);
        });
        tabs.appendChild(btn);
    });

    loadMateriContent(APP_DATA.materiList[0]);
}

function loadMateriContent(materi) {
    const contentArea = document.getElementById('materiContentArea');
    contentArea.innerHTML = materi.content;

    if (materi.id === 'konsep-dasar') {
        setupPizzaSimulator();
    } else if (materi.id === 'membandingkan-pecahan') {
        setupComparatorTool();
    }
}

function setupPizzaSimulator() {
    const numInput = document.getElementById('inputNum');
    const denInput = document.getElementById('inputDen');
    const numVal = document.getElementById('numVal');
    const denVal = document.getElementById('denVal');
    const giantNum = document.getElementById('giantNum');
    const giantDen = document.getElementById('giantDen');
    const wordLabel = document.getElementById('fractionWordLabel');
    const svg = document.getElementById('pizzaSvg');

    const words = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan"];
    const denWords = ["", "", "per Dua (Setengah)", "per Tiga", "per Empat", "per Lima", "per Enam", "per Tujuh", "per Delapan"];

    function updatePizza() {
        let num = parseInt(numInput.value);
        let den = parseInt(denInput.value);

        if (num > den) {
            num = den;
            numInput.value = den;
        }
        numInput.max = den;

        numVal.textContent = num;
        denVal.textContent = den;
        giantNum.textContent = num;
        giantDen.textContent = den;

        wordLabel.textContent = `"${words[num]} ${denWords[den]} Bagian"`;
        drawPizzaSVG(svg, num, den);
    }

    numInput.addEventListener('input', () => {
        window.soundManager.playSlice();
        updatePizza();
    });
    denInput.addEventListener('input', () => {
        window.soundManager.playSlice();
        updatePizza();
    });
    updatePizza();
}

function drawPizzaSVG(svg, shaded, total, radius = 85, cx = 100, cy = 100) {
    svg.innerHTML = '';

    // Crust Shadow
    const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    shadow.setAttribute('cx', cx);
    shadow.setAttribute('cy', cy + 5);
    shadow.setAttribute('r', radius + 6);
    shadow.setAttribute('fill', 'rgba(0,0,0,0.15)');
    svg.appendChild(shadow);

    // Pizza Crust Base
    const base = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    base.setAttribute('cx', cx);
    base.setAttribute('cy', cy);
    base.setAttribute('r', radius + 5);
    base.setAttribute('fill', '#D97706');
    base.setAttribute('stroke', '#92400E');
    base.setAttribute('stroke-width', '3');
    svg.appendChild(base);

    const angleStep = (2 * Math.PI) / total;

    for (let i = 0; i < total; i++) {
        const startAngle = i * angleStep - Math.PI / 2;
        const endAngle = (i + 1) * angleStep - Math.PI / 2;

        const x1 = cx + radius * Math.cos(startAngle);
        const y1 = cy + radius * Math.sin(startAngle);
        const x2 = cx + radius * Math.cos(endAngle);
        const y2 = cy + radius * Math.sin(endAngle);

        const largeArc = angleStep > Math.PI ? 1 : 0;
        const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', i < shaded ? '#EF4444' : '#FEF3C7');
        path.setAttribute('stroke', '#B45309');
        path.setAttribute('stroke-width', '2.5');
        svg.appendChild(path);

        // Pepperoni on shaded slice
        if (i < shaded) {
            const midAngle = startAngle + angleStep / 2;
            const px = cx + (radius * 0.58) * Math.cos(midAngle);
            const py = cy + (radius * 0.58) * Math.sin(midAngle);
            
            const pep = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            pep.setAttribute('cx', px);
            pep.setAttribute('cy', py);
            pep.setAttribute('r', '7');
            pep.setAttribute('fill', '#991B1B');
            svg.appendChild(pep);

            const cheeseDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            cheeseDot.setAttribute('cx', px - 2);
            cheeseDot.setAttribute('cy', py - 2);
            cheeseDot.setAttribute('r', '2');
            cheeseDot.setAttribute('fill', '#FDE047');
            svg.appendChild(cheeseDot);
        }
    }
}

function setupComparatorTool() {
    const compA = document.getElementById('compA');
    const compB = document.getElementById('compB');
    const compSymbol = document.getElementById('compSymbol');
    const compResult = document.getElementById('compResult');
    const seesawBar = document.getElementById('seesawBar');
    const leftWeight = document.getElementById('leftWeight');
    const rightWeight = document.getElementById('rightWeight');

    function updateComp() {
        const valA = parseFloat(compA.value);
        const valB = parseFloat(compB.value);
        const textA = compA.options[compA.selectedIndex].text.split(' ')[0];
        const textB = compB.options[compB.selectedIndex].text.split(' ')[0];

        leftWeight.textContent = textA;
        rightWeight.textContent = textB;

        if (Math.abs(valA - valB) < 0.001) {
            compSymbol.textContent = '=';
            compResult.textContent = `⚖️ ${textA} SAMA BESAR dengan ${textB} (${textA} = ${textB})`;
            seesawBar.style.transform = 'rotate(0deg)';
        } else if (valA > valB) {
            compSymbol.textContent = '>';
            compResult.textContent = `⚖️ ${textA} lebih BESAR dari ${textB} (${textA} > ${textB})`;
            seesawBar.style.transform = 'rotate(-12deg)';
        } else {
            compSymbol.textContent = '<';
            compResult.textContent = `⚖️ ${textA} lebih KECIL dari ${textB} (${textA} < ${textB})`;
            seesawBar.style.transform = 'rotate(12deg)';
        }
    }

    compA.addEventListener('change', () => { window.soundManager.playPop(); updateComp(); });
    compB.addEventListener('change', () => { window.soundManager.playPop(); updateComp(); });
    updateComp();
}

// ==================== 7. VIDEO PEMBELAJARAN ====================
function renderVideos() {
    const grid = document.getElementById('videoListGrid');
    grid.innerHTML = '';

    APP_DATA.videos.forEach((vid, idx) => {
        const card = document.createElement('div');
        card.className = `char-card ${idx === 0 ? 'selected' : ''}`;
        card.innerHTML = `
            <div style="font-size: 2.5rem; margin-bottom: 6px;">${vid.thumb}</div>
            <h4 style="font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 4px;">${vid.title}</h4>
            <small style="color: #64748B; font-weight: 700;">⏱️ Durasi: ${vid.durasi}</small>
        `;

        card.addEventListener('click', () => {
            window.soundManager.playPop();
            document.querySelectorAll('#videoListGrid .char-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            playSelectedVideo(vid);
        });

        grid.appendChild(card);
    });

    playSelectedVideo(APP_DATA.videos[0]);
}

function playSelectedVideo(vid) {
    document.getElementById('mainVideoPlayer').src = vid.embedUrl;
    document.getElementById('activeVideoTitle').textContent = vid.title;
    document.getElementById('activeVideoDesc').textContent = vid.desc;

    const pointsContainer = document.getElementById('activeVideoPoints');
    pointsContainer.innerHTML = '<h5 style="margin-bottom: 8px; color: var(--primary); font-size: 1.05rem;">📌 Poin Penting Video:</h5>';
    const ul = document.createElement('ul');
    ul.style.paddingLeft = '20px';
    ul.style.display = 'flex';
    ul.style.flexDirection = 'column';
    ul.style.gap = '6px';
    vid.points.forEach(pt => {
        const li = document.createElement('li');
        li.style.fontSize = '0.95rem';
        li.style.color = '#334155';
        li.textContent = pt;
        ul.appendChild(li);
    });
    pointsContainer.appendChild(ul);
}

// ==================== 8. LATIHAN SOAL ====================
function startLatihan() {
    state.latihanIndex = 0;
    renderLatihanQuestion();
}

function renderLatihanQuestion() {
    state.latihanAnswered = false;
    const q = APP_DATA.latihanQuestions[state.latihanIndex];
    const totalQ = APP_DATA.latihanQuestions.length;

    document.getElementById('quizIndex').textContent = `Soal ${state.latihanIndex + 1} dari ${totalQ}`;
    document.getElementById('latihanProgress').style.width = `${((state.latihanIndex) / totalQ) * 100}%`;
    document.getElementById('latihanQuestion').textContent = q.question;

    // Hint Bubble Setup
    const hintBubble = document.getElementById('hintBubble');
    hintBubble.style.display = 'none';
    hintBubble.innerHTML = `💡 <strong>Petunjuk:</strong> ${q.hint}`;

    const btnHint = document.getElementById('btnShowHint');
    btnHint.onclick = () => {
        window.soundManager.playPop();
        hintBubble.style.display = hintBubble.style.display === 'none' ? 'block' : 'none';
    };

    const visualContainer = document.getElementById('latihanVisualContainer');
    visualContainer.innerHTML = '';
    if (q.type === 'visual') {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '180');
        svg.setAttribute('height', '180');
        svg.setAttribute('viewBox', '0 0 200 200');
        drawPizzaSVG(svg, q.shadedSlices, q.totalSlices, 75);
        visualContainer.appendChild(svg);
    }

    const optionsContainer = document.getElementById('latihanOptions');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="background: white; width: 34px; height: 34px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 800; border: 2px solid #CBD5E1; color: var(--primary);">${String.fromCharCode(65 + idx)}</span> <span>${opt}</span>`;

        btn.addEventListener('click', () => handleLatihanAnswer(idx, btn));
        optionsContainer.appendChild(btn);
    });

    const feedback = document.getElementById('latihanFeedback');
    feedback.className = 'feedback-card';
}

function handleLatihanAnswer(selectedIdx, btnElement) {
    if (state.latihanAnswered) return;
    state.latihanAnswered = true;

    const q = APP_DATA.latihanQuestions[state.latihanIndex];
    const isCorrect = selectedIdx === q.correct;
    const allButtons = document.querySelectorAll('#latihanOptions .option-btn');

    allButtons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === q.correct) b.classList.add('correct');
        else if (idx === selectedIdx && !isCorrect) b.classList.add('wrong');
    });

    const feedback = document.getElementById('latihanFeedback');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');

    if (isCorrect) {
        window.soundManager.playCorrect();
        addStars(10);
        launchConfetti(35);
        feedback.className = 'feedback-card show correct-feedback';
        feedbackTitle.textContent = '🎉 Luar Biasa! Jawabanmu Tepat Sekali!';
    } else {
        window.soundManager.playWrong();
        feedback.className = 'feedback-card show wrong-feedback';
        feedbackTitle.textContent = '❌ Belum Tepat, Pelajari Pembahasan Berikut:';
    }

    feedbackText.innerHTML = `<strong>Penjelasan:</strong> ${q.explanation}`;
    document.getElementById('latihanStars').textContent = `⭐ ${state.student.stars} Bintang`;

    document.getElementById('btnNextLatihan').onclick = () => {
        window.soundManager.playPop();
        if (state.latihanIndex < APP_DATA.latihanQuestions.length - 1) {
            state.latihanIndex++;
            renderLatihanQuestion();
        } else {
            window.soundManager.playFanfare();
            launchConfetti(70);
            alert(`🎉 Selamat! Kamu telah menyelesaikan seluruh latihan dan mengumpulkan ${state.student.stars} Bintang Emas!`);
            navigateTo('screenDashboard');
        }
    };
}

// ==================== 9. GAME EDUKASI ====================
function switchGame(gameType) {
    window.soundManager.playPop();
    document.querySelectorAll('.game-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.game-area').forEach(a => a.style.display = 'none');

    if (gameType === 'pizza') {
        document.querySelectorAll('.game-tab-btn')[0].classList.add('active');
        document.getElementById('gamePizzaArea').style.display = 'flex';
        initPizzaGame();
    } else if (gameType === 'balloon') {
        document.querySelectorAll('.game-tab-btn')[1].classList.add('active');
        document.getElementById('gameBalloonArea').style.display = 'flex';
        startBalloonGame();
    } else if (gameType === 'memory') {
        document.querySelectorAll('.game-tab-btn')[2].classList.add('active');
        document.getElementById('gameMemoryArea').style.display = 'flex';
        initMemoryGame();
    } else if (gameType === 'duel') {
        document.querySelectorAll('.game-tab-btn')[3].classList.add('active');
        document.getElementById('gameDuelArea').style.display = 'flex';
        initDuelGame();
    } else if (gameType === 'wheel') {
        document.querySelectorAll('.game-tab-btn')[4].classList.add('active');
        document.getElementById('gameWheelArea').style.display = 'flex';
        initWheelGame();
    }
}

// --- Game 1: Pizza Chef ---
function initPizzaGame() {
    const customers = [
        { avatar: "🐻", name: "Pak Beruang Cokelat", targetNum: 2, targetDen: 4 },
        { avatar: "🐼", name: "Panda Lucu", targetNum: 3, targetDen: 6 },
        { avatar: "🦁", name: "Singa Lapar", targetNum: 5, targetDen: 8 },
        { avatar: "🐰", name: "Mimi Kelinci", targetNum: 1, targetDen: 3 },
        { avatar: "🦊", name: "Rubah Pintar", targetNum: 4, targetDen: 8 }
    ];

    const c = customers[Math.floor(Math.random() * customers.length)];
    state.pizzaOrder = { targetNum: c.targetNum, targetDen: c.targetDen, selectedSlices: [] };

    document.getElementById('pizzaCustomerAvatar').textContent = c.avatar;
    document.getElementById('pizzaCustomerName').textContent = c.name;
    document.getElementById('pizzaChefTarget').innerHTML = `"Tolong buatkan pizza dengan porsi <strong>${c.targetNum}/${c.targetDen}</strong> loyang!"`;
    document.getElementById('pizzaGameMsg').textContent = '';

    renderInteractivePizzaGame();

    document.getElementById('btnSubmitPizzaOrder').onclick = () => {
        const msg = document.getElementById('pizzaGameMsg');
        if (state.pizzaOrder.selectedSlices.length === state.pizzaOrder.targetNum) {
            window.soundManager.playFanfare();
            launchConfetti(45);
            addStars(15);
            msg.style.color = '#10B981';
            msg.textContent = `🍕 Hore! ${c.name} sangat senang! Pesananmu tepat ${c.targetNum}/${c.targetDen}! (+15 Bintang ⭐)`;
            setTimeout(initPizzaGame, 2200);
        } else {
            window.soundManager.playWrong();
            msg.style.color = '#EF4444';
            msg.textContent = `❌ Kamu memilih ${state.pizzaOrder.selectedSlices.length} potong dari ${state.pizzaOrder.targetNum} potong yang diminta. Klik lagi potongan pizzanya!`;
        }
    };

    document.getElementById('btnResetPizzaOrder').onclick = () => {
        window.soundManager.playPop();
        state.pizzaOrder.selectedSlices = [];
        renderInteractivePizzaGame();
        document.getElementById('pizzaGameMsg').textContent = '';
    };
}

function renderInteractivePizzaGame() {
    const svg = document.getElementById('pizzaGameSvg');
    svg.innerHTML = '';
    const total = state.pizzaOrder.targetDen;
    const radius = 85, cx = 100, cy = 100;

    const base = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    base.setAttribute('cx', cx);
    base.setAttribute('cy', cy);
    base.setAttribute('r', radius + 6);
    base.setAttribute('fill', '#D97706');
    base.setAttribute('stroke', '#92400E');
    base.setAttribute('stroke-width', '3');
    svg.appendChild(base);

    const angleStep = (2 * Math.PI) / total;

    for (let i = 0; i < total; i++) {
        const isSelected = state.pizzaOrder.selectedSlices.includes(i);
        const startAngle = i * angleStep - Math.PI / 2;
        const endAngle = (i + 1) * angleStep - Math.PI / 2;

        const x1 = cx + radius * Math.cos(startAngle);
        const y1 = cy + radius * Math.sin(startAngle);
        const x2 = cx + radius * Math.cos(endAngle);
        const y2 = cy + radius * Math.sin(endAngle);

        const largeArc = angleStep > Math.PI ? 1 : 0;
        const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('class', 'pizza-slice-interactive');
        path.setAttribute('fill', isSelected ? '#EF4444' : '#FEF3C7');
        path.setAttribute('stroke', '#B45309');
        path.setAttribute('stroke-width', '3');

        path.addEventListener('click', () => {
            window.soundManager.playSlice();
            if (state.pizzaOrder.selectedSlices.includes(i)) {
                state.pizzaOrder.selectedSlices = state.pizzaOrder.selectedSlices.filter(x => x !== i);
            } else {
                state.pizzaOrder.selectedSlices.push(i);
            }
            renderInteractivePizzaGame();
        });

        svg.appendChild(path);

        if (isSelected) {
            const midAngle = startAngle + angleStep / 2;
            const px = cx + (radius * 0.58) * Math.cos(midAngle);
            const py = cy + (radius * 0.58) * Math.sin(midAngle);
            const pep = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            pep.setAttribute('cx', px);
            pep.setAttribute('cy', py);
            pep.setAttribute('r', '7');
            pep.setAttribute('fill', '#991B1B');
            pep.style.pointerEvents = 'none';
            svg.appendChild(pep);
        }
    }
}

// --- Game 2: Balloon Pop ---
function startBalloonGame() {
    const sky = document.getElementById('balloonSky');
    sky.innerHTML = '';
    state.balloonScore = 0;
    document.getElementById('balloonScore').textContent = '0';

    if (state.balloonInterval) clearInterval(state.balloonInterval);

    const balloonPool = [
        { label: "2/4", isEquiv: true, bg: "#EF4444" },
        { label: "3/6", isEquiv: true, bg: "#3B82F6" },
        { label: "4/8", isEquiv: true, bg: "#10B981" },
        { label: "5/10", isEquiv: true, bg: "#8B5CF6" },
        { label: "1/3", isEquiv: false, bg: "#F59E0B" },
        { label: "3/4", isEquiv: false, bg: "#EC4899" },
        { label: "2/5", isEquiv: false, bg: "#06B6D4" },
        { label: "1/4", isEquiv: false, bg: "#64748B" }
    ];

    function spawnBalloon() {
        if (state.currentScreen !== 'screenGame') return;
        const bData = balloonPool[Math.floor(Math.random() * balloonPool.length)];
        const b = document.createElement('div');
        b.className = 'balloon';
        b.textContent = bData.label;
        b.style.backgroundColor = bData.bg;
        b.style.left = `${Math.random() * 80 + 5}%`;
        b.style.animationDuration = `${Math.random() * 2 + 4.5}s`;

        b.addEventListener('click', () => {
            if (bData.isEquiv) {
                window.soundManager.playCorrect();
                launchConfetti(20);
                state.balloonScore += 10;
                addStars(5);
                b.style.transform = 'scale(1.5)';
                b.style.opacity = '0';
                setTimeout(() => b.remove(), 150);
            } else {
                window.soundManager.playWrong();
                state.balloonScore = Math.max(0, state.balloonScore - 5);
                b.style.transform = 'rotate(25deg)';
            }
            document.getElementById('balloonScore').textContent = state.balloonScore;
        });

        sky.appendChild(b);
        setTimeout(() => { if (b.parentNode) b.remove(); }, 7000);
    }

    state.balloonInterval = setInterval(spawnBalloon, 1100);
}

// --- Game 3: Memory Match ---
function initMemoryGame() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    state.memoryFlipped = [];
    state.memoryMatched = 0;
    document.getElementById('memoryWinMsg').textContent = '';

    const cards = [
        { id: 1, pair: '1/2', text: '1/2' },
        { id: 2, pair: '1/2', text: '🌓 Setengah' },
        { id: 3, pair: '1/4', text: '1/4' },
        { id: 4, pair: '1/4', text: '🍕 1 dari 4' },
        { id: 5, pair: '3/4', text: '3/4' },
        { id: 6, pair: '3/4', text: '💯 75%' },
        { id: 7, pair: '1/3', text: '1/3' },
        { id: 8, pair: '1/3', text: '🍰 1 dari 3' }
    ];

    const shuffled = cards.sort(() => 0.5 - Math.random());

    shuffled.forEach(c => {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.pair = c.pair;
        cardEl.dataset.text = c.text;
        cardEl.textContent = '❓';

        cardEl.addEventListener('click', () => {
            if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched') || state.memoryFlipped.length >= 2) return;

            window.soundManager.playPop();
            cardEl.classList.add('flipped');
            cardEl.textContent = c.text;
            state.memoryFlipped.push(cardEl);

            if (state.memoryFlipped.length === 2) {
                const [c1, c2] = state.memoryFlipped;
                if (c1.dataset.pair === c2.dataset.pair) {
                    window.soundManager.playCorrect();
                    c1.classList.add('matched');
                    c2.classList.add('matched');
                    state.memoryFlipped = [];
                    state.memoryMatched++;
                    addStars(10);

                    if (state.memoryMatched === cards.length / 2) {
                        window.soundManager.playFanfare();
                        launchConfetti(60);
                        document.getElementById('memoryWinMsg').textContent = '🎉 HEBAT! Kamu berhasil menemukan semua pasangan pecahan!';
                    }
                } else {
                    window.soundManager.playWrong();
                    setTimeout(() => {
                        c1.classList.remove('flipped');
                        c2.classList.remove('flipped');
                        c1.textContent = '❓';
                        c2.textContent = '❓';
                        state.memoryFlipped = [];
                    }, 850);
                }
            }
        });

        grid.appendChild(cardEl);
    });
}

// --- Game 4: DUEL TARIK TAMBANG KELAS (2 TIM) ---
let duelState = {
    round: 0,
    knotPos: 50, // 50% center
    isFinished: false,
    currentQuestion: null
};

function initDuelGame() {
    duelState = {
        round: 0,
        knotPos: 50,
        isFinished: false,
        currentQuestion: null
    };

    document.getElementById('ropeKnot').style.left = '50%';
    document.getElementById('duelWinnerBanner').style.display = 'none';

    setupDuelKeyListeners();
    loadNextDuelQuestion();
}

function loadNextDuelQuestion() {
    if (duelState.isFinished) return;

    duelState.round++;
    document.getElementById('duelRoundTag').textContent = `Ronde ${duelState.round}`;

    const qList = APP_DATA.duelQuestions;
    duelState.currentQuestion = qList[Math.floor(Math.random() * qList.length)];
    document.getElementById('duelQuestionText').innerHTML = duelState.currentQuestion.q;

    // Render Red Team buttons (Left)
    const redCol = document.getElementById('duelRedOptions');
    redCol.innerHTML = '';
    duelState.currentQuestion.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'duel-btn';
        btn.innerHTML = `<span><strong>[${idx + 1}]</strong> ${opt}</span>`;
        btn.onclick = () => handleDuelAnswer('red', idx);
        redCol.appendChild(btn);
    });

    // Render Blue Team buttons (Right)
    const blueCol = document.getElementById('duelBlueOptions');
    blueCol.innerHTML = '';
    const blueKeyLabels = ['7', '8', '9', '0'];
    duelState.currentQuestion.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'duel-btn';
        btn.innerHTML = `<span><strong>[${blueKeyLabels[idx]}]</strong> ${opt}</span>`;
        btn.onclick = () => handleDuelAnswer('blue', idx);
        blueCol.appendChild(btn);
    });
}

function handleDuelAnswer(team, selectedIdx) {
    if (duelState.isFinished) return;

    const isCorrect = selectedIdx === duelState.currentQuestion.correct;

    if (isCorrect) {
        window.soundManager.playCorrect();
        if (team === 'red') {
            duelState.knotPos -= 14; // Pull left
        } else {
            duelState.knotPos += 14; // Pull right
        }

        document.getElementById('ropeKnot').style.left = `${duelState.knotPos}%`;

        // Check Victory Condition
        if (duelState.knotPos <= 20) {
            triggerDuelWin('🦁 TIM MERAH JUARA TARIK TAMBANG! 🎉', '#DC2626');
            return;
        } else if (duelState.knotPos >= 80) {
            triggerDuelWin('🦕 TIM BIRU JUARA TARIK TAMBANG! 🎉', '#2563EB');
            return;
        }

        loadNextDuelQuestion();
    } else {
        window.soundManager.playWrong();
        // Slight penalty: rope slips towards opponent
        if (team === 'red') {
            duelState.knotPos = Math.min(75, duelState.knotPos + 6);
        } else {
            duelState.knotPos = Math.max(25, duelState.knotPos - 6);
        }
        document.getElementById('ropeKnot').style.left = `${duelState.knotPos}%`;
    }
}

function triggerDuelWin(winnerText, color) {
    duelState.isFinished = true;
    window.soundManager.playFanfare();
    launchConfetti(80);

    const banner = document.getElementById('duelWinnerBanner');
    banner.style.display = 'block';
    banner.style.color = color;
    banner.textContent = winnerText;
}

let duelKeyHandlerAttached = false;
function setupDuelKeyListeners() {
    if (duelKeyHandlerAttached) return;
    duelKeyHandlerAttached = true;

    window.addEventListener('keydown', (e) => {
        if (state.currentScreen !== 'screenGame' || duelState.isFinished) return;

        // Red Team Keys: 1, 2, 3, 4
        if (['1', '2', '3', '4'].includes(e.key)) {
            const idx = parseInt(e.key) - 1;
            handleDuelAnswer('red', idx);
        }

        // Blue Team Keys: 7, 8, 9, 0
        const blueMap = { '7': 0, '8': 1, '9': 2, '0': 3 };
        if (blueMap[e.key] !== undefined) {
            handleDuelAnswer('blue', blueMap[e.key]);
        }
    });
}

// --- Game 5: RODA TANTANGAN KELAS (SPIN WHEEL) ---
let wheelRotation = 0;
let isSpinning = false;

function initWheelGame() {
    const canvas = document.getElementById('wheelCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    drawWheelCanvas(ctx, canvas);

    const btnSpin = document.getElementById('btnSpinWheel');
    btnSpin.onclick = spinWheel;

    const btnShowAns = document.getElementById('btnShowChallengeAnswer');
    btnShowAns.onclick = () => {
        window.soundManager.playPop();
        const ansBox = document.getElementById('challengeAnswerBox');
        ansBox.style.display = ansBox.style.display === 'none' ? 'block' : 'none';
    };
}

function drawWheelCanvas(ctx, canvas) {
    const challenges = APP_DATA.wheelChallenges;
    const numSectors = challenges.length;
    const angleStep = (2 * Math.PI) / numSectors;
    const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];
    const cx = canvas.width / 2, cy = canvas.height / 2, radius = cx - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numSectors; i++) {
        const startAngle = i * angleStep;
        const endAngle = (i + 1) * angleStep;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();

        // Sector Label Text
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(startAngle + angleStep / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 13px Fredoka, sans-serif';
        ctx.fillText(challenges[i].label, radius - 15, 5);
        ctx.restore();
    }
}

function spinWheel() {
    if (isSpinning) return;
    isSpinning = true;
    window.soundManager.playPop();

    const canvas = document.getElementById('wheelCanvas');
    const resultCard = document.getElementById('challengeResultCard');
    resultCard.style.display = 'none';
    document.getElementById('challengeAnswerBox').style.display = 'none';

    const challenges = APP_DATA.wheelChallenges;
    const numSectors = challenges.length;
    const sectorAngle = 360 / numSectors;

    const selectedIndex = Math.floor(Math.random() * numSectors);
    const extraRounds = 5 + Math.floor(Math.random() * 3);
    const targetDeg = extraRounds * 360 + (360 - (selectedIndex * sectorAngle + sectorAngle / 2)) - 90;

    wheelRotation += targetDeg;
    canvas.style.transform = `rotate(${wheelRotation}deg)`;

    setTimeout(() => {
        isSpinning = false;
        window.soundManager.playFanfare();
        launchConfetti(40);

        const chosen = challenges[selectedIndex];
        document.getElementById('challengeBadge').textContent = chosen.label;
        document.getElementById('challengeDesc').textContent = chosen.desc;
        document.getElementById('challengeAnswerBox').innerHTML = `✅ <strong>Kunci Jawaban:</strong> ${chosen.ans}`;
        resultCard.style.display = 'block';
    }, 3600);
}

// ==================== 10. EVALUASI & SERTIFIKAT ====================
document.getElementById('btnStartExam').addEventListener('click', startEvaluation);

function startEvaluation() {
    window.soundManager.playPop();
    document.getElementById('evaluasiIntroCard').style.display = 'none';
    document.getElementById('evaluasiExamCard').style.display = 'block';
    document.getElementById('certificateSection').style.display = 'none';

    state.evaluasiIndex = 0;
    state.evaluasiScore = 0;
    state.evaluasiAnswers = [];
    state.evaluasiSeconds = 600;

    startExamTimer();
    renderExamQuestion();
}

function startExamTimer() {
    if (state.evaluasiTimer) clearInterval(state.evaluasiTimer);

    const timerEl = document.getElementById('examTimer');
    state.evaluasiTimer = setInterval(() => {
        state.evaluasiSeconds--;
        const mins = Math.floor(state.evaluasiSeconds / 60);
        const secs = state.evaluasiSeconds % 60;
        timerEl.textContent = `⏳ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (state.evaluasiSeconds <= 0) {
            clearInterval(state.evaluasiTimer);
            finishEvaluation();
        }
    }, 1000);
}

function renderExamQuestion() {
    state.selectedExamOption = null;
    const q = APP_DATA.evaluasiQuestions[state.evaluasiIndex];
    const totalQ = APP_DATA.evaluasiQuestions.length;

    document.getElementById('examQuestionNum').textContent = `Soal ${state.evaluasiIndex + 1} / ${totalQ}`;
    document.getElementById('examProgress').style.width = `${((state.evaluasiIndex) / totalQ) * 100}%`;
    document.getElementById('examQuestionText').innerHTML = q.q;

    const grid = document.getElementById('examOptionsGrid');
    grid.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="background: white; width: 34px; height: 34px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 800; border: 2px solid #CBD5E1; color: var(--primary);">${String.fromCharCode(65 + idx)}</span> <span>${opt}</span>`;

        btn.addEventListener('click', () => {
            window.soundManager.playPop();
            document.querySelectorAll('#examOptionsGrid .option-btn').forEach(b => {
                b.style.borderColor = '#E2E8F0';
                b.style.background = '#F8FAFC';
            });
            btn.style.borderColor = 'var(--primary)';
            btn.style.background = '#EEF2FF';
            state.selectedExamOption = idx;
            document.getElementById('btnNextExam').disabled = false;
        });

        grid.appendChild(btn);
    });

    const nextBtn = document.getElementById('btnNextExam');
    nextBtn.disabled = true;
    nextBtn.textContent = state.evaluasiIndex === totalQ - 1 ? '🏁 Selesai & Raih Sertifikat Emas' : 'Selanjutnya ➡';

    nextBtn.onclick = () => {
        if (state.selectedExamOption === null) return;
        window.soundManager.playPop();

        if (state.selectedExamOption === q.answer) {
            state.evaluasiScore += q.point;
        }

        if (state.evaluasiIndex < totalQ - 1) {
            state.evaluasiIndex++;
            renderExamQuestion();
        } else {
            finishEvaluation();
        }
    };
}

function finishEvaluation() {
    if (state.evaluasiTimer) clearInterval(state.evaluasiTimer);
    window.soundManager.playFanfare();
    launchConfetti(100);

    document.getElementById('evaluasiExamCard').style.display = 'none';
    document.getElementById('certificateSection').style.display = 'block';

    // Populate Certificate
    document.getElementById('certStudentName').textContent = state.student.name || 'Budi Santoso';
    document.getElementById('certStudentClass').textContent = state.student.class || 'Kelas 4A';
    document.getElementById('certStudentSchool').textContent = state.student.school || 'SD Negeri 1 Nusantara';

    let predikat = 'SANGAT MEMUASKAN (ISTIMEWA)';
    if (state.evaluasiScore < 70) predikat = 'CUKUP BAIK';
    else if (state.evaluasiScore < 85) predikat = 'MEMUASKAN';

    document.getElementById('certGradeText').textContent = `${predikat} - NILAI: ${state.evaluasiScore}/100`;

    if (state.student.character) {
        document.getElementById('certAvatarName').textContent = `${state.student.character.avatar} ${state.student.character.name}`;
    }

    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('certDate').textContent = today.toLocaleDateString('id-ID', options);
}

function restartEvaluation() {
    window.soundManager.playPop();
    document.getElementById('certificateSection').style.display = 'none';
    document.getElementById('evaluasiIntroCard').style.display = 'block';
}
