const imagens = document.querySelectorAll('.unit-image');

        // Adiciona eventos de mouseenter e mouseleave a todas as imagens
        imagens.forEach(function(imagem) {
            imagem.addEventListener('mouseenter', function() {
                // Altera o tamanho da imagem quando o mouse entra
                this.style.transform = 'scale(1.1)';
            });

            imagem.addEventListener('mouseleave', function() {
                // Restaura o tamanho original quando o mouse sai
                this.style.transform = 'scale(1)';
            });
        });