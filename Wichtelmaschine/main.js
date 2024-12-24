"use strict";
let names = ["Andreas", "Sammy", "Dennis", "Inessa", "Rosa", "Elvira", "Erwin", "Julia", "Jason", "Matthias", "Maria", "Jenny"];
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    console.log(document.getElementById("mybody").style.backgroundImage);
    document.getElementById("btn").addEventListener("click", buttonClicked);
    setInterval(gifthegif, 500);
}
let picture = 1;
function gifthegif() {
    console.log("yesyes");
    let body = document.getElementById("mybody");
    if (picture === 8) {
        picture = 1;
    }
    else {
        picture++;
    }
    switch (picture) {
        case 1:
            body.style.backgroundImage = "url(gif/1.jpg)";
            break;
        case 2:
            body.style.backgroundImage = "url(gif/2.jpg)";
            break;
        case 3:
            body.style.backgroundImage = "url(gif/3.jpg)";
            break;
        case 4:
            body.style.backgroundImage = "url(gif/4.jpg)";
            break;
        case 5:
            body.style.backgroundImage = "url(gif/5.jpg)";
            break;
        case 6:
            body.style.backgroundImage = "url(gif/6.jpg)";
            break;
        case 7:
            body.style.backgroundImage = "url(gif/7.jpg)";
            break;
        case 8:
            body.style.backgroundImage = "url(gif/8.jpg)";
            break;
    }
}
function buttonClicked(_event) {
    let index = Math.floor(Math.random() * names.length);
    let chosenname = names[index];
    names.splice(index, 1);
    const img = document.getElementById("wichtelbild");
    switch (chosenname) {
        case "Dennis":
            img.src = "Images/Dennis.jpg";
            break;
        case "Andreas":
            img.src = "Images/Andreas.jpg";
            break;
        case "Elvira":
            img.src = "Images/Elvira.jpg";
            break;
        case "Erwin":
            img.src = "Images/Erwin.jpg";
            break;
        case "Inessa":
            img.src = "Images/Inessa.jpg";
            break;
        case "Jason":
            img.src = "Images/Jason2.jpg";
            break;
        case "Jenny":
            img.src = "Images/Jenny.jpg";
            break;
        case "Julia":
            img.src = "Images/Julia.jpg";
            break;
        case "Maria":
            img.src = "Images/MAria2.jpg";
            break;
        case "Matthias":
            img.src = "Images/Matthias.jpg";
            break;
        case "Rosa":
            img.src = "Images/Rosa.jpg";
            break;
        case "Sammy":
            img.src = "Images/Sammy.jpg";
            break;
        default:
            img.src = "Images/Weihnachtsmann.jpg";
    }
}
