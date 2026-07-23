let noCount = 0;

let musicPlaying = false;

// Change page

function showPage(pageId) {

    document.querySelectorAll(".card").forEach(card => {

        card.classList.remove("active");

    });

    const page = document.getElementById(pageId);

    if(page){

        page.classList.add("active");

    }

}

// Music

function toggleMusic(){

    const music = document.getElementById("bgMusic");

    const btn = document.getElementById("musicBtn");

    if(!music) return;

    if(musicPlaying){

        music.pause();

        musicPlaying = false;

        btn.innerHTML = "🎵";

    }

    else{

        music.volume = 0.35;

        music.play();

        musicPlaying = true;

        btn.innerHTML = "🔊";

    }

}

// Hmm button

function hmmClick(){

    document.getElementById("reaction").innerHTML =

    "Take your time 🤍 I will wait 😊";

}

// No button

function noClick(){

    const btn = document.getElementById("noBtn");

    const reaction = document.getElementById("reaction");

    const messages = [

        "Are you sure? 👀",

        "Think again 🌸",

        "Don't dare to press again 😭",

        "This button is scared 😆",

        "Nice try 🤭",

        "Maybe your heart says yes? 💗",

        "Wrong button detected 😂"

    ];

    reaction.innerHTML =

    messages[noCount % messages.length];

    noCount++;

    let x = Math.random() * 200 - 100;

    let y = Math.random() * 120 - 60;

    btn.style.transform =

    `translate(${x}px, ${y}px)`;

}

// Yes button

function yesClick(){

    document.getElementById("page3")

    .classList.remove("active");

    document.getElementById("final")

    .classList.add("active");

    hearts();

}

// Heart effect

function hearts(){

    for(let i=0;i<40;i++){

        let heart=document.createElement("div");

        heart.innerHTML="💗";

        heart.style.position="fixed";

        heart.style.left =

        Math.random()*100+"vw";

        heart.style.bottom="0";

        heart.style.fontSize =

        (15+Math.random()*20)+"px";

        heart.style.animation =

        "rise 5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
