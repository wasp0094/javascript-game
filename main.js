let character = document.getElementById("character");
let block = document.getElementById("block");
function jump() {
    if (character.classList != "animate") {
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}
}

let checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>-20 && characterTop>=430) {
         block.style.animation = "none";
         block.style.display = "none";
        alert("Game Over");
    }
},10);

//blockLeft<30 && blockLeft>10