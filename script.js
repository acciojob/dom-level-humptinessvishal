//your JS code here. If required.

const element = document.getElementById('level');

// Initialize the DOM level to 0
const domLevel = 0;

// Traverse up the DOM hierarchy while there's a parent element
while (element.parentNode) {
    element = element.parentNode;
    domLevel++;
}

alert('The level of the element is: ' + domLevel);
