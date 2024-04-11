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
        slidesPerView: 1, // Uma imagem por vez em dispositivos móveis
        spaceBetween: 30,
        loop: true,
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
                slidesPerView: 3, // Três imagens por vez em dispositivos desktop
                spaceBetween: 30
            }
        },
        on: {
            slideChange: function () {
                // Oculta todas as imagens
                document.querySelectorAll(".swiper-slide img").forEach(function (img) {
                    img.classList.add("swiper-slide-hidden");
                });
                // Exibe as imagens dos três slides visíveis
                var visibleSlides = this.slides.slice(this.activeIndex, this.activeIndex + 3);
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
