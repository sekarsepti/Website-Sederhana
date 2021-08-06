const txtElement = ['Ceritain Kisahmu Bersama Kami'];
let count = 0;
let txtIndex = 0;
let currentTxt ='';
let words='';

(function ngetik(){

	if (count == txtElement.length){
		count=0;
}
 
	currentTxt = txtElement [count];

	words= currentTxt.slice(0, ++txtIndex);
	document.querySelector ('.efek-ngetik').textContent = words;
	if (words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}
	setTimeout (ngetik,200);
})();



var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}