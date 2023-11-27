alert("Inserisci il codice Nino20 per ricervere il 20% di sconto");
let input = document.getElementById("sub");
input.addEventListener("click", addPanino);
let nome = document.getElementById("nome").value;
let tavolo = document.getElementById("tavolo").value;

console.log(nome,tavolo);

function addPanino(){
    console.log("log 2", nome, tavolo);
    let h1 = document.getElementById("id");
    h1.innerHTML = nome + " " + tavolo;
}