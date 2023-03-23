//1.CREA UNA FUNCIÓN QUE TOME DOS NUMEROS COMO ARGUMENTOS Y DELVUELVA EL PRODUCTO DE ESTOS 
//DOS NUMEROS 
function producto(X1,X2){
    return X1* X2; 
}
//2. CREA UNA FUNCION QUE TOME UN NOMBRE COMO ARGUMENTO Y DEVUELVA UN MENSAJE DE SALUDO
// QUE INCLUYA EL NOMBRE PROPORCIONADO 

function saluda(NOMBRE){
    return "Hola" + NOMBRE + ",¿Qué tal estás?"


}

//3. FUNCIÓN ÁREA DEL CIRCULO 
//CREA UNA FUNCIÓN QUE TOME EL RADIO DE UN CIRCULO COMO ARGUMENTO Y DEVUELVA 
//EL AREA DEL CIRCULO 
function area(radio){
    return radio * radio * Math.PI; 
}

let total_area = area(30); 
console.log("El total area de radio 30 es "+ total_area); 

//4. CREA UNA FUNCIÓN QUE TOME DOS NÚMEROS COMO ARGUMENTOS Y DELVUELVA EL MAYOR DE 
// LOS DOS NÚMEROS 

function mayor(X1,X2){
    if(X1>X2){
        return X1>X2

    }
}

//5. CREA UNA FUNCIÓN QUE TOME DOS NÚMEROS COMO ARGUMENTOS Y DEVUELVA EL RESULTADO 
// DE DIVIDIR EL PRIMER NÚMERO POR EL SEGUNDO NÚMERO. ASEGÚRATE DE MANEJAR 
// EL CASO EN EL QUE EL SEGUNDO NÚMERO SEA CERO 

function DIVISIÓN ARGUMENTOS(X1:X2){
    if (b==0){
        console.log("No se puede divir entre 0");
    }else{
        return X1/X2;
    }

}
const RESULTADO = dividir(64,2);
console.log("El resultado de la división es 6")



//6. CREA UNA FUNCION QUE TOME UN NUMERO COMO ARGUMENTO Y DELVUELVA UNA CADENA QUE INDIQUE 
//SI EL NUMERO ES PAR O IMPAR 

function par_impar(X){
    if (x%2==0){
            return "par";
    }else{
                 
        return "impar"; 
    }
}
console.log(par_impar(4));

//7. FUNCIÓN QUE TOME LA EDAD DE UNA PERSONA COMO ARGUMENTO Y DEVUELVA 
//LA CLASIFICACIÓN ETARIA APROPIADA 

function CLASIFICACIÓN(EDAD){
    if(edad<13){
        return "niño";
    }else if(13<EDAD && EDAD<18){
        return "ADOLECENTE";
    }else if(19<EDAD && EDAD<64){
        return "ADULTO";
    }else if(edad>64){
        return "ANCIANO";
    }
}

    console.log("12 --> " + clasificacion(12)); 


