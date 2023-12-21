

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/test-image.jpg") {
        myImage.setAttribute("src", "images/test-image2.jpg");
    } else {
        myImage.setAttribute("src", "images/test-image.jpg");
    }
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mountaineering Today with, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mountaineering Today with, ${myName}`;
    }
}
