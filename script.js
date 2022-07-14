//Busqueda de Gogle
function searchInGoogle(){
	var buscar = document.getElementById("searchArticles").value;
	var buscarFull = "https://www.google.com/search?q=".concat("",buscar);

	if (buscar != ""){
		window.open(buscarFull);
	}
}
function searchInWikipedia(){
	var buscar = document.getElementById("searchArticles").value;
	var buscarFull = "https://es.wikipedia.org/w/index.php?search=".concat("",buscar);

	if (buscar != ""){
		window.open(buscarFull);
	}
}
//Login
function login(){
	var nombre = document.getElementById("nombre").value;
	var contrasena = document.getElementById("contraseña").value;

	if ((nombre.toLowerCase() == "hola") && (contrasena.toLowerCase() == "hola")){
		window.alert("Login complete");
		window.location.href="./index.html";
	}
}

function goToNews(){
	document.getElementById("buttonSound").play();
	setTimeout(function(){
    window.location.href="./news.html";
	},300);
}
function goToHome(){
	document.getElementById("buttonSound").play();
	setTimeout(function(){
    window.location.href="./index.html";
	},300);
}
function goToForums(){
	document.getElementById("buttonSound").play();
	setTimeout(function(){
    window.location.href="./community.html";
	},300);
}
function goToInfo(){
	document.getElementById("buttonSound").play();
	setTimeout(function(){
    window.location.href="./info.html";
	},300);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var buscar = document.getElementById("search").value;
var NS4 = (document.layers);
var IE4 = (document.all);

var win = window; // Con frames usar top.nombre.window;
var n = 0;

function findInPage(buscar) {

	var txt, i, found;

	if (buscar == "")
	return false;

	// Find next occurance of the given string on the page, wrap around to the
	// start of the page if necessary.

	if (NS4) {

	// Look for match starting at the current point. If not found, rewind
	// back to the first match.

	if (!win.find(buscar))
	while(win.find(buscar, false, true))
	n++;
	else
	n++;

	// If not found in either direction, give message.

	if (n == 0)
	alert("Not found.");
	}

	if (IE4) {
	txt = win.document.body.createTextRange();

	// Find the nth match from the top of the page.

	for (i = 0; i <= n && (found = txt.findText(buscar)) != false; i++) {
	txt.moveStart("character", 1);
	txt.moveEnd("textedit");
	}

	// If found, mark it and scroll it into view.

	if (found) {
	txt.moveStart("character", -1);
	txt.findText(buscar);
	txt.select();
	txt.scrollIntoView();
	n++;
	}

	// Otherwise, start over at the top of the page and find first match.

	else {
	if (n > 0) {
	n = 0;
	findInPage(buscar);
	}

	// Not found anywhere, give message.

	else
	alert("Not found.");
	}
	}

	return false;
}
*/