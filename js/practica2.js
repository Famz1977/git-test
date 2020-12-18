// let free = false;

// const validarCliente = (hora)=>{
// 	let edad = prompt ("Indique su edad, por favor");
// 	if (edad >=18) {
// 		if (hora >= 2 && hora < 7 && free == false) {
// 			alert ("Felicidades, puedes pasar gratis, por ser el primer invitado en ingresar a las 2 am");
// 			free = true;
// 		}else {
// 			alert (`Son las ${hora} horas, puedes pasar pagando la entrada`);
// 		}

// 		} else {
// 			alert("Lamentablemente usted es menor de edad y no se le puede permitir la entrada");
// 		}
// 	}

// validarCliente(23);
// validarCliente(24);
// validarCliente(1);
// validarCliente(2);
// validarCliente(3);
// validarCliente(4);
// validarCliente(5);

let free = false;

function validarCliente() {
	let hora = prompt ("Indique que hora es, por favor")
	let edad = prompt("Indique su edad, por favor");
	if (edad >= 18){
		if ((hora >= 2) && (free === false)){
		alert ("Felicidades, puedes pasar gratis a esta fiesta!");
		free = true;
		} else {
			if((hora >= 1) && (hora <2)) {
				alert ("Es la " + hora + ", puedes pasar pagando a entrada.") 
			} else {
			alert ("Son las " + hora + ", puedes pasar pagando a entrada.");
		}
	} 
	}else {
		alert ("Eres menor de edad, no puedes entrar.");
}
}

validarCliente();
//-----------------------------------------------


// let cantidad = prompt ("Indique el numero total de alumnos");
// let alumnosTotales = [];

// for (i=0; i < cantidad; i++){
// 	alumnosTotales[i] = [prompt("Nombre del alumno N° " + (i+1)),0];
// }

// const tomarAsistencia = (nombre,p)=>{
// 	let presencia = prompt(nombre);
// 	if (presencia == "p" || presencia == "P"){
// 		alumnosTotales[p][1]++;
// 	}
// }

// for (i = 0; i <30; i++){
// 	for (alumno in alumnosTotales){
// 		tomarAsistencia(alumnosTotales[alumno][0],alumno);
// 	}
// }

// for (alumno in alumnosTotales){
// 	let resultado = `${alumnosTotales[alumno][0]}:<br>
// 	          Presentes: ${alumnosTotales[alumno][1]}<br>
// 	          Ausencias: ${30 - alumnosTotales[alumno][1]}`;
// if (30 - alumnosTotales[alumno][1]>18) {
// 	resultado+="Reprobado por inasistencias<br>";
// } else {
// 	resultado+="<br>";
// }
// document.write(resultado);
// }


//--------------------------------------------


// const sumar = (num1,num2)=>{
// 	return parseInt(num1) + parseInt(num2);
// }
// const restar = (num1,num2)=>{
// 	return parseInt(num1) - parseInt(num2);
// }
// const multiplicar = (num1,num2)=>{
// 	return parseInt(num1) * parseInt(num2);
// }
// const dividir = (num1,num2)=>{
// 	return parseInt(num1) / parseInt(num2);
// }

// alert ("Indique la operacion que dese efectuar");
// let operacion = prompt("1 para Suma, 2 para Resta, 3 para Multiplicar, 4 para Dividir");

// if (operacion == 1) {
// 	let numero1 = prompt("Indique el primer numero a sumar");
// 	let numero2 = prompt("Indique el segundo numero a sumar");
// 	resultado = sumar(numero1,numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// if (operacion == 2) {
// 	let numero1 = prompt("Indique el primer numero a restar");
// 	let numero2 = prompt("Indique el segundo numero a restar");
// 	resultado = restar(numero1,numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// if (operacion == 3) {
// 	let numero1 = prompt("Indique el primer numero a multiplicar");
// 	let numero2 = prompt("Indique el segundo numero a multiplicar");
// 	resultado = multiplicar(numero1,numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// if (operacion == 4) {
// 	let numero1 = prompt("Indique el primer numero a dividir");
// 	let numero2 = prompt("Indique el segundo numero a dividir");
// 	resultado = dividir(numero1,numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// else {
// 	alert("No se a seleccionado una operacion de la lista");
// }



