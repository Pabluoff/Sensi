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
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var thumbnailContainer = document.getElementById('thumbnail-container');
    var thumbnail = document.getElementById('thumbnail');
    var thumbSecond = 5; // Defina o segundo desejado para a thumbnail
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

    // Evento de carregamento de dados do vídeo
    video.addEventListener('loadeddata', function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        video.currentTime = thumbSecond; // Define o segundo desejado do vídeo
        setTimeout(function () {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            var thumbnailURL = canvas.toDataURL('image/jpeg');
            thumbnail.src = thumbnailURL;
            video.currentTime = 0; // Volta o vídeo para o início
        }, 200); // Aguarda 200ms para garantir que o vídeo tenha carregado e mudado para o segundo desejado
    });

    // Evento de clique na thumbnail para reproduzir o vídeo
    thumbnail.addEventListener('click', function () {
        video.play();
        thumbnail.style.display = 'none'; // Oculta a thumbnail quando o vídeo é reproduzido
        playButton.style.display = 'none'; // Oculta o botão de reprodução quando o vídeo é reproduzido
    });

    video.src = 'img/VSL-IGaming.mp4';
});
