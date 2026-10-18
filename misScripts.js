function recomendar(){
    let elementoEdad = document.getElementById("textoEdad")

    let edad = elementoEdad.value;
   

    if(edad < 13){
        alert("menor de 13 años")
    }if(edad >= 13 && edad <=30){
        alert("entre 13 y 30 años")
    }else{
        alert("mayor de 30 años")
    }

}