//--------------------------------------------



// class animal {
// 	constructor(especie, edad, color){
// 		this.especie = especie;
// 		this.edad = edad;
// 		this.color = color;
// 		this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}.`
// 	}
// 	verInfo(){
// 		document.write(this.informacion + "<br>");
// 	}
// }

// const perro = new animal("perro", 5, "rojo");
// const gato = new animal("gato", 2,"negro");
// const pajaro = new animal("pajaro", 1, "gris");

// //Todo lo siguiente se ve reemplazado con el metodo verInfo
// // document.write(perro.informacion + "<br>");
// // document.write(gato.informacion + "<br>");
// // document.write(pajaro.informacion + "<br>");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();



//--------------------------------------



// class Animal {
// 	constructor(especie, edad, color){
// 		this.especie = especie;
// 		this.edad = edad;
// 		this.color = color;
// 		this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}.`
// 	}
// 	verInfo(){
// 		document.write(this.informacion + "<br>");
// 	}


// 	// ladrar(){
// 	// 	if (this.especie == "perro") {
// 	// 		document.write("guau" + "<br>");
// 	// 	} else {
// 	// 		document.write("Este animal es un " + this.especie + " , por lo cual no puede ladrar." + "<br>");
// 	// 	}
// 	// }
// }
// // la class Perro hereda sus caracteristicas de la clase animal
// class Perro extends Animal {
// 	constructor(especie, edad, color, raza){
// 		super(especie, edad, color);
// 		this.raza = raza;
// 	}
// 	static ladrar(){
// 		alert("Guau"); 
// 	}

// 	// ladrar(){
// 	// 	alert("Guau");
// 	// }
// }

// const perro = new Perro("perro", 5, "rojo", "doberman");
// const gato = new Animal("gato", 2,"negro");
// const pajaro = new Animal("pajaro", 1, "gris");

// //Todo lo siguiente se ve reemplazado con el metodo verInfo
// // document.write(perro.informacion + "<br>");
// // document.write(gato.informacion + "<br>");
// // document.write(pajaro.informacion + "<br>");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// Perro.ladrar();


//---------------------------------------------------


// class Celular{
// 	constructor(color, peso, rdp, rdc, ram){
// 		this.color = color;
// 		this.peso = peso;
// 		this.resolucionDePantalla = rdp;
// 		this.resolucionDeCamara = rdc;
// 		this.memoriaRam = ram;
// 		this.encendido = false;
// 	}
// 	botonEncendido(){
// 		if(this.encendido == false) {
// 			alert("Celular prendido");
// 			this.encendido = true;
// 		} else {
// 			alert("Celular apagado");
// 			this.encendido = false;
// 		}
// 	}
// 	reiniciar(){
// 		if(this.encendido == true){
// 			alert("Reiniciando celular");
// 		} else {
// 			alert("el celular esta apagado");
// 		}
// 	}
// 	tomarFoto(){
// 		alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
// 	}
// 	grabarVideo(){
// 		alert(`grabando video a una resolución de: ${this.resolucionDeCamara}`);
// 	}
// 	mobileInfo(){
// 		document.write(
// 			`Color: <b>${this.color}</b><br>
// 			Peso: <b>${this.peso}</b><br>
// 			Resolución de pantalla: <b>${this.resolucionDePantalla}</b><br>
// 			Resolución de camara: <b>${this.resolucionDeCamara}</b><br>
// 			Memoria ram: <b>${this.memoriaRam}</b><br>
// 			`)
// 	}
// }

// class CelularAltaGama extends Celular{
// 	constructor(color, peso, rdp, rdc, ram, rdcf){
// 		super(color, peso, rdp, rdc, ram);
// 		this.resolicionCamaraFrontal = rdcf;
// 	}
// 	videoCamaraLenta(){
// 		alert("inicializando grabacion en camara lenta");
// 	}
// 	reconocimientoFacial(){
// 		alert("Efectuando reconocimiento facial");
// 	}
// }

