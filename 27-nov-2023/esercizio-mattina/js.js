
alert("Sconto del 10% se inserisci marios")

document.addEventListener("DOMContentLoaded", function() {
    

    
    let nome = prompt("Inserisci il tuo nome:");

    
    let h4Element = document.getElementById("nomeOutput");

    
    h4Element.textContent = "The " + nome + " Burger";
});


    let checkbox = document.getElementsByClassName("checkbox");
    let coupon = document.getElementById("coupon");

    document.getElementById('calculate').addEventListener('click', function () {
        updatePrice();
    });

    function updatePrice() {
        let totalPrice = 5.00; // Prezzo di base del panino

        for(let i = 0; i < checkbox.length; i++){
            
            if(checkbox[i].checked){
                totalPrice += parseFloat(checkbox[i].value);
            }

        }

        if(coupon.value == "marios"){
            totalPrice *= 0.9; 
        }
        document.getElementById("totalPrice").innerHTML = "Prezzo totale " + totalPrice.toFixed(2);
        
    }

    

