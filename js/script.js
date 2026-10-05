// =========================================================
// BOTÓN COMENZAR
// =========================================================

const btnComenzar =
    document.getElementById("btnComenzar");

const pasado =
    document.getElementById("pasado");


btnComenzar.addEventListener("click", () => {

    pasado.scrollIntoView({
        behavior: "smooth"
    });

});


// =========================================================
// BOTÓN PRESENTE
// =========================================================

const btnPresente =
    document.getElementById("btnPresente");

const presente =
    document.getElementById("presente");


btnPresente.addEventListener("click", () => {

    presente.scrollIntoView({
        behavior: "smooth"
    });

});


// =========================================================
// BOTÓN RULETA
// =========================================================

const btnRuleta =
    document.getElementById("btnRuleta");

const ruletaSeccion =
    document.getElementById("ruletaSeccion");


btnRuleta.addEventListener("click", () => {

    ruletaSeccion.scrollIntoView({
        behavior: "smooth"
    });

});