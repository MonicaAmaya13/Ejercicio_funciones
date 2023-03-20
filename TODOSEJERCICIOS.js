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
    return X1 > X2 
}
