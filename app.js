// let newDiv = document.createElement('div');

// newDiv.setAttribute('id','myDiv');

// let DivContent = document.createTextNode('We are creating a new div!');
// newDiv.appendChild(DivContent);

// let newParagraph = document.createElement('p');
// newParagraph.setAttribute('id','newParagraph');
// newParagraph.innerHTML = '<strong>This is my paragraph</strong>';

// let myDiv=  document.getElementById('mydiv');
// newDiv.appendChild(newParagraph);

// let myButton = document.createElement('button');

// myButton.setAttribute('id','myButton');

// myButton.setAttribute('class','but');

// myButton.innerText='Clicke me!';

// // myDiv.appendChild(myButton);
// // function newfunction(){
// //     return document.getElementById('myDiv');
// // }

// newDiv.insertBefore(myButton,newParagraph);



let newDiv = document.createElement("div");

newDiv.setAttribute("id", "myDiv");
let divContent = document.createTextNode("We are creating a new div!");

newDiv.appendChild(divContent);
document.body.appendChild(newDiv);

let newParagraph = document.createElement("p");
newParagraph.setAttribute("id", "newParagraph");

newParagraph.innerHTML = "<strong>This is my paragraph.</strong>";

newDiv.appendChild(newParagraph);

let myButton = document.createElement("button");
myButton.setAttribute("id", "myButton");

myButton.setAttribute("class", "but");

myButton.innerText = "Click me!";
//newDiv.appendChild(myButton);

newDiv.insertBefore(myButton, newParagraph);