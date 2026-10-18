function recomendar(genero){
    let elementoEdad = document.getElementById("textoEdad")
    
    let edad = elementoEdad.value;
    
    

    if(edad < 13){
        switch(genero){
            case "comedia":
                alert("menor de 13 años tu peliculade COMEDIA remendada es")
                break;

            case "drama":
                alert("menor de 13 años tu peliculade DRAMA remendada es")
                break;

            case "musical":
                alert("menor de 13 años tu peliculade MUSICAL remendada es")
                break;

            case "crimen":
                alert("menor de 13 años tu peliculade CRIMEN remendada es")
                break;
        }
        
    }if(edad >= 13 && edad <=30){
        switch(genero){
            case "comedia":
                alert("entre 13 y 30 años tu peliculade COMEDIA remendada es")
                break;

            case "drama":
                alert("entre 13 y 30 años tu peliculade DRAMA remendada es")
                break;

            case "musical":
                alert("entre 13 y 30 años tu peliculade MUSICAL remendada es")
                break;

            case "crimen":
                alert("entre 13 y 30 años tu peliculade CRIMEN remendada es")
                break;
        }
        
    }if(edad > 30 && edad < 60){
        switch(genero){
            case "comedia":
                alert("mayor de 30 años y menor de 60 tu peliculade COMEDIA remendada es")
                break;

            case "drama":
                alert("mayor de 30 años y menor de 60 tu peliculade DRAMA remendada es")
                break;

            case "musical":
                alert("mayor de 30 años y menor de 60 tu peliculade MUSICAL remendada es")
                break;

            case "crimen":
                alert("mayor de 30 años y menor de 60  tu peliculade CRIMEN remendada es")
                break;
        }
        
    }if(edad >= 60){
        alert("no pelicula")
    }

}