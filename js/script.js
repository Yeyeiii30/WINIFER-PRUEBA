/* ============================================================
   CUMPLEAÑOS 24
   19 AÑOS DESPUÉS
   JAVASCRIPT PRINCIPAL
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================================
       ELEMENTOS
       ======================================================== */

    const btnComenzar = document.getElementById("btnComenzar");
    const btnRuleta = document.getElementById("btnRuleta");
    const btnGirar = document.getElementById("btnGirar");
    const btnCarta = document.getElementById("btnCarta");

    const ruleta = document.getElementById("ruleta");
    const cartaContenido = document.getElementById("cartaContenido");

    const carta1 = document.getElementById("carta1");
    const carta2 = document.getElementById("carta2");
    const carta3 = document.getElementById("carta3");
    const carta4 = document.getElementById("carta4");
    const carta5 = document.getElementById("carta5");
    const carta6 = document.getElementById("carta6");
    const carta7 = document.getElementById("carta7");

    const ruletaSeccion =
        document.getElementById("ruletaSeccion");

    const cartaFinal =
        document.getElementById("carta");

    const seccionFinal =
        document.getElementById("final");


    /* ========================================================
       CONFIGURACIÓN DE LA RULETA
       ======================================================== */

    let rotacionActual = 0;
    let girando = false;

    const DURACION_RULETA = 5000;


    /* ========================================================
       FUNCIÓN GENERAL PARA DESPLAZARSE
       ======================================================== */

    function irA(elemento) {

        if (!elemento) return;

        elemento.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    /* ========================================================
       COMENZAR RECORRIDO
       ======================================================== */

    if (btnComenzar) {

        btnComenzar.addEventListener("click", () => {

            irA(carta1);

        });

    }


    /* ========================================================
       BOTÓN DE LA CARTA 7
       ======================================================== */

    if (btnRuleta) {

        btnRuleta.addEventListener("click", () => {

            irA(ruletaSeccion);

        });

    }


    /* ========================================================
       CREAR RESULTADO DE LA RULETA
       ======================================================== */

    function crearResultadoRuleta() {

        let resultado =
            document.getElementById("resultadoRuleta");


        if (!resultado) {

            resultado =
                document.createElement("div");

            resultado.id =
                "resultadoRuleta";

            resultado.className =
                "resultado-ruleta";


            resultado.innerHTML = `

                <div class="resultado-icono">
                    ♥
                </div>

                <h2>
                    ¡24!
                </h2>

                <p>
                    Después de 19 años,
                    había un número que tenía
                    que aparecer.
                </p>

                <p>
                    <strong>
                        Y ese número eres tú.
                    </strong>
                </p>

            `;


            const contenedor =
                document.querySelector(
                    ".ruleta-container"
                );


            if (contenedor) {

                contenedor.appendChild(
                    resultado
                );

            }

        }


        return resultado;

    }


    /* ========================================================
       CONFETI
       ======================================================== */

    function lanzarConfeti() {

        const cantidad = 100;


        const colores = [
            "#ff4f81",
            "#ff1744",
            "#ffffff",
            "#ff8fab",
            "#e91e63"
        ];


        for (let i = 0; i < cantidad; i++) {

            const confeti =
                document.createElement("span");


            confeti.className =
                "confeti";


            confeti.style.backgroundColor =
                colores[
                    Math.floor(
                        Math.random() *
                        colores.length
                    )
                ];


            confeti.style.left =
                Math.random() * 100 + "vw";


            confeti.style.top =
                "-20px";


            const tamanio =
                Math.random() * 8 + 5;


            confeti.style.width =
                tamanio + "px";


            confeti.style.height =
                tamanio * 1.5 + "px";


            const duracion =
                Math.random() * 3 + 3;


            confeti.style.animationDuration =
                duracion + "s";


            confeti.style.animationDelay =
                Math.random() * 1.5 + "s";


            confeti.style.transform =
                `rotate(${Math.random() * 360}deg)`;


            document.body.appendChild(
                confeti
            );


            setTimeout(() => {

                confeti.remove();

            }, (duracion + 2) * 1000);

        }

    }


    /* ========================================================
       GIRAR RULETA
       ======================================================== */

    if (btnGirar && ruleta) {

        btnGirar.addEventListener(
            "click",
            () => {

                if (girando) return;


                girando = true;


                btnGirar.disabled =
                    true;


                btnGirar.textContent =
                    "GIRANDO...";


                /*
                 ----------------------------------------------
                 LIMPIAMOS RESULTADO ANTERIOR
                 ----------------------------------------------
                 */

                const resultadoAnterior =
                    document.getElementById(
                        "resultadoRuleta"
                    );


                if (resultadoAnterior) {

                    resultadoAnterior.remove();

                }


                /*
                 ----------------------------------------------
                 QUITAMOS EL 24 DEL CENTRO
                 ----------------------------------------------
                 */

                ruleta.classList.remove(
                    "numero-24"
                );


                /*
                 ----------------------------------------------
                 POSICIÓN DEL 24

                 En el CSS:

                 1  = 0°
                 2  = 15°
                 ...
                 24 = 345°

                 Para poner el 24 arriba necesitamos
                 terminar en 15°.
                 ----------------------------------------------
                 */

                const posicionFinal = 15;

                const vueltas = 6;

                const gradosPorVuelta = 360;


                const restoActual =
                    (
                        rotacionActual % 360
                        + 360
                    ) % 360;


                let ajuste =
                    posicionFinal -
                    restoActual;


                if (ajuste < 0) {

                    ajuste += 360;

                }


                const nuevaRotacion =
                    rotacionActual +
                    (
                        vueltas *
                        gradosPorVuelta
                    ) +
                    ajuste;


                rotacionActual =
                    nuevaRotacion;


                /*
                 ----------------------------------------------
                 ANIMACIÓN
                 ----------------------------------------------
                 */

                ruleta.style.transition =
                    `transform ${DURACION_RULETA}ms cubic-bezier(0.15, 0.75, 0.15, 1)`;


                ruleta.style.transform =
                    `rotate(${rotacionActual}deg)`;


                /*
                 ----------------------------------------------
                 FINAL DEL GIRO
                 ----------------------------------------------
                 */

                setTimeout(() => {

                    girando = false;


                    btnGirar.disabled =
                        false;


                    btnGirar.textContent =
                        "GIRAR OTRA VEZ";


                    /*
                     MOSTRAR 24
                    */

                    ruleta.classList.add(
                        "numero-24"
                    );


                    /*
                     CREAR MENSAJE
                    */

                    const resultado =
                        crearResultadoRuleta();


                    resultado.classList.add(
                        "mostrar"
                    );


                    /*
                     CONFETI
                    */

                    lanzarConfeti();


                    /*
                     LLEVAR AL RESULTADO
                    */

                    setTimeout(() => {

                        resultado.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }, 500);


                    /*
                     DESPUÉS DEL RESULTADO:

                     Vamos a la carta personal.
                    */

                    setTimeout(() => {

                        irA(cartaFinal);

                    }, 4000);


                }, DURACION_RULETA);

            }
        );

    }


    /* ========================================================
       ABRIR CARTA FINAL
       ======================================================== */

    if (btnCarta && cartaContenido) {

        btnCarta.addEventListener(
            "click",
            () => {

                const abierta =
                    cartaContenido.classList.contains(
                        "mostrar"
                    );


                if (!abierta) {

                    /*
                     ABRIR
                    */

                    cartaContenido.classList.add(
                        "mostrar"
                    );


                    btnCarta.textContent =
                        "CERRAR CARTA";


                    lanzarConfeti();


                    setTimeout(() => {

                        cartaContenido.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }, 400);


                } else {

                    /*
                     CERRAR
                    */

                    cartaContenido.classList.remove(
                        "mostrar"
                    );


                    btnCarta.textContent =
                        "ABRIR MI CARTA";

                }

            }
        );

    }


    /* ========================================================
       OBSERVER PARA ANIMACIONES
       ======================================================== */

    const elementosAnimados =
        document.querySelectorAll(
            `
            .carta-contenedor,
            .foto-carta,
            .ruleta-container,
            .sobre
            `
        );


    const observer =
        new IntersectionObserver(
            (entradas) => {

                entradas.forEach(
                    (entrada) => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "visible"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elementosAnimados.forEach(
        (elemento) => {

            observer.observe(
                elemento
            );

        }
    );


    /* ========================================================
       ANIMACIÓN DE LAS CARTAS
       ======================================================== */

    const cartas =
        document.querySelectorAll(
            ".carta-recorrido"
        );


    cartas.forEach(
        (carta, index) => {

            carta.style.setProperty(
                "--orden",
                index
            );

        }
    );


    /* ========================================================
       GLOBOS
       ======================================================== */

    const globos =
        document.querySelectorAll(
            ".globo"
        );


    globos.forEach(
        (globo, index) => {

            globo.style.animationDelay =
                `${index * 0.8}s`;

        }
    );


    /* ========================================================
       EFECTO DE LA RULETA
       ======================================================== */

    if (ruleta) {

        ruleta.addEventListener(
            "mouseenter",
            () => {

                if (!girando) {

                    ruleta.style.filter =
                        "drop-shadow(0 0 35px rgba(255, 79, 129, 0.55))";

                }

            }
        );


        ruleta.addEventListener(
            "mouseleave",
            () => {

                if (!girando) {

                    ruleta.style.filter =
                        "none";

                }

            }
        );

    }


    /* ========================================================
       EFECTO DE APARICIÓN DE FOTOS
       ======================================================== */

    const fotos =
        document.querySelectorAll(
            ".foto-carta"
        );


    fotos.forEach(
        (foto, index) => {

            foto.style.transitionDelay =
                `${index * 0.05}s`;

        }
    );


    /* ========================================================
       FINAL
       ======================================================== */

    if (seccionFinal) {

        console.log(
            "🎂 Recorrido de cumpleaños preparado."
        );

    }


    /* ========================================================
       MENSAJE DE CONSOLA
       ======================================================== */

    console.log(
        "❤️ 19 años después..."
    );

    console.log(
        "🎂 La historia termina celebrando sus 24 años."
    );

    console.log(
        "🎯 La ruleta siempre termina en 24."
    );

});