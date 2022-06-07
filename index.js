// Write your code here!
const testVar = "hello"

/* code to remove the node element */
document.querySelector("main#main").remove();

/* new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Temba is the champion!";
newHeader.className = "victory";