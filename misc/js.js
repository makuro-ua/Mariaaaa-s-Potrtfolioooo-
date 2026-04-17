const labData = {
        1: { title: "Project 01: My Resume", desc: "My Resumee ♡", codes: ["pngs/1.png"], out: "pngs/1output.png", link: "Mari/HTML/1st Lab.html" },
        2: { title: "Project 02: Nested Lists", desc: "Nested Lists ehhewhehehejskdfh ✨", codes: ["pngs/2.png"], out: "pngs/2output.png", link: "Mari/HTML/2nd Lab.html" },
        3: { title: "Project 03: Image Maps", desc: "MAPS maps MAAAAPS I made MAPS and I made a MAAAP ✿", codes: ["pngs/3.png"], out: "pngs/3output.png", link: "Mari/HTML/3rd Lab.html" },
        4: { title: "Project 04: External CSS", desc: "Waow CSS!?>!1//!??!1 Omg im so smart (external css stuf) ✧", codes: ["pngs/4.png", "pngs/44.png"], out: "pngs/4output.png", link: "Mari/HTML/4th labtask.html" },
        5: { title: "Project 05: CSS Resume", desc: "Resume w CSS LESGOOOO ✉", codes: ["pngs/5.png"], out: "pngs/5output.png", link: "Mari/HTML/5TH Labtask.html" },
        6: { title: "Project 06: Imitation", desc: "Googl imitating ahh things U(I imitated things ere) ☾", codes: ["pngs/6.png"], out: "pngs/6output.png", link: "Mari/HTML/6th Labtask.html" },
        7: { title: "Project 07: Website", desc: "Website Testinggg!!!!! ><", codes: ["pngs/7.png"], out: "pngs/7output.png", link: "Mari/HTML/7th Lab.html" },
        8: { title: "Project 08: Flexbox", desc: "Flexboxxx!!! (I flexd w/ the funni flexbox) ✿", codes: ["pngs/8html.png", "pngs/8css.png", "pngs/8js.png"], out: "pngs/8output.png", link: "Mari/HTML/stylesheet.html" }
    };

    let scale = 1;
    let isDragging = false;
    let startX, startY, moveX = 0, moveY = 0;
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('modal-img');
    const container = document.getElementById('modal-img-container');

    function openModal(src) {
        modal.style.display = 'flex';
        modalImg.src = src;
        scale = 1;
        moveX = 0; moveY = 0;
        updateTransform();
    }

    function closeModal() { modal.style.display = 'none'; }

    function updateTransform() {
        modalImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
    }

    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.2 : 0.2;
        scale = Math.min(Math.max(0.5, scale + delta), 5);
        updateTransform();
    });

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - moveX;
        startY = e.clientY - moveY;
        container.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveX = e.clientX - startX;
        moveY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });

    window.addEventListener('load', function() {
        setTimeout(() => {
            document.getElementById('startup-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('startup-screen').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 500);
        }, 2200);
    });

    function showTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
        event.currentTarget.classList.add('active');
        if(tabName === 'labs') closeLab();
    }

    function openLab(id) {
        const data = labData[id];
        document.getElementById('lab-list-main').style.display = 'none';
        document.getElementById('lab-detail-box').classList.add('active');
        document.getElementById('lab-title').innerText = data.title;
        document.getElementById('lab-desc').innerText = data.desc;
        document.getElementById('lab-link').href = data.link;

        const ssArea = document.getElementById('ss-area');
        ssArea.innerHTML = ''; 

        data.codes.forEach((src, index) => {
            ssArea.innerHTML += `
                <div class="ss-box" onclick="openModal('${src}')">
                    <span style="font-size:20px; font-weight:bold; color:var(--win-blue); margin-bottom:8px;">[CODE_SCREENSHOT_${index + 1}]</span>
                    <img src="${src}" class="ss-img" alt="Code Section">
                </div>
            `;
        });

        ssArea.innerHTML += `
            <div class="ss-box" onclick="openModal('${data.out}')">
                <span style="font-size:20px; font-weight:bold; color:#d9534f; margin-bottom:8px;">[OUTPUT_SCREENSHOT]</span>
                <img src="${data.out}" class="ss-img" alt="Output Result">
            </div>
        `;
    }

    function closeLab() {
        document.getElementById('lab-list-main').style.display = 'block';
        document.getElementById('lab-detail-box').classList.remove('active');
    }

    const song = document.getElementById('vanity-audio');
    const playBtn = document.getElementById('play-pause-btn');
    const progressFill = document.getElementById('music-progress-fill');
    const heartHandle = document.getElementById('music-handle-heart');
    const currentTimeText = document.getElementById('current-time');

    playBtn.onclick = () => {
        if (song.paused) {
            song.play();
            playBtn.innerText = "II PAUSE";
        } else {
            song.pause();
            playBtn.innerText = "▷ PLAY";
        }
    };

    song.ontimeupdate = () => {
        if (song.duration) {
            const pos = (song.currentTime / song.duration) * 100;
            progressFill.style.width = pos + "%";
            heartHandle.style.left = pos + "%";
            
            let mins = Math.floor(song.currentTime / 60);
            let secs = Math.floor(song.currentTime % 60);
            currentTimeText.innerText = mins + ":" + (secs < 10 ? '0' : '') + secs;
        }
    };

    document.getElementById('vol-control').oninput = (e) => {
        song.volume = e.target.value;
    };const labData = {
        1: { title: "Project 01: My Resume", desc: "My Resumee ♡", codes: ["pngs/1.png"], out: "pngs/1output.png", link: "Mari/HTML/1st Lab.html" },
        2: { title: "Project 02: Nested Lists", desc: "Nested Lists ehhewhehehejskdfh ✨", codes: ["pngs/2.png"], out: "pngs/2output.png", link: "Mari/HTML/2nd Lab.html" },
        3: { title: "Project 03: Image Maps", desc: "MAPS maps MAAAAPS I made MAPS and I made a MAAAP ✿", codes: ["pngs/3.png"], out: "pngs/3output.png", link: "Mari/HTML/3rd Lab.html" },
        4: { title: "Project 04: External CSS", desc: "Waow CSS!?>!1//!??!1 Omg im so smart (external css stuf) ✧", codes: ["pngs/4.png", "pngs/44.png"], out: "pngs/4output.png", link: "Mari/HTML/4th labtask.html" },
        5: { title: "Project 05: CSS Resume", desc: "Resume w CSS LESGOOOO ✉", codes: ["pngs/5.png"], out: "pngs/5output.png", link: "Mari/HTML/5TH Labtask.html" },
        6: { title: "Project 06: Imitation", desc: "Googl imitating ahh things U(I imitated things ere) ☾", codes: ["pngs/6.png"], out: "pngs/6output.png", link: "Mari/HTML/6th Labtask.html" },
        7: { title: "Project 07: Website", desc: "Website Testinggg!!!!! ><", codes: ["pngs/7.png"], out: "pngs/7output.png", link: "Mari/HTML/7th Lab.html" },
        8: { title: "Project 08: Flexbox", desc: "Flexboxxx!!! (I flexd w/ the funni flexbox) ✿", codes: ["pngs/8html.png", "pngs/8css.png", "pngs/8js.png"], out: "pngs/8output.png", link: "Mari/HTML/stylesheet.html" }
    };

    let scale = 1;
    let isDragging = false;
    let startX, startY, moveX = 0, moveY = 0;
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('modal-img');
    const container = document.getElementById('modal-img-container');

    function openModal(src) {
        modal.style.display = 'flex';
        modalImg.src = src;
        scale = 1;
        moveX = 0; moveY = 0;
        updateTransform();
    }

    function closeModal() { modal.style.display = 'none'; }

    function updateTransform() {
        modalImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
    }

    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.2 : 0.2;
        scale = Math.min(Math.max(0.5, scale + delta), 5);
        updateTransform();
    });

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - moveX;
        startY = e.clientY - moveY;
        container.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveX = e.clientX - startX;
        moveY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });

    window.addEventListener('load', function() {
        setTimeout(() => {
            document.getElementById('startup-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('startup-screen').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 500);
        }, 2200);
    });

    function showTab(tabName) {
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
        event.currentTarget.classList.add('active');
        if(tabName === 'labs') closeLab();
    }

    function openLab(id) {
        const data = labData[id];
        document.getElementById('lab-list-main').style.display = 'none';
        document.getElementById('lab-detail-box').classList.add('active');
        document.getElementById('lab-title').innerText = data.title;
        document.getElementById('lab-desc').innerText = data.desc;
        document.getElementById('lab-link').href = data.link;

        const ssArea = document.getElementById('ss-area');
        ssArea.innerHTML = ''; 

        data.codes.forEach((src, index) => {
            ssArea.innerHTML += `
                <div class="ss-box" onclick="openModal('${src}')">
                    <span style="font-size:20px; font-weight:bold; color:var(--win-blue); margin-bottom:8px;">[CODE_SCREENSHOT_${index + 1}]</span>
                    <img src="${src}" class="ss-img" alt="Code Section">
                </div>
            `;
        });

        ssArea.innerHTML += `
            <div class="ss-box" onclick="openModal('${data.out}')">
                <span style="font-size:20px; font-weight:bold; color:#d9534f; margin-bottom:8px;">[OUTPUT_SCREENSHOT]</span>
                <img src="${data.out}" class="ss-img" alt="Output Result">
            </div>
        `;
    }

    function closeLab() {
        document.getElementById('lab-list-main').style.display = 'block';
        document.getElementById('lab-detail-box').classList.remove('active');
    }

    const song = document.getElementById('vanity-audio');
    const playBtn = document.getElementById('play-pause-btn');
    const progressFill = document.getElementById('music-progress-fill');
    const heartHandle = document.getElementById('music-handle-heart');
    const currentTimeText = document.getElementById('current-time');

    playBtn.onclick = () => {
        if (song.paused) {
            song.play();
            playBtn.innerText = "II PAUSE";
        } else {
            song.pause();
            playBtn.innerText = "▷ PLAY";
        }
    };

    song.ontimeupdate = () => {
        if (song.duration) {
            const pos = (song.currentTime / song.duration) * 100;
            progressFill.style.width = pos + "%";
            heartHandle.style.left = pos + "%";
            
            let mins = Math.floor(song.currentTime / 60);
            let secs = Math.floor(song.currentTime % 60);
            currentTimeText.innerText = mins + ":" + (secs < 10 ? '0' : '') + secs;
        }
    };

    document.getElementById('vol-control').oninput = (e) => {
        song.volume = e.target.value;
    };