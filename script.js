//your JS code here. If required.

const element = document.getElementById('level');

// Initialize the DOM level to 0
const n = 0;

while (element.parentNode) {
    element = element.parentNode;
    n++;
}

alert('The level of the element is: ' + n);
