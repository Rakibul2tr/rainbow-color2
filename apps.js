const colors=['red','green','yellow','orange','blue','purple','cornflowerblue'];

let container= document.querySelector('.container');

let h1=document.querySelector('h1');
let selectedColor = document.querySelector('#selectedcolor');


for(let color of colors){
    const box=document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.backgroundColor=color;


    box.addEventListener('click',function(){
        h1.innerText=('you are selected: ');
        selectedColor.innerText = box.style.backgroundColor;
        selectedColor.style.background = box.style.backgroundColor;
    })
}
