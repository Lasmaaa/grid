const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
resize();

const colors = ["#ff4d4d", "#4dff4d", "#4dd2ff", "#ffd24d", "#d24dff"];
const confetties = [];

function createConfetti() {
    return {
        x: Math.random() * canvas.width,
        y: -20,
        size: Math.random() * 8 + 2,
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 4 + 1,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5,
        life: Math.random() * canvas.height + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.5 ? "rect" : "circle"
    };
}

function spawn() {
    confetties.push(createConfetti());
    setTimeout(spawn, Math.random() * 150);
}
spawn();



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = confetties.length - 1; i >= 0; i--) {
        const c = confetties[i];

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation * Math.PI / 180);
        ctx.fillStyle = c.color;

        if (c.shape === "rect") {
            ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, c.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();

        c.x += c.speedX + Math.sin(c.y * 0.02) * Math.random();
        c.y += c.speedY;
        c.rotation += c.rotationSpeed;
        c.life--;

        if (c.life <= 0 || c.y > canvas.height + 20) {
            confetties.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", resize);



let rotation = 0;
let clockwise = true;

function rotateTable() {
  if (clockwise) {
    rotation += 360;
  } else {
    rotation -= 360;
  }
  
  document.getElementById("myTable").style.transform = `rotate(${rotation}deg)`;
  
  clockwise = !clockwise;
}






const link1 = document.getElementById("youtubeText");
const storageKey1 = "youtubeVisited";


if (localStorage.getItem(storageKey1)) {
  link1.classList.add("visited");
}

link1.addEventListener("click", () => {
  window.open("https://www.youtube.com", "_blank");
  
  localStorage.setItem(storageKey1, "true");
  
  link1.classList.add("visited");
});
const link2 = document.getElementById("E-klase-text");
const storageKey2 = "E-klaseVisited";


if (localStorage.getItem(storageKey2)) {
  link2.classList.add("visited");
}

link2.addEventListener("click", () => {
  window.open("https://www.e-klase.lv", "_blank");
  
  localStorage.setItem(storageKey2, "true");
  
  link2.classList.add("visited");
});






const link3 = document.getElementById("Gmail-text");
const storageKey3 = "GmailVisited";


if (localStorage.getItem(storageKey3)) {
  link3.classList.add("visited");
}

link3.addEventListener("click", () => {
  window.open("https://mail.google.com/mail/u/0/", "_blank");
  
  localStorage.setItem(storageKey3, "true");
  
  link3.classList.add("visited");
});



const link4 = document.getElementById("VTDT-text");
const storageKey4 = "VTDTVisited";


if (localStorage.getItem(storageKey4)) {
  link3.classList.add("visited");
}

link4.addEventListener("click", () => {
  window.open("https://www.vtdt.lv/", "_blank");
  
  localStorage.setItem(storageKey4, "true");
  
  link4.classList.add("visited");
});



const link5 = document.getElementById("A-text");
const storageKey5 = "AVisited";


if (localStorage.getItem(storageKey5)) {
  link5.classList.add("visited");
}

link5.addEventListener("click", () => {
  window.open("https://www.1a.lv/?utm_source=google&utm_medium=cpc&utm_id=13230312462&utm_campaign=Search%20|%20CLASSICAL%20|%20Brand&gad_source=1&gad_campaignid=13230312462&gbraid=0AAAAADtaQTKyDHCw5WuIyZM01-qkgtMi1&gclid=Cj0KCQiA6Y7KBhCkARIsAOxhqtNwwHv5bMN2icD4yCsja8BJQKTqgnVcbVCFROTbuwNU3JaOT_ooPeQaAuKvEALw_wcB", "_blank");
  
  localStorage.setItem(storageKey5, "true");
  
  link5.classList.add("visited");
});


