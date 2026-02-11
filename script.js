document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const loginBtn = document.getElementById('loginButton');

    // Floating Hearts
    function createHearts() {
        if (!body) return;
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-symbol';
            heart.innerHTML = '&hearts;';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            body.appendChild(heart);
        }
    }

    // Username & Password
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const userField = document.getElementById('userInput');
            const passField = document.getElementById('passInput');
            const errorMsg = document.getElementById('errorMessage');

            if (userField.value === "Aluvia Daniella" && passField.value === "17112025") {
                goToSlide(2);
            } else {
                if (errorMsg) errorMsg.style.display = 'block';
                userField.style.border = "1px solid red";
                passField.style.border = "1px solid red";
            }
        });

        loginBtn.addEventListener('mousemove', (e) => {
            const rect = loginBtn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            loginBtn.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        loginBtn.addEventListener('mouseleave', () => {
            loginBtn.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
        });
    }

    window.goToSlide = function(number) {
        document.querySelectorAll('.slide').forEach(s => {
            s.style.display = 'none';
        });
        const target = document.getElementById(`slide-${number}`);
        if (target) {
            target.style.display = 'flex';
        }
    };

    // Heart & Progress Bar
    let tapCount = 0;
    const maxTaps = 10;
    const mainHeart = document.getElementById('main-heart');
    const progressFill = document.getElementById('progress-fill');
    const viewBtn = document.getElementById('viewMessageBtn');

    if (mainHeart) {
        mainHeart.onclick = function() {
            if (tapCount < maxTaps) {
                tapCount++;
                
                mainHeart.style.transform = "scale(1.2)";
                setTimeout(() => { mainHeart.style.transform = "scale(1)"; }, 100);

                let percentage = (tapCount / maxTaps) * 100;
                if (progressFill) progressFill.style.width = percentage + "%";
                
                confetti({
                    particleCount: 10,
                    spread: 30,
                    origin: { y: 0.7 },
                    colors: ['#c8a1b1']
                });

                if (tapCount === maxTaps) {
                    mainHeart.style.transition = "all 0.5s ease-out";
                    mainHeart.style.transform = "scale(8)";
                    mainHeart.style.opacity = "0";

                    const progressContainer = document.querySelector('.progress-container');
                    if (progressContainer) progressContainer.style.display = 'none';

                    setTimeout(() => {
                        mainHeart.style.display = 'none'; 
                        if (viewBtn) viewBtn.style.display = 'block'; 
                        
                        confetti({
                            particleCount: 200,
                            spread: 100,
                            origin: { y: 0.6 },
                            colors: ['#c8a1b1', '#ffffff']
                        });
                    }, 500);
                }
            }
        };
    }

    if (viewBtn) {
        viewBtn.addEventListener('mousemove', (e) => {
            const rect = viewBtn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            viewBtn.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        viewBtn.addEventListener('mouseleave', () => {
            viewBtn.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
        });
    }

    createHearts();
});