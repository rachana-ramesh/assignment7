/*eslint-env browser*/

//STEP 1
function display() {
    "use strict";
    window.alert("I have been clicked- Step 1");
}

function init() {
    "use strict";
    var button2, button3, button4;
//STEP 2
    button2 = document.getElementById("button2");
    button2.onclick = function () {
        window.alert("I have been clicked- Step 2");
    };

//STEP 3
function writeMessage() {
    window.alert("I have been clicked- Step 3");
}
button3 = document.getElementById("button3");
button3.addEventListener("click", writeMessage);

//STEP 4
button4 = document.getElementById("button4");
    button4.addEventListener("click", function () {
        window.alert("I have been clicked- Step 4");
    }, false);
}
window.addEventListener("load", init, false);

//STEP 5
// IN THE HEAD TAG



