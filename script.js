function nextPage() {

    document.querySelector(".container").style.display = "none";

    document.getElementById("page2").style.display = "block";

}

function nextPage2() {

    document.getElementById("page2").style.display = "none";

    document.getElementById("page3").style.display = "block";

}

function yesClick() {

    document.getElementById("page3").style.display = "none";

    document.getElementById("final").style.display = "block";

    createHearts();

}

function hmmClick() {

    alert("No pressure at all 😊 Take your time. I just wanted you to know how I feel 🌸");

}

// No button moving effect

function moveNo() {

    let button = document.getElementById("noBtn");

    let x = Math.random() * 250 - 125;

    let y = Math.random() * 200 - 100;

    button.style.transform =

        `translate(${x}px, ${y}px)`;

    let messages = [

        "Are you sure? 👀",

        "Give it another thought 🌸",

        "This button is shy today 😆",

        "Maybe try again? 💕"

    ];

    button.innerHTML =

        messages[Math.floor(Math.random() * messages.length)];

}

// Floating hearts after yes

function createHearts(){

    for(let i = 0; i < 25; i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = Math.random()*100 + "vw";

        heart.style.bottom = "0";

        heart.style.fontSize =

            (Math.random()*20 + 15) + "px";

        heart.style.animation =

            "rise 5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
