document.addEventListener('DOMContentLoaded', function () {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleFade'), {
        interval: 3000, // Tempo entre as transições automáticas (3 segundos)
        wrap: true // Permite que o carrossel volte ao primeiro item após o último
    });

    // Personalizando a transição das imagens
    document.getElementById('carouselExampleFade').addEventListener('slide.bs.carousel', function (event) {
        var items = document.querySelectorAll('.carousel-item');
        var nextItem = items[(event.to + 1) % items.length]; // Próximo item
        nextItem.style.transform = 'translateX(-25%)'; // Mantém a próxima imagem parcialmente visível
    });
});