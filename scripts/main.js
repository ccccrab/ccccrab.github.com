
var myImg = document.querySelector("img");
myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/1.jpg') {
        myImg.setAttribute('src', 'images/2.jpg');
    } else{
        myImg.setAttribute('src', 'images/1.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozila is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozila is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}