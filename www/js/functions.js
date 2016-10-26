document.addEventListener("deviceready", deviceReady, false);

var ready = false;

function deviceReady(){
	ready = true;
  console.log("ready");
}


function takePicture(){
  location.replace("foto.html");

}


function goBack(){
  location.replace("index.html");
}



function loadJSON(){
	request =  new XMLHttpRequest();
	url = "http://jsonplaceholder.typicode.com/posts"

	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			//is done


			result = JSON.parse(request.responseText);
			console.log(JSON.stringify(result));
      console.log("DSADSAD");

      //$.jStorage.set("jsonResult", result);
      localStorage.setItem("jArray", JSON.stringify(result));
      //console.log(localStorage.getItem("jArray"));
      location.replace("jsonrequest.html");
			//document.getElementById("theList").innerHTML = "<li>se REFRESCA SOLOOOO</li>"
		}
	};
	request.open("GET", url, true);
	request.send();
}


function foto(){
	console.log("TOMANDO FOTO");

	if(!ready)
		return;

	navigator.camera.getPicture(
		function(ubicacion){
			document.getElementById("imagen").setAttribute("src", ubicacion);

		}, function(){}, null);
}
