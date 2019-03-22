var acceleration = 0;
var speed = 0;
var speedRange = 6;
var speedMin = speedRange/2 - speedRange;
var speedMax = -speedRange/2 + speedRange;
var accelRange = 3;
// var accelMin = accelRange/2 - accelRange;
// var accelMax = -accelRange/2 + accelRange;
var colors = [
	{
		color: "r",
		value: 0,
		speed: 0
	},
	{
		color: "g",
		value: 0,
		speed: 0
	},
	{
		color: "b",
		value: 0,
		speed: 0
	}
];
var body = document.querySelector("body");
var color = "rgb(0, 0, 0)";
var title = document.querySelector(".title p")
var interval = 1000

init();

function init(){
	colors.forEach(function(color){
		color.value = Math.round(Math.random() * 255)
	})
	color = "rgb(" + colors[0].value + ", " + colors[1].value + ", " + colors[2].value + ")"
};

function accelerate(){
	acceleration = Math.round(Math.random() * accelRange - (accelRange / 2))
}

function updateSpeed(){
	colors.forEach(function(color){
		accelerate()
		if(color.speed >= speedMax){
			color.speed--
		}
		else if(color.speed <= speedMin){
			speed++
		}
		else {
			color.speed += acceleration
		}
	})
}

function updateValue(){
	colors.forEach(function(color){
		color.value += color.speed
		if(color.value <= 1) {
			color.value = 2
			color.speed = speedMax
		}
		if(color.value >= 254) {
			color.value = 253
			color.speed = speedMin
		}
	})
}

function changeColors(){
	updateSpeed()
	updateValue()
	color = "rgb(" + colors[0].value + ", " + colors[1].value + ", " + colors[2].value + ")"
}

function changeBackground(){
	changeColors()
	body.style.background = color
	title.textContent = color
}

setInterval(changeBackground,interval)