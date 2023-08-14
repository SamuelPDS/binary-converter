document.addEventListener('DOMContentLoaded', function(){

    num = document.getElementById('num');
    button = document.getElementById('btn');
    result = document.getElementById('resultado')
    
    button.addEventListener("click", function(){
    valordec = parseInt(num.value);
    valor = valordec.toString(2);
    result.value = valor;
    })
    
})

 

