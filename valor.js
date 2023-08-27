function fZero(){
    debugger;
    var numero = document.querySelector("#valor").value;
    if(parseInt(numero)==0){
        alert("numero = a zero");
    }
    else if(parseInt(numero)<0){
        alert("número menor que zero");
    }
    else if (parseInt(numero)>0){
        alert("número maior que zero");
    }
    else if(numero==""){
        alert("não foi informado valor")
    }
    
}