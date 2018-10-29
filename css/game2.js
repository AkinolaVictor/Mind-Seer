const row=[
["A"," B"," C"," D"," E."],
["F"," G"," H"," I"," J."],
["K"," L"," M"," N"," O."],
["P"," Q"," R"," S"," T."],
["U"," V"," W"," X"," Y."]
];


const col=[
["A"," F"," K"," P"," U."],
["B"," G"," L"," Q"," V."],
["C"," H"," M"," R"," W."],
["D"," I"," N"," S"," X."],
["E"," J"," O"," T"," Y."]
];

function initialize(){
  const rowsContainer = document.querySelector(".row");
  const colContainer = document.querySelector(".col");

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
initialize();


const eachRow = document.querySelectorAll(".eachRow");
for(let i=0; i<eachRow.length; i++){
   eachRow[i].addEventListener("click", function(){
  console.log(eachRow[i].innerHTML);
});
}

const eachCol = document.querySelectorAll(".eachCol");
for(let i=0; i<eachCol.length; i++){
   eachCol[i].addEventListener("click", function(){
  console.log(eachCol[i].innerHTML);
});
}