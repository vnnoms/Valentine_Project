document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const loginBtn = document.getElementById('loginButton');

    // Floating Hearts Background
    function createHearts() {
        if (!body) return;
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0'; container.style.left = '0'; 
        container.style.width = '100%'; container.style.height = '100%';
        container.style.pointerEvents = 'none'; container.style.zIndex = '-1';
        body.appendChild(container);

        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-symbol';
            heart.innerHTML = '&hearts;';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            heart.style.opacity = '0.3';
            container.appendChild(heart);
        }
    }

    // Login Button Logic
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const userField = document.getElementById('userInput');
            const passField = document.getElementById('passInput');
            const errorMsg = document.getElementById('errorMessage');
            if (userField.value === "Aluvia Daniella" && passField.value === "17112025") {
                goToSlide(2);
            } else {
                if (errorMsg) errorMsg.style.display = 'block';
            }
        });
    }

    window.goToSlide = function(n) {
        document.querySelectorAll('.slide').forEach(s => s.style.display = 'none');
        document.getElementById(`slide-${n}`).style.display = 'flex';
        if(n === 1) resetTheme();
    };

    // Interactive Heart Logic
    let tapCount = 0;
    const maxTaps = 10;
    const mainHeart = document.getElementById('main-heart');
    const progressFill = document.getElementById('progress-fill');

    if (mainHeart) {
        mainHeart.onclick = function() {
            if (tapCount < maxTaps) {
                tapCount++;
                mainHeart.style.transform = "scale(1.2)";
                setTimeout(() => { mainHeart.style.transform = "scale(1)"; }, 100);
                progressFill.style.width = (tapCount / maxTaps) * 100 + "%";
                confetti({ particleCount: 15, spread: 40, origin: { y: 0.7 }, colors: ['#c8a1b1'] });

                if (tapCount === maxTaps) {
                    mainHeart.style.transition = "all 0.5s ease-out";
                    mainHeart.style.transform = "scale(8)"; mainHeart.style.opacity = "0";
                    document.querySelector('.progress-container').style.opacity = '0';
                    setTimeout(() => {
                        goToSlide(3);
                        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
                    }, 500);
                }
            }
        };
    }
    // Music section logic
    // Song Data
    const playlistData = {
        'musics/whoknows.mp3': {
            title: 'Who Knows',
            author: 'Daniel Caesar',
            image: 'images/whoknows-danielcaesar.png', 
            theme: {
                bg: '#1a1a1d', box: '#2d2d35', text: '#e0e0e0', accent: '#6f7d96'
            },
            lyrics: [
                { time: 0, text: "Maybe we get married one day, but who knows?" },
                { time: 5, text: "Think I'll take that thought to the grave, but who knows?" },
                { time: 10, text: "I know that I'll love you always" },
                { time: 15, text: "Yeah, girl you, and I'd like that" }
            ]
        },
        'musics/disarankandibandung.mp3': {
            title: 'disarankan di bandung',
            author: 'Dongker, Jason Ranti',
            image: 'images/disarankandibandung-dongker-jasonranti.png', 
            theme: {
                bg: '#fdf6e3', box: '#fff0f5', text: '#5e4b45', accent: '#d8a7b1'
            },
            lyrics: [
                { time: 10, text: "Silau layar ponsel terlihat ajakan" },
                { time: 13, text: "Bertemu di lapang kampusku yang lama" },
                { time: 17, text: "Mengenang obrolan dan berbagai ingatan" },
                { time: 22, text: "P'ristiwa penting di masa laluku" },
                { time: 42, text: "Tak hanya sekali, ku merasa mesra" },
                { time: 46, text: "Berharap mentari terbit dari barat" },  
                { time: 50, text: "Kami sudah muak, putus asa besar" },
                { time: 55, text: "Mimpi tak pernah berjalan lancar" },
                { time: 59, text: "Bajingan! Keparat! Baiknya m'reka masuk neraka" },
                { time: 67, text: "Untungnya ku bertemu denganmu" },
                { time: 72, text: "Di sela sempit hidup ini" },
                { time: 75, text: "Di Bandung, di sana" },
                { time: 85, text: "Kulihat wajah yang lain" },
                { time: 90, text: "Di Bandung, di mana" },
                { time: 95, text: "Gerangan dia berada?" },
                { time: 100, text: "Di Bandung, di Ganesha" },
                { time: 105, text: "Bibirnya merah di kanvas" },
                { time: 110, text: "Di Bandung, di Ganesha" },
                { time: 115, text: "Kulihat bukunya di kelas" },
                { time: 120, text: "Di Bandung, di Ganesha" },
                { time: 125, text: "Nama kita terukir jelas" },
                { time: 130, text: "Di Bandung, di Ganesha" },
                { time: 135, text: "Waktu-waktu merintis" },
                { time: 140, text: "Di Bandung, di Ganesha" },
                { time: 145, text: "Rasa kita dibaptis" }
            ]
        },
        'musics/diakhirperang.mp3': {
            title: 'Di Akhir Perang',
            author: 'Nadin Amizah',
            image: 'images/diakhirperang-nadinamizah.png', 
            theme: {
                bg: '#e6f7ff', box: '#ffffff', text: '#4a4a4a', accent: '#9ad7ff'
            },
            lyrics: [
                { time: 0, text: "Kuwarnai tanganmu yang mati" },
                { time: 5, text: "Biar kau lihat dunia tak lagi menyakiti" },
                { time: 10, text: "Dan kubisikkan asal kau tahu bagaimana" },
                { time: 15, text: "Rasanya bahagia sepenuhnya sampai" },
                { time: 20, text: "Ku merasa lega, kau merasa lega" },
                { time: 25, text: "Ku sampai di sana" }
            ]
        }
    };

    // Changing Music Function
    window.changeMusic = function(source) {
        const songData = playlistData[source];
        if (!songData) return;

        const letterView = document.getElementById('letter-view');
        const musicView = document.getElementById('music-view');
        const audio = document.getElementById('player-audio');

        // Dynamic Theme Update
        document.documentElement.style.setProperty('--bg-dynamic', songData.theme.bg);
        document.documentElement.style.setProperty('--box-dynamic', songData.theme.box);
        document.documentElement.style.setProperty('--text-dynamic', songData.theme.text);
        document.documentElement.style.setProperty('--accent-dynamic', songData.theme.accent);

        // Fade Transition Letter -> Music
        if (!letterView.classList.contains('box-hidden')) {
            letterView.classList.add('box-hidden'); 
            setTimeout(() => {
                letterView.style.display = 'none';
                musicView.style.display = 'block';
                updateMusicContent(songData); 
                setTimeout(() => {
                    musicView.classList.remove('box-hidden'); 
                }, 50);
            }, 500);
        } else {
            updateMusicContent(songData); 
        }

        // Audio Play with Delay
        if (audio) {
            const delayPlay = letterView.classList.contains('box-hidden') ? 0 : 600;
            setTimeout(() => {
                audio.src = source;
                audio.play().catch(()=> console.log("Play manual needed"));
            }, delayPlay);
            
            // Lyrics Sync
            audio.ontimeupdate = () => {
                songData.lyrics.forEach((line, index) => {
                    if (audio.currentTime >= line.time) {
                        const allLines = document.querySelectorAll('.lyric-line');
                        allLines.forEach(el => el.classList.remove('active'));

                        const activeLine = document.getElementById(`line-${index}`);
                        if (activeLine) {
                            activeLine.classList.add('active');

                            const wrapper = document.getElementById('lyrics-wrapper');
                            const lyricsActiveContainer = document.getElementById('lyrics-active');
                            
                            const scrollPos = activeLine.offsetTop - (wrapper.offsetHeight / 2) + (activeLine.offsetHeight / 2);
                            lyricsActiveContainer.style.top = `-${scrollPos}px`;
                        }
                    }
                });
            };
        }
    };

    // Title and Lyrics Update
    function updateMusicContent(data) {
        document.getElementById('display-title').innerText = data.title;
        document.getElementById('display-author').innerText = data.author;
        document.getElementById('album-art').src = data.image; // Ganti gambar album!

        const lyricsActive = document.getElementById('lyrics-active');
        lyricsActive.innerHTML = ''; lyricsActive.style.top = "0px";
        
        data.lyrics.forEach((line, index) => {
            const p = document.createElement('p');
            p.innerText = line.text; p.className = 'lyric-line'; p.id = `line-${index}`;
            lyricsActive.appendChild(p);
        });
    }

    // Color reset
    function resetTheme() {
        document.documentElement.style.setProperty('--bg-dynamic', 'var(--isabelline)');
        document.documentElement.style.setProperty('--box-dynamic', 'var(--pistachio)');
        document.documentElement.style.setProperty('--text-dynamic', 'var(--van-dyke)');
        document.documentElement.style.setProperty('--accent-dynamic', 'var(--pink-lavender)');
    }

    createHearts();
});