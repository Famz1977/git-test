dineroCofla = prompt ( "¿Cuanto dinero tienes, Cofla?");
dineroRoberto = prompt ( "¿Cuanto dinero tienes, Roberto?");
dineroPedro = prompt ( "¿Cuanto dinero tienes, Pedro?");

dineroCofla = parseInt (dineroCofla);
dineroRoberto = parseInt (dineroRoberto);
dineroPedro = parseInt (dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert ("Cofla, compra el palito de helado de agua, y te quedara de vuelto $" + (dineroCofla - 0.6));
}

else  if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert ("Cofla, compra el palito de helado de crema, y te quedara de vuelto $" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert ("Cofla, compra el bombón marca heladix, y te quedara de vuelto $" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert ("Cofla, compra el bombón marca heladovich, y te quedara de vuelto $" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert ("Cofla, compra el bombón marca helardo, y te quedara de vuelto $" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
	alert ("Cofla, compra el potesito de helado con confites o el pote de 1/4 kg, y te quedara de vuelto $" + (dineroCofla - 2.9));
}

else { 
	alert ("Lo siento Cofla, pero no te alcansa para nada");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert ("Roberto, compra el palito de helado de agua");
}

else  if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert ("Roberto, compra el palito de helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert ("Roberto, compra el bombón marca heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert ("Roberto, compra el bombón marca heladovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert ("Roberto, compra el bombón marca helardo");
}

else if (dineroRoberto >= 2.9) {
	alert ("Roberto, compra el potesito de helado con confites o el pote de 1/4 kg");
}

else { 
	alert ("Lo siento Roberto, pero no te alcansa para nada");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert ("Pedro, compra el palito de helado de agua");
}

else  if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert ("Pedro, compra el palito de helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert ("Pedro, compra el bombón marca heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert ("Pedro, compra el bombón marca heladovich");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert ("Pedro, compra el bombón marca helardo");
}

else if (dineroPedro >= 2.9) {
	alert ("Pedro, compra el potesito de helado con confites o el pote de 1/4 kg");
}

else { 
	alert ("Lo siento Pedro, pero no te alcansa para nada");
}