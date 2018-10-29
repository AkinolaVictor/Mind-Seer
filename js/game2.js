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

function initialize(){
  
  const rowsContainer = document.querySelector(".row");
  const colContainer = document.querySelector(".col");

  const content = document.createElement("div");
   content.classList.add("Row");
  const rowContent = document.createElement("li");
  rowContent.classList.add("eachRow");
  content.appendChild(rowContent);


  for (eachRw of row){
    const rowContent = document.createElement("li");
    rowContent.classList.add("eachRow");
    rowContent.innerHTML+=eachRw;
    rowsContainer.appendChild(rowContent);
  }

  for (eachCl of col){
        const colContent = document.createElement("li");
        colContent.classList.add("eachCol");
        colContent.innerHTML+=eachCl;
        colContainer.appendChild(colContent);
  }


}

for (let t= 0; t<1; t++){
	

	initialize();
}




let firstPart= [];
let secondPart= [];
let formingWord=[];


//console.log(firstPart)

const eachRow = document.querySelectorAll(".eachRow");
for(let i=0; i<eachRow.length; i++){
   eachRow[i].addEventListener("click", function(){
   let it=eachRow[i].innerHTML;
   let arit = it.split(', ')
   firstPart=arit;
   //console.log(firstPart);
});
}

const eachCol = document.querySelectorAll(".eachCol");
for(let im of eachCol){
   im.addEventListener("click", function(){
   	let it=im.innerHTML;
   	let arit = it.split(', ')
   	secondPart=arit;
  	//console.log(secondPart);
    
});
}

function comp(a, b){
	let matches=[];
	for (let i of a){
		for( let j of b){
			if(i===j) {
				matches.push(j);
				formingWord.push(j);
			}
			
		}
	}
	return matches;
	

}


const wordss= document.querySelector('.word');
wordss.addEventListener('click', function(){
		comp(firstPart, secondPart);
		firstPart=[];
		secondPart=[];
		console.log(formingWord.join(''));
});


