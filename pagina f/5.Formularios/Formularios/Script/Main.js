'use strict';
//crear contenedoresss
/*
1.var = global
2. let = local - variable
3. const = constantes
*/

const btnValidar = Document.getElementById('Validar');
//console.log(btnValidar);
// al addEventlistener debo pasar dos parametros
btnValidar.addEventlistener('click', function(e){
    
    e.preventDefault();
    let form = document.getElementById('Dataform');
    console.log(form[1].value);
    console.log(form[2].value);
})