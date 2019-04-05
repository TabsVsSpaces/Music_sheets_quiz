"use strict";
/*
---------------------------------------------------------------------------------------
 								* IST NOCH MACARONI CODE *
 								Nur Versuch, noch nichts geordnet nach MVC
 --------------------------------------------------------------------------------------


										TODO
								*Noten mit Solution verbinden // Anzeige mit Buttonlösung verbinden
								*Event Listening sortieren
								




 */




 */


//FETCH JSON
const tempfetchAddr= 'http://141.56.236.191:8000/Modul1.json';
const fetchAddr = 'http://192.168.0.108:8000/Modul1.json';
function fetchRequest(addr){
			// Replace ./data.json with your JSON feed

			fetch(addr).then(response => {
			  return response.json();
			}).then(data => {
			  // Work with JSON data here
				localStorage.setItem("notes", JSON.stringify(data.notes));
				localStorage.setItem("solution", JSON.stringify(data.solution));
			}).catch(err => {
			  // Do something for an error here
			});
		}

fetchRequest(fetchAddr);


/*
 * -------------------------------------------------------------------
	VEXFLOW ZEUGS
	------------------------------------------------------------------

var vf = new Vex.Flow.Factory({
  renderer: {elementId: 'main__renderbody', width: 500, height: 200}
});

var score = vf.EasyScore();
var system = vf.System();

system.addStave({
  voices: [
    score.voice(score.notes('C#5/q, B3, A3, G#3', {stem: 'up'})),
    score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
  ]
}).addClef('treble').addTimeSignature('4/4').setStyle({strokeStyle: "blue"});

vf.draw();
 */



//Button text randomization

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


var randomChoice = [0,1,2,3];
randomChoice = shuffle(randomChoice);
var buttons=["choiceButton1", "choiceButton2", "choiceButton3", "choiceButton4"];


function randomizeChoiceButtons(buttons, randomDec){
	var choices=["A", "B", "C", "D"];
	for(let i=0; i< buttons.length; ++i){
		document.getElementById(buttons[i]).innerHTML=choices[randomDec[i]];
	}	
}

randomizeChoiceButtons(buttons, randomChoice);




//----------------------------------
//			Eventlisteners
//----------------------------------
//
//
//Funktioniert noch nichts
//


//Iterate through solution object-localstorage
let solutionIndex = 0;
let solutionValue = JSON.parse(localStorage.getItem("solution"));

function renderRenderbody(solutionIndex){
	let textArr=JSON.parse(localStorage.getItem("notes"));
	document.getElementById("renderParagraph").innerHTML= textArr[solutionIndex];
}
function nextSolutionIndex(solutionIndex){
	let index = solutionIndex+1;
	return index;
}
renderRenderbody(solutionIndex);
document.getElementById(buttons[0]).addEventListener('click', function(){
	if (this.innerHTML === solutionValue[solutionIndex]) {

	}
		else{console.log("FALSCH" +solutionValue[solutionIndex]);}

});
document.getElementById(buttons[1]).addEventListener('click', function(){
	var h = JSON.parse(localStorage.getItem("solution"));
	if (this.innerHTML === solutionValue[solutionIndex]) {

		if(solutionIndex === 3){
			document.getElementById("main__quiz").classList.add("hidden");
			document.getElementById("main__statistic").classList.remove("hidden");	
		}
		else
		{
			randomChoice = shuffle(randomChoice);
			randomizeChoiceButtons(buttons, randomChoice);
			solutionIndex=nextSolutionIndex(solutionIndex);
			document.getElementById("progress").value += 10;
			renderRenderbody(solutionIndex);
		}

	}
		else{console.log("FALSCH" +solutionValue[solutionIndex]);}

});
document.getElementById(buttons[2]).addEventListener('click', function(){
	var h = JSON.parse(localStorage.getItem("solution"));
	if (this.innerHTML === solutionValue[solutionIndex]) {

		if(solutionIndex === 3){
			document.getElementById("main__quiz").classList.add("hidden");
			document.getElementById("main__statistic").classList.remove("hidden");	
		}
		else
		{
			randomChoice = shuffle(randomChoice);
			randomizeChoiceButtons(buttons, randomChoice);
			solutionIndex=nextSolutionIndex(solutionIndex);
			document.getElementById("progress").value += 10;
			renderRenderbody(solutionIndex);
		}

	}
		else{console.log("FALSCH" +solutionValue[solutionIndex]);}

});
document.getElementById(buttons[3]).addEventListener('click', function(){
	var h = JSON.parse(localStorage.getItem("solution"));
	if (this.innerHTML === solutionValue[solutionIndex]) {

		if(solutionIndex === 3){
			document.getElementById("main__quiz").classList.add("hidden");
			document.getElementById("main__statistic").classList.remove("hidden");	
		}
		else
		{
			randomChoice = shuffle(randomChoice);
			randomizeChoiceButtons(buttons, randomChoice);
			solutionIndex=nextSolutionIndex(solutionIndex);
			document.getElementById("progress").value += 10;
			renderRenderbody(solutionIndex);
		}

	}
		else{console.log("FALSCH" +solutionValue[solutionIndex]);}

});


document.getElementById("form_button").addEventListener('click', () =>{
	var sel = document.getElementById("menuform").value;
	if (sel !== 'Modul') {
		document.getElementById("main__menu").classList.add("hidden");
		document.getElementById("main__quiz").classList.remove("hidden");
	}
	else
	{
		document.getElementById("menuform").classList.add("main__choicebox--redLine");
	}
})

document.getElementById("statistic__button").addEventListener('click', () =>{
	document.getElementById("main__menu").classList.remove("hidden");
	document.getElementById("main__statistic").classList.add("hidden");
});

