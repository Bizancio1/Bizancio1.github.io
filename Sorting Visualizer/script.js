	/*-------------
		Varible
	---------------*/

let array = []; //main array
let arrayLength; //gets the "header__range" value to set the array length
let container = document.getElementById('main__container'); //gets the container of the bars that will be created
let index;
let span;

	/*--------------
		Functions
	---------------*/

//to try things
function consoleLogger() {
	container.innerHTML = "";
	array.length = 0
	arrayLength = document.getElementById('header__range').value;
	for (let i = 0; i < arrayLength; i++){
		random = Math.floor(Math.random() * 500);
		array.push(random)
		let span = document.createElement("span")
		span.innerText = random
		span.classList.add("bar")
		container.appendChild(span)
		console.log(random)
	}
};

// Generates new arrays
function genetareArray() {
	container.innerHTML = "";  // Remove the spans appended to the container
	array.length = 0  // Clear the array
	arrayLength = document.getElementById('header__range').value;  // Value of input range
	for (let i = 0; i < arrayLength; i++){
		array.push((Math.floor(Math.random() * 300)) -1);  // Random number lower than 500
		  // Pushes the value of 'random' to the array
		
		let span1 = container.innerHTML;
		span = '<span onChange="changeHeight()"></span>';
		span.style.height = `${array[i]}px`;
		/*span.innerText = index;*/
		span.classList.add("bar");  // Sets the span height equal to the random number gave to it
		container.appendChild(span);
	}
};

function changeHeight() {
	console.log("pepe")
}
function bubbleSort() {
	for (let i = 0; i < 1;){
		let lastElement = array.length; //gets the index of the last element
		let ele1 = array[lastElement -1];
		let ele2 = array[lastElement -2];
		let tempVar = ele1;
		console.log(ele1, ele2)
		console.log(ele2, tempVar)

		if (ele1 < ele2) {
			ele1 = ele2;
			
			ele2 = tempVar;
			changeHeight()
		}else{
			console.log("no")
		}
		
		i++;
	};
	

};


