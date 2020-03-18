var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("background-gradient");

color1.addEventListener("input",function(){

body.style.background=" linear-gradient(to right, "+color1.value+", "+color2.value+" )";
css.textContent=body.style.background+";";
});


color2.addEventListener("input",function(){

body.style.background=" linear-gradient(to right, "+color1.value+", "+color2.value+" )";
css.textContent=body.style.background+";";

})


let obj ={



	username0:'nana',
	username1:'ako',
	username2:'Mr. Greatness',
	username3:'Mr. Alphabet'
}

Object.keys(obj).forEach((key,index)=>{

console.log(key,obj[key]);
})

Object.values(obj).forEach(value=>{

	console.log(value);
})