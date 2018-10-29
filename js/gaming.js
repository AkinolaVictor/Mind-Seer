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

const form=document.querySelector('wordProp');

const wordLength=document.querySelector('#wordNumber');
	let N = wordLength.value;
const btn=document.querySelector('#button');
btn.addEventListener('click', function(){
	console.log(N);
});

