// script.js

document.addEventListener("DOMContentLoaded", function () {
    var pracima = document.getElementById("pracima");
    function checkScrollPosition() {
        window.addEventListener("scroll", function () {
            if (document.documentElement.scrollTop > 500) {
                pracima.style.display = "block";
            } else {
                pracima.style.display = "none";
            }
        });
    }
    checkScrollPosition();

    window.addEventListener("scroll", checkScrollPosition);

    pracima.addEventListener("click", function () {
        pracima();
    });
});


function pracima() {
    var duracao = 600; // Tempo da animação em milissegundos
    var scroll = -window.scrollY / (duracao / 500);

    var intevalo = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scroll);
        } else {
            clearInterval(intevalo);
        }
    }, 500);
}