// celular1 = new Celular("rojo", "120gr", "full hd", "16 Mpx", "4GB");
// celular2 = new Celular("azul", "130gr", "4 K", "24 Mpx", "8GB");
// celular3 = new Celular("negro", "110gr", "Hd", "12 Mpx", "3GB");

// celular1.botonEncendido();
// celular1.reiniciar();
// celular1.tomarFoto();
// celular1.grabarVideo();


// celular1.mobileInfo();


//--------------------------------------------


// class App {
// 	constructor(descargas, puntuacion, peso){
// 		this.descargas = descargas;
// 		this.puntuacion = puntuacion;
// 		this.peso = peso;
// 		this.iniciada = false;
// 		this.instalada = false;
// 	}
// 	iniciar(){
// 		if (this.iniciada == false && this.instalada == true){
// 			this.iniciada = true;
// 			alert("App iniciada");
// 		} else {
// 			alert("La aplicacion no esta instalada");
// 		}
// 	}
// 	cerrar(){
// 		if (this.iniciada == true && this.instalada == true){
// 			this.iniciada = false;
// 			alert("App cerrada");
// 		} else {
// 			alert("La aplicacion no esta instalada");
// 		}
// 	}
// 	instalar(){
// 		if (this.instalada == false){
// 			this.instalada =true;
// 			alert ("App instalada correctamente");
// 		}
// 	}
// 	desinstalar(){
// 		if (this.instalada == true){
// 			this.instalada =false;
// 			alert ("App desinstalada correctamente");
// 		} else {
// 			alert("No se puede desinstalar una app que no fue instalada previamente");
// 		}
// 	}
// 	appInfo(){
// 		document.write( `
// 		Numero de descargas: <b>${this.descargas}</b><br>
// 		Puntuación: <b>${this.puntuacion}</b><br>
// 		Peso; <b>${this.peso}</b><br><br>
// 		`)
// 	}
// }

// app1 = new App("16m", "4 estrellas", "300 MB");
// app2 = new App("12m", "3 estrellas", "600 MB");
// app3 = new App("1m", "2 estrellas", "900 MB");
// app4 = new App("3m", "1 estrellas", "2 GB");
// app5 = new App("19m", "5 estrellas", "100 GB");
// app6 = new App("6m", "4.2 estrellas", "500 MB");
// app7 = new App("2m", "2.4 estrellas", "1 GB");

// app1.appInfo();
// app2.appInfo();
// app3.appInfo();
// app4.appInfo();
// app5.appInfo();
// app6.appInfo();
// app7.appInfo();
// // app1.instalar();
// // app1.iniciar();
// // app1.cerrar();
// // app1.desinstalar();


//---------------------------------------------

// //metodos de cadenas

// let cadena = "cadena de prueba "
// let cadena2 = "cadena "


// // resultado = cadena.concat(cadena2); concatena cadenas
// // resultado = cadena.startsWith("cadena"); resulta en true o false si su contenido es igual al del inicio de la cadena
// // resultado = cadena.endsWith("cadena"); resulta en true o false si su contenido es igual al del final de la cadena
// // resultado = cadena.includes("de"); resulta en true o false si su contenido se encuentra en la cadena
// // resultado = cadena.indexOf("de"); entrega la posición de la primera coincidencia en la cadena
// // resultado = cadena.lastIndexOf("de"); entrega la posición de la última coincidencia en la cadena
// // resultado = cadena.padStart(6,"a"); rellena la cadena hasta que tenga la cantidad indicada con el elemento indicado, al principio de la misma
// // resultado = cadena.padEnd(6,"a"); rellena la cadena hasta que tenga la cantidad indicada con el elemento indicado, al final de la misma
// // resultado = cadena.repeat(2); repite la cadena la cantidad de veces indicadas
// // resultado = cadena.split("de"); divide la cadena en donde se encuentre el elemento indicado, eliminandolo de la misma, y convirtiendo el resultado en un arreglo
// // resultado = cadena.substring(0,2); nos entrega una nueva cadena, desde la pocicion indicada al principio, hasta la posicion indicada al final, sin incluirla
// // resultado = cadena.toLowerCase(); convierte la cadena a minusculas
// // resultado = cadena.toUpperCase(); convierte la cadena a mayusculas
// // resultado = cadena.toString(); covierte la cadena en un string
// // resultado = cadena.trim(); elimina los espacios en blanco al principio y al final de una cadena
// // resultado = cadena.trimEnd(); elimina los espacios en blanco al final de la cadena
// // resultado = cadena.trimStart(); elimina los espacion en blanco al principio de la cadena



