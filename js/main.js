document.getElementById("ham-button").onclick = function () { myFunction() };
document.getElementById("down-button").onclick = function () { myFunctionTwo() };

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunctionTwo() {
    document.getElementById("myDrop").classList.toggle("show");
}