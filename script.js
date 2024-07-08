 let input = document.querySelector('.calc-display input');

function calculate(){
    console.log(input.value);
    input.value = eval(input.value);
}

