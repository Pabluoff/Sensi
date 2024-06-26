// Menu btn
document.querySelector('.header__btn').addEventListener('click', () => {
    document.documentElement.classList.toggle('menu-active')
    document.documentElement.classList.toggle('overflow-y-hidden')
})

Array.from(document.querySelectorAll('.header__menu a')).forEach(menuLink => {
    menuLink.addEventListener('click', () => {
        document.documentElement.classList.remove('menu-active')
        document.documentElement.classList.remove('overflow-y-hidden')
    })
})

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('custom-video');
    var playButton = document.getElementById('play-button');
    var soundIcon = document.getElementById('sound-icon');
    var progressBar = document.getElementById('progress-bar');
    var isFirstPlay = true;

    // Função para iniciar ou pausar o vídeo quando o botão de reprodução for clicado
    function togglePlayPause() {
        if (isFirstPlay) {
            video.currentTime = 0; // Reinicia o vídeo para o início
            video.play();
            video.muted = false; // Desmuta o vídeo
            playButton.style.display = 'none'; // Oculta o botão de reprodução quando o vídeo está sendo reproduzido
            soundIcon.style.display = 'none'; // Oculta o ícone de som silenciado e o texto
            isFirstPlay = false;
        } else {
            if (video.paused) {
                video.play();
                playButton.style.display = 'none'; // Oculta o botão de reprodução quando o vídeo está sendo reproduzido
            } else {
                video.pause();
            }
        }
    }

    // Atualiza a barra de progresso do vídeo
    function updateProgressBar() {
        var progress = (video.currentTime / video.duration) * 100;
        var scaledProgress = Math.pow(progress / 100, 0.5) * 100; // Aplicando a função de escala
        progressBar.style.width = scaledProgress + '%';

        // Verifica se o vídeo chegou ao fim
        if (progress === 100) {
            isFirstPlay = true;
            playButton.style.display = 'block'; // Exibe o botão de reprodução quando o vídeo termina
        } else {
            // Continua a atualização da barra de progresso enquanto o vídeo estiver sendo reproduzido
            requestAnimationFrame(updateProgressBar);
        }

        // Verifica se o vídeo está no fim e oculta o ícone de som
        if (video.currentTime >= video.duration - 0.1) {
            soundIcon.style.display = 'none';
        }
    }

    // Evento de clique no botão de reprodução
    playButton.addEventListener('click', function () {
        togglePlayPause();
        progressBar.style.display = 'block'; // Exibe a barra de progresso após o primeiro clique
    });

    // Evento de clique no vídeo
    video.addEventListener('click', function () {
        togglePlayPause();
        progressBar.style.display = 'block'; // Exibe a barra de progresso após o primeiro clique
    });

    // Evento de pausa do vídeo
    video.addEventListener('pause', function () {
        playButton.style.display = 'block'; // Exibe o botão de reprodução quando o vídeo está pausado
    });

    // Evento de tempo do vídeo
    video.addEventListener('timeupdate', function () {
        updateProgressBar();
    });

    // Evento para exibir o ícone de som silenciado e o texto antes do primeiro clique
    playButton.addEventListener('mouseover', function () {
        if (isFirstPlay && video.currentTime < video.duration - 0.1) {
            soundIcon.style.display = 'block';
        }
    });

    // Evento para ocultar o ícone de som silenciado e o texto após o primeiro clique
    playButton.addEventListener('mouseout', function () {
        if (isFirstPlay) {
            soundIcon.style.display = 'none';
        }
    });

    // Evento de clique no ícone de som
    soundIcon.addEventListener('click', function () {
        video.muted = !video.muted; // Alterna o estado de mudo do vídeo
        if (!video.muted) {
            video.currentTime = 0; // Reinicia o vídeo para o início
            video.play();
            soundIcon.style.display = 'none'; // Oculta o ícone de som silenciado e o texto
            isFirstPlay = false;
            progressBar.style.display = 'block'; // Exibe a barra de progresso após o primeiro clique
        }
    });

    // Oculta a barra de progresso durante o autoplay
    video.addEventListener('play', function () {
        if (isFirstPlay) {
            progressBar.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var soundIcon = document.getElementById('sound-icon');
    var icon = soundIcon.querySelector('i');
    var volumeIcons = ['fa-volume-off', 'fa-volume-low'];
    var currentIndex = 0;

    function toggleVolumeIcon() {
        currentIndex = (currentIndex + 1) % volumeIcons.length;
        icon.className = 'fa-solid ' + volumeIcons[currentIndex];
        setTimeout(toggleVolumeIcon, 1000);
    }

    toggleVolumeIcon();
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000, // Tempo em milissegundos 
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 16
            }
        },
        on: {
            slideChange: function () {
                // Oculta todas as imagens
                document.querySelectorAll(".swiper-slide img").forEach(function (img) {
                    img.classList.add("swiper-slide-hidden");
                });
                // Exibe as imagens dos slides visíveis em dispositivos desktop
                var visibleSlides = this.slides.slice(this.activeIndex, this.activeIndex + this.params.slidesPerView);
                visibleSlides.forEach(function (slide) {
                    var img = slide.querySelector("img");
                    if (img) {
                        img.classList.remove("swiper-slide-hidden");
                    }
                });
            }
        }
    });
});

