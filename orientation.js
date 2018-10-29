document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.29.3";
window.addEventListener("deviceorientation",on_device_orientarion);

function on_device_orientarion(e)

{
	document.getElementById("id_alpha").innerHTML= e.alpha;
	document.getElementById("id_beta").innerHTML = e.beta;
	document.getElementById("id_gamma") . innerHTML = e.gamma;
}
var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");
		context.clearReact(0 , 0 canvas.width ,canvas.height )
		R = 10 ;
	context.beginPath();
	context.arc(canvas.width / 2 + e.gamma /90 * (canvas. width) / 2-R) ,canvas.height / 2 + e.beta / 90 * (canvas.height) , R ,0 ,2* Math .PI )
	context.stroke();
