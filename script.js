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

    const sidebar = document.querySelector('.music-sidebar');
    
    if (sidebar) {
        sidebar.addEventListener('click', function(e) {
            if (window.innerWidth <= 1280) {
                this.classList.toggle('expanded');
                if (navigator.vibrate) navigator.vibrate(30); 
            }
        });
    }

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

            // Password Check
            // CHANGE PASSWORD AND USERNAME HERE IF NEEDED 
            if (userField.value === "Aluvia Daniella" && passField.value === "17112025") {
                
                loginBtn.innerHTML = "Access Granted! &hearts;"; 
                loginBtn.style.backgroundColor = "#48372f";
                loginBtn.style.color = "white";
                loginBtn.style.transform = "scale(0.95)"; 
                loginBtn.style.transition = "all 0.3s ease";

                setTimeout(() => {
                    goToSlide(2);
                }, 1000); 

            } else {
                loginBtn.style.animation = "shake 0.5s"; 
                setTimeout(() => loginBtn.style.animation = "", 500);
                alert("Sorry, your acces has been denied");
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
    // SONG DATA, CHANGE IF NEEDED
    const playlistData = {
        'musics/whoknows.mp3': {
            title: 'Who Knows',
            author: 'Daniel Caesar',
            image: 'images/whoknows-danielcaesar.png', 
            meaning: "'Maybe we get married one day, but who knows?' has always made me think about what if the world is not this cruel to us. About the what ifs of our story would lead to a happy ending, eventually. But who knows? Maybe in another life, in another universe, we would be able to live that happily ever after we always dreamed of. But in this life, I just want you to know that I will love you always, no matter what happens.",
            theme: {
                bg: '#1a1a1d', box: '#2d2d35', text: '#e0e0e0', accent: '#6f7d96'
            },
            lyrics: [
                { time: 0, text: "I'll probably be a waste of your time, but who knows?" },
                { time: 8, text: "Chances are I'll step out of line, but who knows?" },
                { time: 16, text: "Lately, you've set up in my mind" },
                { time: 19, text: "Yeah, girl, you, and I like that" },
                { time: 32, text: "Lately, I've been thinking that perhaps I am a coward"},
                { time: 40, text: "Hiding in a disguise of an ever-giving flower"},
                { time: 48, text: "Incompetent steward of all of that sweet, sweet power"},
                { time: 64, text: "Yesterday was feeling so good, now it's gone"},
                { time: 71, text: "I'd feel like that always if I could, is that wrong?"},
                { time: 80, text: "Tell me 'bout the city you're from"},
                { time: 82, text: "Is it hot? Does it snow there?"},
                { time: 95, text: "Lately, I've been thinking 'bout my precarious future"},
                { time: 103, text: "Will you be there with me by my side, my girl, my shooter?"},
                { time: 111, text: "Who's to say who calculates? Not me, I'm no computer" },
                { time: 127, text: "Is it a crime to be unsure?" },
                { time: 133, text: "In time we'll find" },
                { time: 137, text: "If it's sustainable" },
                { time: 143, text: "You're pure, you're kind" },
                { time: 146, text: "Mature, divine" },
                {  time : 150, text: "You might be too good for me, unattainable" },
                { time: 190, text: "Maybe we get married one day, but who knows?" },
                { time: 198, text: "Think I'll take that thought to the grave, but who knows?" },
                { time: 207, text: "I know that I'll love you always" },
                { time: 210, text: "Yeah, girl you, and I'd like that" }
            ]
        },
        'musics/disarankandibandung.mp3': {
            title: 'disarankan di bandung',
            author: 'Dongker, Jason Ranti',
            image: 'images/disarankandibandung-dongker-jasonranti.png',
            meaning: "'Bajingan! Keparat! Baiknya m'reka masuk neraka untungnya ku bertemu denganmu di sela sempit hidup' sentences which means despite all of the mockery, sorrows, disdain thrown to us, I will always be grateful to have you in my life. You are my light in the dark and my hope in despair. No matter how hard life is, as long as I have you by my side, I believe we can overcome anything together.",
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
                { time: 80, text: "Kulihat wajah yang lain" },
                { time: 83, text: "Di Bandung, di mana" },
                { time: 88, text: "Gerangan dia berada?" },
                { time: 100, text: "Di Bandung, di Ganesha" },
                { time: 105, text: "Bibirnya merah di kanvas" },
                { time: 108, text: "Di Bandung, di Ganesha" },
                { time: 113, text: "Masa lalu melintas"}, 
                { time: 116, text: "Di Bandung, di Ganesha" },
                { time: 121, text: "Kulihat bukunya di kelas" },
                { time: 124, text: "Di Bandung, di Ganesha" },
                { time: 129, text: "Nama kita terukir jelas" },
                { time: 132, text: "Di Bandung, di Ganesha" },
                { time: 138, text: "Waktu-waktu merintis" },
                { time: 141, text: "Di Bandung, di Ganesha" },
                { time: 146, text: "Rasa kita dibaptis" }
            ]
        },
        'musics/diakhirperang.mp3': {
            title: 'Di Akhir Perang',
            author: 'Nadin Amizah',
            image: 'images/diakhirperang-nadinamizah.png', 
            meaning: "'Dan kubisikkan asal kau tahu bagaimana rasanya bahagia sepenuhnya sampai ku merasa lega, kau merasa lega' the song you gave me. I cried for several times on my first time listening to this, something has shattered within me. I believe, the joyous final moment of us still awaiting for our arrival. Whenever that happens, I hope we can get ourselves to that certain point Nadin has told us.",
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
           // --- UPDATE LOGIKA SCROLL LIRIK (DENGAN KOREKSI VISUAL) ---
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
                            
                            // RUMUS CENTER + KOREKSI MANUAL
                            // offsetTop: Posisi lirik dari atas
                            // wrapper.offsetHeight / 2: Setengah tinggi kotak (titik tengah)
                            // activeLine.offsetHeight / 2: Setengah tinggi teks liriknya
                            
                            let scrollPos = activeLine.offsetTop - (wrapper.offsetHeight / 2) + (activeLine.offsetHeight / 2);
                            
                            // KOREKSI: Kurangi 20px biar naik dikit (Visual Adjustment)
                            scrollPos = scrollPos + 10; 

                            lyricsActiveContainer.style.top = `-${scrollPos}px`;
                        }
                    }
                });
            };
        }
    };

    // Title and Lyrics Update
    // --- 2. UPDATE LOGIKA GANTI LAGU ---
    function updateMusicContent(data) {
        document.getElementById('display-title').innerText = data.title;
        document.getElementById('display-author').innerText = data.author;
        document.getElementById('album-art').src = data.image;

        // >> BAGIAN PENTING: UPDATE MAKNA SECARA OTOMATIS <<
        const meaningText = document.getElementById('song-meaning-text');
        if (meaningText) {
            // Langsung isi dengan makna dari data lagu
            meaningText.innerText = data.meaning; 
        }

        // Reset kotak makna jadi tertutup (kuncup) setiap ganti lagu
        // Biar rapi, nanti Aluvia buka sendiri kalau mau baca
        const meaningBox = document.querySelector('.meaning-phantom-box');
        if (meaningBox) {
            meaningBox.classList.remove('expanded');
        }

        // ... (kode lirik di bawahnya biarkan saja) ...
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

    // --- FUNGSI BARU: GENERATE PLAYLIST KEREN (3 KOLOM) ---
    function generatePlaylist() {
        const sidebar = document.querySelector('.music-sidebar');
        
        // 1. Reset sidebar, sisakan judul "OUR PLAYLIST" aja
        // Kita simpan elemen <p> yang sudah ada biar panah dropdown-nya aman
        const headerTitle = sidebar.querySelector('p');
        sidebar.innerHTML = ''; 
        sidebar.appendChild(headerTitle);

        // 2. Ambil data dari playlistData
        for (let source in playlistData) {
            let song = playlistData[source];

            // Bikin Kotak Lagu Utama
            let item = document.createElement('div');
            item.className = 'song-item';

            // BAGIAN KIRI: Gambar Album
            let imgPart = document.createElement('div');
            imgPart.className = 'part-img';
            let img = document.createElement('img');
            img.src = song.image; // Ambil gambar asli dari data
            imgPart.appendChild(img);

            // BAGIAN TENGAH: Judul Lagu
            let titlePart = document.createElement('div');
            titlePart.className = 'part-title';
            titlePart.innerText = song.title;

            // BAGIAN KANAN: Penyanyi
            let artistPart = document.createElement('div');
            artistPart.className = 'part-artist';
            artistPart.innerText = song.author;

            // Gabungin (Rakut) elemennya
            item.appendChild(imgPart);
            item.appendChild(titlePart);
            item.appendChild(artistPart);

            // Bikin bisa diklik untuk mainkan lagu
            item.addEventListener('click', function(e) {
                // Stop event biar gak nutup dropdown (opsional)
                e.stopPropagation(); 
                changeMusic(source);
                
                // Tutup dropdown otomatis di HP setelah milih lagu
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('expanded');
                }
            });

            sidebar.appendChild(item);
        }
    }
    generatePlaylist();

    // Meaning Box Toggle
    const meaningBox = document.querySelector('.meaning-phantom-box');
    if (meaningBox) {
        meaningBox.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    }
});