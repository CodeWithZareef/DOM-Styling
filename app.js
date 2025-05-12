
// Manipulate CSS using JavaScript

// style => get/set

let paraElement = document.getElementById('s-para');

console.log(paraElement);

// check what style paraEement have
console.log(paraElement.style);

// single inline style
paraElement.style.backgroundColor = 'blue';

// paraElement.style.backgroundColor = 'purple';

paraElement.style.color = 'white';

let secondElement = document.getElementById("s-div");

console.log(secondElement);

// cssText => Multiple inline style access

console.log(secondElement.style.cssText); // get kr liya

// set
secondElement.style.cssText = "background-color: black; color: white; padding: 0.5rem;";

console.log(secondElement.style.cssText);

// setAttribute('attributeName', 'value')

let firstElement = document.querySelector('#f-div');

firstElement.setAttribute('class', 'divClass');

console.log(firstElement);

firstElement.setAttribute('class', 'secondDivClass');

// firstElement.setAttribute('style', 'padding: 0.1rem');

console.log(firstElement);

firstElement.removeAttribute('class');

// className

let fpara = document.querySelector('#f-para');

// fpara.setAttribute('style', 'margin: 1rem');

console.log(fpara.className);

fpara.className = "firstClass secondClass";

console.log(fpara.className);

// classList class add/remove/toggle/contains
// get in Array format

let fPara = document.querySelector('#f-para');

fPara.classList.add('thirdClass');

console.log(fPara.classList);

fPara.classList.remove('firstClass');

console.log(fPara.classList);

fPara.classList.toggle('secondClass'); // return true/false

console.log(fPara.classList);

fPara.classList.toggle('secondClass');

console.log(fPara.classList);

// check class present or not (true/false)

console.log(fPara.classList.contains('firstClass'));

console.log(fPara.classList.contains('secondClass'));
