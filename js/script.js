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

    // Função para iniciar ou pausar o vídeo quando o botão de reprodução for clicado
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none'; // Oculta o botão de reprodução quando o vídeo está sendo reproduzido
        } else {
            video.pause();
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
});


document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('custom-video');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var targetSecond = 1; // Segundo desejado

    video.addEventListener('loadedmetadata', function () {
        video.currentTime = targetSecond; // Avança para o segundo desejado
    });

    video.addEventListener('seeked', function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        var posterURL = canvas.toDataURL('image/jpeg');
        video.setAttribute('poster', posterURL);
    });

    video.src = 'img/VSL-IGaming.mp4';
});
