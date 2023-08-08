function mostrarMenu() {
    var menu = document.getElementById("opc");
    var icone = document.getElementById("icone");
    var header = document.getElementById("header");

    if (getComputedStyle(menu).display == 'none') {
        header.classList.remove("header")
        header.classList.add("headerCell")
        menu.style.display = "flex";
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
    }

    else {
        menu.style.display = "none";
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars")
    }
}