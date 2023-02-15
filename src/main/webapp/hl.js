var a = document.getElementById("n");

var o1 ;
var o2;

var g = document.getElementById("g");

var so = document.getElementById("so");

var b = document.getElementById("c");

var s = document.getElementById("g");

s.addEventListener(`click`, ()=>{
o1= a.value;
o2= b.value;

console.log(o2);
console.log(o1);

for(var i =1; i<=o1;i++){
 var th = document.createElement("div");
 th.style.width=`200px`;
 th.style.height=`200px`;
 th.style.backgroundColor=o2;

 so.appendChild(th);

}
});

