// let contatore = 0;

// function aggiornaContatore(){
//     contatore ++;
//     document.getElementById("clickCount").innerText = contatore;
// }


let button = document.getElementById("button");
    let div = document.getElementById("div");
    let clickCount = 0;

    button.innerText = "Cambia colore";

    function aggiornaColore() {
        

        // Cambia colore al primo clic
        div.style.backgroundColor = "red";

        // Incrementa il contatore di clic
        clickCount++;

        // Se il numero di clic è pari, imposta le dimensioni a 400x400, altrimenti mantieni 300x300
        if (clickCount % 2 === 0) {
            div.style.width = "400px";
            div.style.height = "400px";
        } else {
            div.style.width = "300px";
            div.style.height = "300px";
        }
    }

    div.addEventListener("mouseenter", function() {
        div.style.backgroundColor = "blue";
    });

    div.addEventListener("mouseleave", function() {
        div.style.backgroundColor = "red"; // Cambia colore di base quando il mouse esce
    });

    // Imposta le dimensioni a 300x300 con un ritardo di 1 secondo
    let timeoutId = setTimeout(function() {
        div.style.width = "300px";
        div.style.height = "300px";
    }, 1000);

// let clickCount = 0;

// button.addEventListener("click", function(){
//     clickCount += 1;
//     console.log(clickCount);
//     if(clickCount % 2 )
// })