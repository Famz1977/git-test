// dineroCofla = prompt ( "¿Cuanto dinero tienes, Cofla?");
// dineroRoberto = prompt ( "¿Cuanto dinero tienes, Roberto?");
// dineroPedro = prompt ( "¿Cuanto dinero tienes, Pedro?");

// dineroCofla = parseInt (dineroCofla);
// dineroRoberto = parseInt (dineroRoberto);
// dineroPedro = parseInt (dineroPedro);

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
// 	alert ("Cofla, compra el palito de helado de agua, y te quedara de vuelto $" + (dineroCofla - 0.6));
// }

// else if (dineroCofla >= 1 && dineroCofla < 1.6) {
// 	alert ("Cofla, compra el palito de helado de crema, y te quedara de vuelto $" + (dineroCofla - 1));
// }

// else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
// 	alert ("Cofla, compra el bombón marca heladix, y te quedara de vuelto $" + (dineroCofla - 1.6));
// }

// else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
// 	alert ("Cofla, compra el bombón marca heladovich, y te quedara de vuelto $" + (dineroCofla - 1.7));
// }

// else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
// 	alert ("Cofla, compra el bombón marca helardo, y te quedara de vuelto $" + (dineroCofla - 1.8));
// }

// else if (dineroCofla >= 2.9) {
// 	alert ("Cofla, compra el potesito de helado con confites o el pote de 1/4 kg, y te quedara de vuelto $" + (dineroCofla - 2.9));
// }

// else { 
// 	alert ("Lo siento Cofla, pero no te alcansa para nada");
// }

// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
// 	alert ("Roberto, compra el palito de helado de agua");
// }

// else  if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
// 	alert ("Roberto, compra el palito de helado de crema");
// }

// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
// 	alert ("Roberto, compra el bombón marca heladix");
// }

// else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
// 	alert ("Roberto, compra el bombón marca heladovich");
// }

// else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
// 	alert ("Roberto, compra el bombón marca helardo");
// }

// else if (dineroRoberto >= 2.9) {
// 	alert ("Roberto, compra el potesito de helado con confites o el pote de 1/4 kg");
// }

// else { 
// 	alert ("Lo siento Roberto, pero no te alcansa para nada");
// }

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
// 	alert ("Pedro, compra el palito de helado de agua");
// }

// else  if (dineroPedro >= 1 && dineroPedro < 1.6) {
// 	alert ("Pedro, compra el palito de helado de crema");
// }

// else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
// 	alert ("Pedro, compra el bombón marca heladix");
// }

// else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
// 	alert ("Pedro, compra el bombón marca heladovich");
// }

// else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
// 	alert ("Pedro, compra el bombón marca helardo");
// }

// else if (dineroPedro >= 2.9) {
// 	alert ("Pedro, compra el potesito de helado con confites o el pote de 1/4 kg");
// }

// else { 
// 	alert ("Lo siento Pedro, pero no te alcansa para nada");
// }


// dineroCofla = prompt ( "¿Cuanto dinero tienes, Cofla?");
// dineroRoberto = prompt ( "¿Cuanto dinero tienes, Roberto?");
// dineroPedro = prompt ( "¿Cuanto dinero tienes, Pedro?");

// dineroCofla = parseInt (dineroCofla);
// dineroRoberto = parseInt (dineroRoberto);
// dineroPedro = parseInt (dineroPedro);

let productos =["palito de helado de agua",0.6,
				"palito de helado de crema",1,
				"bombón marca Heladix",1.6,
				"bombón marca Heladovich", 1.7,
				"bombón marca Helardo",1.8,
				"potesito de helado con confites",2.9,
				"pote de 1/4 kg",2.9 ];

let helados = [];
let x= 0;
for(i=0; i<=productos.length-1; i+=2){
	helados[x] = productos[i];
	x +=1;
}

// document.write(productos + "<br>" + "<br>" + helados + "<br>" + "<br>");

let precios = [];
let y = 0;
for(i=1; i<= productos.length-1; i +=2){
	precios[y] = productos[i];
	y +=1;
}

// document.write(productos + "<br>" + "<br>" + precios + "<br><br>");

let dinero = Number(prompt("Indicanos de cuanto dinero dispones para la compra de helado, por favor."));

let zeta = [];
let indexz = 0;
for(i=0; i<= precios.length; i += 1){
	if(precios[i]<= dinero){
		zeta[indexz] = i;
		indexz += 1;
	}
}

function comprarTodo(){
	position = "";
	for(i=0; i<= zeta.length - 1; i += 1){
		position = zeta[i];
		document.write(" - El " + helados[position] + ", que tiene un precio de $" + precios[position] + ", dejando un vuelto de $" + ((dinero - precios[position]).toFixed(2)) + "." + "<br>");
}
}

if(zeta.length>0){
	document.write("Puedes comprar el/los siguiente/s producto/s con tu dinero ($" + dinero + "):" + "<br><br>");
	comprarTodo();
} else {
	document.write("Lamentablemente, no tienes suficiente dinero como para comprar nuestros productos.");
}