// document.write(resultado);


// metodos de arrays

// let nombres = ["felipe", "paola", "rodolfo"];
// // los siguientes elementos nos permiten modificar el array
// // let resultado = nombres.pop(); nos muestra el ultimo elemento del array y lo quita del mismo
// // let resultado = nombres.shift(); nos muestra el primer elemento del array y lo quita de mismo
// // let resultado = nombres.push("fabian", "josefina"); agrega elementos al final de larray, dando como "resultado" el numero actual de elementos del mismo
// // document.write(resultado);
// // nombres.reverse(); invierte el ordel original del array
// // nombres.unshift("fabian", "josefina"); agrega elementos al principio del arreglo
// // nombres.sort(); ordena los elementos del array alfabeticamente, o de menor a mayor
// // nombres.splice(2, 1, "franco", "valentina"); permite eliminar elementos de un array, indicando desde que posicion y cuanto elmentos, y agregar elementos al mismo en la pocicion ya indicada. indicando que la cantidad de elementos a eliminar es 0, se pueden agregar elementos en la posicion indicada


// // los siguientes elementos nos permiten acceder y mostrar los elementos

// // let resultado = nombres.join("<br>Mi nombre es "); convierte el array en un string, pudiendo agregar un separador a nuestra conveniencia
// // let resultado = nombres.slice(0,2); nos entrega un nuevo array, desde la posicion que indiquemos, incluyendola, hasta la posicion que indiquemos, excluyendola. Si queremos como resultado un array desde donde queramos, hasta el ultimo elemento del array original, dejaremos el segundo parametro vacio
// // ademas podemos utilizar los metodos ya vistos en cadenas toString(), indexOf(), lastIndexOf() e includes()


// //los siguientes son los metodos de array de repeticion

// resultado = nombres.filter(nombre => nombre.length > 5);

// document.write(resultado);


//-----------------------------------------


// metodos Math, los que trabajan estrictamente con numeros

// let numero = Math.sqrt(25); entrega la raiz cuadrada de 25
// let numero = Math.qbrt(27); entrega la raiz cubica de 27
// let numero = Math.max(2, 4, 192, 12); determina cual es el numero mas grande y lo devuelve
// let numero = Math.min(2, 4, 192, 12); determina cual es el numero mas bajo y lo devuelve
// let numero = Math.random() devuelve un numero aleatorio entre 0 y 1
// let numero = Math.round() devuelve el valor de un numero redondeado al numero entero mas cercano
// let numero = Math.fround() devuelve la representacioh flotante de precisión simple mas cercana de un numero
// let numero = Math.floor() devuelve el mayor entero menor que o igual a un numero
// let numero = Mtah.trunc() devuelve la parte entera del numero eliminando la parte fracionaria

//propiedades (se escriven con mausculas y sin parentesis)

// let numero = Math.PI; entrega el valor pi, con quince decimales
// let numero = Math.SQRT1_2; entrega la raiz cuadrada de 1/2
// let numero = Math.SQRT2; entrga la raiz cuadrada de 2
// let numero = Math.E; entrega la constante de Euler, que es la base de los logaritmos naturales
// let numero = Math.LN2; entrega el logaritmo natural de 2
// let numero = Math.LN10; entrega el logaritmo natural de 10
// let numero = Math.LOG2E; entrega el logaritmo de E con base 2
// let numero = Math.LOG10E; entrega el logaritmo de E con base 10


