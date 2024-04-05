// Esta função cria um <iframe> (e player do YouTube) após o carregamento da API
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'video-1', // Insira o ID do primeiro vídeo aqui
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Função chamada sempre que o estado do player muda
function onPlayerStateChange(event) {
    // Verifica se o vídeo terminou
    if (event.data == YT.PlayerState.ENDED) {
        // Carrega um novo vídeo ID
        player.loadVideoById("video-2"); // Insira o ID do segundo vídeo aqui
    }
}

// Carregar a API de IFrame de forma assíncrona
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
