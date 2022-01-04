let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let wynik = document.getElementById("wynik")
function calculate(){
    if(num1.value == 1){
        wynik.innerHTML = num2.value *5;
    }else if(num1.value == 2){
        wynik.innerHTML = num2.value *6;
    }else if(num1.value == 3){
        wynik.innerHTML = num2.value *7;
    }
    else{
        return 0;
    }
}