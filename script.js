
let body = document.getElementById("body").offsetWidth;

let h1 = document.getElementById("heigth");
h1.innerText = body
 


function smoothScroll() {
	document.getElementById("about").scrollIntoView({behavior: "smooth"});
}

