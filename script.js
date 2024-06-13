// Javascript for rock paper scissors game


// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("p");
para.textContent = "Hey I'm Red"
para.style.color = "red"

container.appendChild(para);

const headerThree = document.createElement("h3");
headerThree.classList.add("h3");
headerThree.textContent = "I'm a blue h3"
headerThree.style.color = "blue"

container.appendChild(headerThree);

const box = document.createElement("div");
box.classList.add("div");
box.style.backgroundColor = "pink"
box.style.borderColor = "black"
const headerOne = document.createElement("h1");
headerOne.classList.add("h1");
headerOne.textContent = "I'm a div"
const paragraph = document.createElement("p");
paragraph.classList.add("p");
paragraph.textContent = "ME TOO!"
box.appendChild(headerOne,);
box.appendChild(paragraph);

container.appendChild(box, headerOne, paragraph);


