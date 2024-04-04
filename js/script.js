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

    // Evento de clique no botão de reprodução
    playButton.addEventListener('click', function () {
        togglePlayPause();
    });

    // Evento de clique no vídeo
    video.addEventListener('click', function () {
        togglePlayPause();
    });

    // Evento de pausa do vídeo
    video.addEventListener('pause', function () {
        playButton.style.display = 'block'; // Exibe o botão de reprodução quando o vídeo está pausado
    });


    // Evento para exibir o ícone de som silenciado e o texto antes do primeiro clique
    playButton.addEventListener('mouseover', function () {
        if (isFirstPlay) {
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
        }
    });
});
