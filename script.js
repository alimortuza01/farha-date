let noCount = 0;

let musicPlaying = false;

// Page change with smooth effect

function showPage(pageId){

    document.querySelectorAll(".card").forEach(card=>{

        card.classList.remove("active");

    });

    const page = document.getElementById(pageId);

    page.classList.add("active");

}

// Background music

function toggleMusic(){

    const music = document.getElementById("bgMusic");

    const btn = document.getElementById("musicBtn");

    if(!musicPlaying){

        music.volume = 0.35;

        music.play()

        .then(()=>{

            btn.innerHTML="🔊";

            musicPlaying=true;

        })

        .catch(()=>{

            btn.innerHTML="🎵";

        });

    }else{

        music.pause();

        btn.innerHTML="🎵";

        musicPlaying=false;

    }

}

// Hmm option

function hmmClick(){

    const reaction =

    document.getElementById("reaction");

    reaction.innerHTML =

    "No worries 😊 Take your time... 🌸";

}

// Impossible No button

function noClick(){

    const btn =

    document.getElementById("noBtn");

    const reaction =

    document.getElementById("reaction");

    const messages=[

    "Are you sure? 👀",

    "Think again 🌸",

    "Don't dare to press again 😭",

    "This button is losing confidence 😆",

    "Nice try... but I'm moving 🤭",

    "Maybe your heart says yes? 💗",

    "Wrong button detected 😂",

    "The No button wants to escape 🏃‍♂️"

    ];

    reaction.innerHTML =

    messages[noCount % messages.length];

    noCount++;

    const maxX =

    window.innerWidth/2 - 120;

    const maxY =

    window.innerHeight/2 - 80;

    const x =

    Math.random()*maxX - maxX/2;

    const y =

    Math.random()*maxY - maxY/2;

    btn.style.transform =

    `translate(${x}px,${y}px) rotate(${Math.random()*20-10}deg)`;

    btn.innerHTML =

    noCount > 3 ?

    "Really? 😭" :

    "No 🙃";

}

// Yes button

function yesClick(){

    document.getElementById("page3")

    .classList.remove("active");

    document.getElementById("final")

    .classList.add("active");

    heartExplosion();

}

// Heart explosion

function heartExplosion(){

    for(let i=0;i<60;i++){

        const heart =

        document.createElement("div");

        heart.innerHTML =

        ["💗","💕","❤️","✨"][Math.floor(Math.random()*4)];

        heart.style.position="fixed";

        heart.style.left =

        Math.random()*100+"vw";

        heart.style.bottom="-20px";

        heart.style.fontSize =

        (15+Math.random()*30)+"px";

        heart.style.animation =

        "rise 5s ease forwards";

        heart.style.pointerEvents="none";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
