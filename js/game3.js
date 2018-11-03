const play=document.querySelector(".howTo");
const learn=document.querySelector('.learn');
play.addEventListener('click', function(){
	learn.classList.remove("hide");
	play.classList.add("hide");
});

const next=document.querySelector('.next');
const wl=document.querySelector('.wordLength');
next.addEventListener('click', function(){
	learn.classList.add("hide");
	wl.classList.remove("hide");
	
});



const wordLength=document.querySelector('#wordNumber');

const row=[
["A"," B"," C"," D"," E"],
["F"," G"," H"," I"," J"],
["K"," L"," M"," N"," O"],
["P"," Q"," R"," S"," T"],
["U"," V"," W"," X"," Y"]
];


const col=[
["A"," F"," K"," P"," U"],
["B"," G"," L"," Q"," V"],
["C"," H"," M"," R"," W"],
["D"," I"," N"," S"," X"],
["E"," J"," O"," T"," Y"]
];

const container=document.querySelector('#container');
const byrow=document.querySelector('.row');
const bycol=document.querySelector('.col');
const byco=document.querySelector('form');
let getIn;


const form3=document.querySelector('#wordProp');

const bttnC=document.querySelector('#bttn');
const bttn=document.querySelector('.bttn2');
bttnC.addEventListener('click', function(){
	let lengt=(form3.elements[0].value);
	for (let i=0; i<lengt; i++){
		getIn=i+1;
		ignite();
		wl.classList.add("hide");
	}
	let rhow= document.querySelectorAll(".row");
	let chol= document.querySelectorAll(".col");
	let msg=document.querySelectorAll('.msg');
	const word2= document.querySelector('.word2');
	rhow[0].classList.remove('hide');
	chol[0].classList.remove('hide');
	msg[0].classList.remove('hide');
	word2.classList.remove('hide');


});

let firstPart1= [];
let secondPart1= [];
let formingWord1=[];


//ignite();

function ignite(){


function initialize(){

const eachDiv =document.createElement('div');
eachDiv.setAttribute("class", "eachdiv");
const byRow =document.createElement('div');
byRow.setAttribute("class", "row hide");
const byCol =document.createElement('div');
byCol.setAttribute("class", "col hide");
const form1 =document.createElement('form');
const form2 =document.createElement('form');
const brk1 =document.createElement('br');
const brk2 =document.createElement('br');
const brk3 =document.createElement('br');
const message1 =document.createElement('p');
message1.setAttribute("class", "msg hide");
message1.innerHTML=`click on the button in which Letter ${getIn} is found. `

byRow.appendChild(form1);
byRow.appendChild(brk2);
byCol.appendChild(form2);
byCol.appendChild(brk1);
container.appendChild(message1);
eachDiv.appendChild(byRow);
eachDiv.appendChild(byCol);
container.appendChild(eachDiv);
//container.appendChild(brk3);







	for(let eachrr of row){
		
		const input =document.createElement('input');
		const brea =document.createElement('br');
		const span =document.createElement('span');
		input.setAttribute("type", "radio");
		input.setAttribute("name", "eachRow");
		input.setAttribute("value", eachrr);
		input.classList.add("noo");
		span.classList.add("eachRow");
		span.innerHTML=eachrr;
		
		form1.appendChild(input);
		form1.appendChild(span);
		form1.appendChild(brea);

	}

	for(let eachrr of col){

		const input =document.createElement('input');
		const brea =document.createElement('br');
		const span =document.createElement('span');
		input.setAttribute("type", "radio");
		input.setAttribute("name", "eachRow");
		input.setAttribute("value", eachrr);
		input.classList.add("noo");
		span.classList.add("eachRow");
		span.innerHTML=eachrr;
		
		form2.appendChild(input);
		form2.appendChild(span);
		form2.appendChild(brea);

	}

}

	initialize();



const form =document.querySelectorAll('form');



function engine(){

for (let f=0; f<form.length-1; f++){
	if (f%2==0) {
		let k=f;
			for (let j=0; j<form[k].elements.length; j++){
					form[k].elements[j].addEventListener("click", function(){
					let valu=form[k].elements[j].value;
					let valuArray=valu.split(', ');
					firstPart1=valuArray;
					//console.log(firstPart1);
					//console.log(form[k].elements[j].value);
				});
			}

	} else if(f%2==1){
				let d=f;
				for (let j=0; j<form[d].elements.length; j++){
					form[d].elements[j].addEventListener("click", function(){
					let valu=form[d].elements[j].value;
					let valuArray=valu.split(', ');
					secondPart1=valuArray;
					//console.log(secondPart1);
					//console.log(form[d].elements[j].value);
				});

				}

			
	}
}

}

engine();
}


function compare1(a, b){
	//let matches=[];
	for (let i of a){
		for( let j of b){
			if(i===j) {
				//matches.push(j);
				formingWord1.push(j);
			}
			
		}
	}
	

}


let counter=-1;
const word2= document.querySelector('.word2');
const word3= document.querySelector('.word3');
word2.addEventListener('click', function(){
		//initialize();
		compare1(firstPart1, secondPart1);
		
		firstPart1=[];
		secondPart1=[];
		//console.log(formingWord1.join(''));
		
		let rhow= document.querySelectorAll(".row");
		let chol= document.querySelectorAll(".col");
		let msg=document.querySelectorAll('.msg');
		
		counter++;
		if (formingWord1.join('').length==counter+1){
			if(counter+1==form3.elements[0].value){
				rhow[counter].classList.add("hide");
				chol[counter].classList.add("hide");
				msg[counter].classList.add("hide");
			}else{
			rhow[counter+1].classList.remove("hide");
			chol[counter+1].classList.remove("hide");
			msg[counter+1].classList.remove("hide");
			rhow[counter].classList.add("hide");
			chol[counter].classList.add("hide");
			msg[counter].classList.add("hide");
				}
		}else{
			alert(`you have only clicked on one or none of the plates below, please, ensure that you click on both before going for the next.( Reclick the one you have clicked before going to next) `);
			counter--;

		}

	if(formingWord1.join('').length==form3.elements[0].value){
		const theWord=document.querySelector("#word");
		
		word2.classList.add("hide");
		word3.classList.remove("hide");
		theWord.innerHTML=formingWord1.join('');

	}	

});
const restart=document.querySelector(".restart");
word3.addEventListener('click', function(){
	const theWd=document.querySelector(".theWord");
	theWd.classList.remove("hide");
	restart.classList.remove("hide");
	word3.classList.add("hide");

});

restart.addEventListener('click', function(){
	window.location.reload(true);
});