//--------------------------------------------------

// class Calculadora{
// 	constructor(){

// 	}
// sumar  (num1,num2) {
// 	return parseInt(num1) + parseInt(num2);
// }
// restar  (num1,num2) {
// 	return parseInt(num1) - parseInt(num2);
// }
// multiplicar  (num1,num2) {
// 	return parseInt(num1) * parseInt(num2);
// }
// dividir  (num1,num2) {
// 	return parseInt(num1) / parseInt(num2);
// }
// potenciar (num,exp) {
// 	return parseInt(num) ** parseInt(exp);
// }

// raizCuadrada (num1) {
// 	return Math.sqrt (parseInt(num1));
// }

// raizCubica (num1) {
// 	return Math.cbrt (parseInt(num1));
// }

// }

// const calculadora = new Calculadora();

// alert ("Indique la operacion que dese efectuar");
// let operacion = prompt("1 para Suma, 2 para Resta, 3 para Multiplicar, 4 para Dividir, 5 para Potenciar, 6 para obtener raiz cuadrada, o 7 para raiz cúbica");

// if (operacion == 1) {
// 	let numero1 = prompt("Indique el primer numero a sumar");
// 	let numero2 = prompt("Indique el segundo numero a sumar");
// 	resultado = calculadora.sumar(numero1,numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// else if (operacion == 2) {
// 	let numero1 = prompt("Indique el primer numero a restar");
// 	let numero2 = prompt("Indique el segundo numero a restar");
// 	resultado = calculadora.restar(numero1,numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// else if (operacion == 3) {
// 	let numero1 = prompt("Indique el primer numero a multiplicar");
// 	let numero2 = prompt("Indique el segundo numero a multiplicar");
// 	resultado = calculadora.multiplicar(numero1,numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// else if (operacion == 4) {
// 	let numero1 = prompt("Indique el primer numero a dividir");
// 	let numero2 = prompt("Indique el segundo numero a dividir");
// 	resultado = calculadora.dividir(numero1,numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// else if (operacion == 5) {
// 	let numero1 = prompt("Indique el numero que desea potenciar");
// 	let numero2 = prompt("Indique la potencia que desea aplicar");
// 	resultado = calculadora.potenciar(numero1, numero2);
// 	alert(`Tu resultado es ${resultado}`);
// }

// else if (operacion == 6) {
// 	let numero1 = prompt("Indique el numero al que dese aplica la raiz cuadrada");
// 	resultado = calculadora.raizCuadrada(numero1);
// 	alert (`Tu resultado es ${resultado}`);
// }

// else if (operacion == 7) {
// 	let numero1 = prompt("Indique el numero al que desea aplicar la raiz cúbica");
// 	resultado = calculadora.raizCubica(numero1);
// 	alert(`Tu resultado es ${resultado}`);
// }

// else {
// 	alert("No se a seleccionado una operacion de la lista");
// }


//----------------------------


// const obtenerInformacion = (materia)=>{
// 	materias = {
// 		fisica: ["Mateo", "pedro", "pepito", "cofla", "maria"],
// 		programacion: ["Marcos", "pedro", "juan", "pepito"],
// 		logica: ["Lucas", "pedro", "juan", "pepito", "cofla", "maria"],
// 		quimica: ["Juan", "pedro", "juan", "pepito", "cofla", "maria"]
// 	}
// 	if (materias[materia] !== undefined){
// 		return [materias[materia], materia];
// 	} else {
// 		return false;
// 	}
// }

// let informacion = obtenerInformacion("logica");

// if (informacion !== false) {
// 	document.write(`Alumnos inscritos en la clase de ${informacion[1]}: ${informacion[0]}"<br>"`);
// } else {
// 	document.write("La informacion solicitada no existe");
// }

// let profesor = obtenerInformacion("logica");
// profesor.shift();
// document.write(profesor);
