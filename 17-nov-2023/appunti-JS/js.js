/* for (inizializzazione; condizione; incremento){
        blocco di codice da eseguire
    }
}*/

//for(let i = 3; i<=5; i++ ){
   // console.log(i)
//}

/*
 while (condizione){
  blocco di codice da eseguire
  }
 */

  //let i = 1;

 // while(i > 0){
    //console.log("ciao")
  //}


  /* 
    do {
        blocco di codice da eseguire
    }  while (condizione);

    Stavolta il blocco di codice e' prima del while, fai questa roba finche quest'altra
  */


    //var nome = prompt("Inserisci il tuo nome");

    //document.write("<h1>Ciao, " + nome + "!<h1>")


    // let num1 = 3;
    // let num2 = 5;


    // let somma = num1 + num2;
    // let sott = num1 - num2;
    // let div = num1 / num2;
    // let molt = num1 * num2;
    // let resto = num1 % num2;

    // console.log(somma,sott,div,molt,resto);



    // let i;
    

    // for(let i = 1; i < 11; i++){
    //     console.log(i);
    // }


    // let n = 1;

    // if(n > 0){
    //     console.log("numero positivo");
    // } else if (n < 0){
    //     console.log("Il numero e' negativo");
    // } else{
    //     console.log("Non e' mai nato");
    // }


    // let num = 5;
    // let p;
    // do{
    //      p = prompt("inserisci numero");
    //      if(p == num){
    //         console.log("Il numero e' giusto");
    //     } else { console.log("sbagliato");

    //         } 8

    // } while(p != num);


    //esercizio 1
    let hello = "Hello world";
    console.log(hello);
    

    //esercizio 2
    let num1 = 2;
    let num2 = 3;
    let num3 = 4;
    let num4 = 6;
    let num5 = 10;

    let sum = num1 + num2 + num3 + num4 + num5;
    let media = sum / 5;

    console.log("Questa e' la somma" + " " + sum + " " +  "Media" + " " + media);


    //esercizio 3
    let str1 = 'Laurence';
    let str2 = "Svekis";
    let val1 = undefined;
    let val2 = null;
    let myNum = 1000;

    console.log(typeof(str1));
    console.log(typeof(str2));
    console.log(typeof(val1));
    console.log(typeof(val2));
    console.log(typeof(myNum));

    //esercizio 4

    let nome = "Mario";
    let age = 26;
    let vero = true;

    console.log("Hi my name is" + " " + nome + " " + "and my age is "  + age + " " + ":" + " " + vero);


    //esercizio 5

    // Variabile con la distanza in miglia
    var distanzaInMiglia = 50;

// Fattore di conversione da miglia a chilometri
    var fattoreDiConversione = 1.60934;

// Converti da miglia a chilometri
    var distanzaInChilometri = distanzaInMiglia * fattoreDiConversione;

// Visualizza il risultato
// console.log("La distanza di " + distanzaInMiglia + " miglia è equivalente a " + distanzaInChilometri.toFixed(4) + " chilometri.");


//esercizio 7

// let input = 12560;
// let ore = (input / (60*60)).toFixed(0);
// input = input % (60*60);
// let minuti = (input/60).toFixed(0);

// let secondi = input % 60;
// console.log(ore ,minuti, secondi);



let treValori = [1,2,3];
let nuovoArray = [];

for (let i = 0; i < treValori.length; i++) {
    console.log(treValori[i]);
}




