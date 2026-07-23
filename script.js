let noCount = 0;

let musicPlaying = false;

// Page change

function showPage(pageId){

    document.querySelectorAll(".card").forEach(card=>{

        card.classList.remove("active");

    });

    document.getElementById(pageId).classList.add("active");

}

// Music

function toggleMusic(){

    const music = document.getElementById("bgMusic");

    const btn = document.getElementById("musicBtn");

    if(!music) return;

    if(musicPlaying){

        music.pause();

        btn.innerHTML="🎵";

        musicPlaying=false;

    }

    else{

        music.volume=0.35;

        music.play();

        btn.innerHTML="🔊";

        musicPlaying=true;

    }

}

// Hmm button

function hmmClick(){

    document.getElementById("reaction").innerHTML =

    "No worries 🤍 Take your time 😊";

}

// No button

function noClick(){

    const noBtn =

    document.getElementById("noBtn");

    const reaction =

    document.getElementById("reaction");

    const messages=[

    "Are you sure? 👀",

    "Think again 🌸",

    "Don't dare to press again 😭",

    "This button is getting scared 😆",

    "Nice try 🤭",

    "Maybe your heart says yes? 💗",

    "Wrong button detected 😂",

    "Okay... the No button is running away now 🏃‍♂️",

    "I think you clicked the wrong one 😌"

    ];

    reaction.innerHTML =

    messages[noCount % messages.length];

    noCount++;

    let x =

    Math.random()*250-125;

    let y =

    Math.random()*160-80;

    noBtn.style.transform =

    `translate(${x}px,${y}px)`;

    if(noCount >= 5){

        noBtn.innerHTML="No? Really? 😭";

    }

}

// Yes button

function yesClick(){

    document.getElementById("page3")

    .classList.remove("active");

    document.getElementById("final")

    .classList.add("active");

    createHearts();

}

// Heart animation

function createHearts(){

    for(let i=0;i<50;i++){

        let heart=document.createElement("div");

        heart.innerHTML =

        ["💗","💕","✨","🌸"]

        [Math.floor(Math.random()*4)];

        heart.style.position="fixed";

        heart.style.left =

        Math.random()*100+"vw";

        heart.style.bottom="-20px";

        heart.style.fontSize =

        15+Math.random()*25+"px";

        heart.style.animation =

        "rise 5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
