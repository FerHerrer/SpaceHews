//Busqueda de Gogle
function searchInGoogle(){
	var buscar = document.getElementById("search").value;
	var buscarFull = "https://www.google.com/search?q=".concat("",buscar);

	window.open(buscarFull);
}

//Login
function login(){
	var nombre = document.getElementById("nombre").value;
	var contrasena = document.getElementById("contraseña").value;

	if ((nombre.toLowerCase() == "hola") && (contrasena.toLowerCase() == "hola")){
		window.alert("Has iniciado sesión correctamente");
		window.location.href="./home.html";
	}
}