// let z = [];
// let index = "";
// for(i=0; i <= precios.length-1; i +=1){
// 	if((dinero >= precios[i])) {
// 		index=0;
// 		z[index]=i;
// 		index = index+1;
// }
// }
// if(z !== null){
// 	alert("Con tu dinero ($" + dinero.toFixed(2) + ".), puedes comprar el " + helados[z] + ", que tiene un precio de $" + precios[z] + ", dejando un vuelto de $" + (dinero - precios[z]).toFixed(2) + ".");

// } else {
// 	alert("Lamentablemente, con tu dinero ($" + dinero + "), no te alcansa para comprar ninguno de nuestros helados.");
// }



// let z = null;
// for(i=0; i <= precios.length; i +=1){
// 	if((dinero >= precios[i]) && dinero <= precios[i+1]) {
// 		z=i;
// }	else if (dinero > precios[precios.length-1]){
// 		z=precios.length - 1;
// }
// }
// if(z !== null){
// 	alert("Con tu dinero ($" + dinero.toFixed(2) + ".), puedes comprar el " + helados[z] + ", que tiene un precio de $" + precios[z] + ", dejando un vuelto de $" + (dinero - precios[z]).toFixed(2) + ".");

// } else {
// 	alert("Lamentablemente, con tu dinero ($" + dinero + "), no te alcansa para comprar ninguno de nuestros helados.");
// }




// let item = [];

// for(i=0; i<productos.length; i+=2){
// 	item
// }

// document.write(item);
// let dinero = prompt("Por favor indicanos de cuanto dinero dispones para comprar helado.")
	
// 	for (i=1; i<= productos.length; i=i+2) {
// 		if((dinero>= productos[i])&& (dinero <= productos[i+2]))
// 	}
// function helado (dinero) {
// 	productos.forEach(function(element, index, array) {
// 		if((index*1)!==NaN){
// 		if(dinero >=productos[1]){
// 				if((dinero >= productos[index]) && (dinero < productos[index + 2])){
// 					alert("Con tu dinero ($ " + dinero + "), puedes comprar el " + productos[index-1] + 
// 					", que tiene un precio de $" + productos[index] + ", dejando un vuelto de $" + dinero - productos[index] + ".");
// 			}
// 		}
// 		} else {
// 			alert ("Lamentablemente, con tu dinero ($" + dinero + "), no puedes comprar ahora.");
// 		}
// 	})
// }

// helado(2);

// let producto= productos[0];
// let precio = productos[1];
// let compra = false;
// dinero = "";

// if (dinero < precio) {
// 	alert ("Tu dinero no es suficiente para comprar.");
// } else if (dinero >= productos[1]) && (dinero <= )


// function helado (dinero) {
// 	// let producto = "";
// 	// let precio = "";
// 	let i = "";
// 	for(i=1;i <= productos.length; i= i+2) {
		
// 		if((dinero >= productos[i]) && (dinero < productos[i + 2])) {
// 			compra = true;
// 			return i;
// 			return compra;

// 			// producto = productos[i-1];
// 			// precio = productos[i];
// 			// compra = true;
// 		} else { 
// 			compra = false;
// 		} 	
// 	}	
// 	if(i < productos.length){
// 		alert("Con tu dinero ($ " + dinero + "), puedes comprar el " + productos[i-1] + 
// 			", que tiene un precio de $" + productos[i] + ", dejando un vuelto de $" + dinero - productos[i] + ".");
// 	} else {
// 		alert("Lamentablemente, con tu dinero ($" + dinero + "), no puedes comprar ahora.");
// 	}
// 		// return producto;
// 		// return precio;
// 		// return compra;
// }


// helado (prompt("Por favor indícanos cuanto quieres gastar."));




// 	if ((dinero >= 0.6) && (dinero <= 1)) {
// 		precio = 0.6;
// 		producto = "palito de helado de agua";
// 		function(precio) {
// 			let vuelto = dinero - precio;
// 			if(vuelto === 0) {
// 				alert (nombre + ", compra el palito de helado de agua");
// 			} else {
// 				alert (nombre + ", compra el palito de helado de agua, y toma " + vuelto + " de cambio.")
// 			}
// 		}
		

// 	} else if ((dinero >=1) && (dinero <= 1.6)) {
// 		alert (nombre + ", compra el palito de helado de crema");
// 	} else if ((dinero >= 1.6) && (dinero <= 1.7)) {
// 		alert (nombre + ", compra el bombón marca heladix");
// 	} else if ((dinero>= 1.7) && (dinero <= 1.8)) {
// 		alert (nombre + ", compra el bombón marca heladovich");
// 	} else if ((dinero>= 1.8) && (dinero <= 2.9)) {
// 		alert (nombre + ", compra el bombón marca helardo");
// 	} else if (dinero >= 2.9) {
// 		alert (nombre + ", compra el potesito de helado con confites o el pote de 1/4 kg");
// 	} else ("Lo siento mucho "+ nombre + ", pero no te alcansa para nada");
// }

// let nombre = prompt("Indicanos tu nombre, por favor");
// let dinero = prompt("Indicanos de cuanto dinero dispones, por favor");

// helado (dinero, nombre);