//FAQ
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            const answer = this.querySelector(".faq-answer");
            const isOpen = answer.classList.contains("open");

            const allAnswers = document.querySelectorAll(".faq-answer");
            const allIcons = document.querySelectorAll(".faq-question i");
            allAnswers.forEach(ans => {
                ans.classList.remove("open");
            });
            allIcons.forEach(icon => {
                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");
            });

            if (!isOpen) {
                answer.classList.add("open");
                const icon = this.querySelector(".faq-question i");
                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");
            } else {
                answer.classList.remove("open");
                const icon = this.querySelector(".faq-question i");
                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");
            }
        });
    });
});


// função do contato
const handleSubmit = async (event) => {
    event.preventDefault();

    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    const charCountElement = document.getElementById('charCount');

    const name = form.querySelector('input[name=name]').value;
    const email = form.querySelector('input[name=email]').value;
    const message = form.querySelector('textarea[name=message]').value;

    submitButton.disabled = true;

    submitButton.innerHTML = 'Enviando...';
    submitButton.style.backgroundColor = '#5a5a5a';

    try {
        const response = await fetch('https://api.sheetmonkey.io/form/wsG7cDA8LsPr5PzQSEu5Bk', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            submitButton.innerHTML = '<i class="uil uil-check"></i> Enviado com sucesso';
            submitButton.style.backgroundColor = '#2ecc71';
            form.reset();
            charCountElement.textContent = '0 ';
            charCountElement.className = 'char-counter green';

            setTimeout(() => {
                submitButton.innerHTML = 'Enviar Mensagem';
                submitButton.style.backgroundColor = '';
            }, 3000);

        } else {

            submitButton.innerHTML = 'Erro ao Enviar';
            submitButton.style.backgroundColor = '#e74c3c';
        }
    } catch (error) {
        console.error('Erro ao enviar a mensagem:', error);
        submitButton.innerHTML = 'Erro ao Enviar';
        submitButton.style.backgroundColor = '#e74c3c';
    } finally {
        submitButton.style.animation = 'none';
        submitButton.disabled = false;
    }
};

document.querySelector('form').addEventListener('submit', handleSubmit);

// Função para atualizar a contagem de caracteres
function updateCharCount() {
    const textarea = document.querySelector('textarea[name=message]');
    const charCount = textarea.value.length;
    const charCountElement = document.getElementById('charCount');

    charCountElement.textContent = charCount + ' ';

    if (charCount <= 100) {
        charCountElement.className = 'char-counter green';
    } else if (charCount <= 150) {
        charCountElement.className = 'char-counter yellow';
    } else {
        charCountElement.className = 'char-counter red';
    }
}

// Adicionar evento de digitação para a atualização da contagem de caracteres
document.querySelector('textarea[name=message]').addEventListener('input', updateCharCount);


// Contador de caracters
function countChars(input) {
    const charCountElement = document.getElementById('charCount');
    const charCounter = input.value.length;

    charCountElement.textContent = charCounter + ' ';

    if (charCounter <= 100) {
        charCountElement.className = 'char-counter green';
    } else if (charCounter <= 150) {
        charCountElement.className = 'char-counter yellow';
    } else {
        charCountElement.className = 'char-counter red';
    }
}

