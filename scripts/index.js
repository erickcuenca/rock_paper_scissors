let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let choice = 0;
let submit = document.querySelector("#submit");
let arena = document.querySelector("#arena");
let opponent = 0
let op = document.querySelector("#op");
let you = document.querySelector("#you")


rock.onclick = function() {
    rock.classList.add("choose");
    paper.classList.remove("choose");
    scissors.classList.remove("choose");
    choice = 1;
    op.textContent = "?";
    arena.textContent = "???";
    you.textContent = "ROCK";
}

paper.onclick = function() {
    paper.classList.add("choose");
    rock.classList.remove("choose");
    scissors.classList.remove("choose");
    choice = 2;
    op.textContent = "?";
    arena.textContent = "???";
    you.textContent = "PAPER";
}

scissors.onclick = function() {
    scissors.classList.add("choose");
    rock.classList.remove("choose");
    paper.classList.remove("choose");
    choice = 3;
    op.textContent = "?";
    arena.textContent = "???";
    you.textContent = "SCISSORS";
}

submit.onclick = function() {
    op.textContent = "?";
    opponent = Math.floor(Math.random() * 3) + 1;
    if(choice === 0) {
        arena.textContent = "Please make a decision.";
        you.textContent = "?";
    }
    else if(choice === 1 && opponent === 1) {
        arena.textContent = "Draw.";
    }
    else if(choice === 2 && opponent === 2) {
        arena.textContent = "Draw.";
    }
    else if(choice === 3 && opponent === 3) {
        arena.textContent = "Draw.";
    }
    else if(choice === 1 && opponent === 2) {
            arena.textContent = "You lose.";
    }
    else if(choice === 1 && opponent === 3) {
            arena.textContent = "You win.";
    }
    else if(choice === 2 && opponent === 1) {
            arena.textContent = "You win.";
    }
    else if(choice === 2 && opponent === 3) {
            arena.textContent = "You lose.";
    }
    else if(choice === 3 && opponent === 1) {
            arena.textContent = "You lose.";
    }
    else if(choice === 3 && opponent === 2) {
            arena.textContent = "You win.";
    }
    if (opponent === 1 && choice !== 0) {
        op.textContent = "ROCK";
    }
    else if (opponent === 2 && choice !== 0) {
        op.textContent = "PAPER";
    }
    else if (opponent === 3 && choice !== 0) {
        op.textContent = "SCISSORS";
    }
    
    scissors.classList.remove("choose");
    rock.classList.remove("choose");
    paper.classList.remove("choose");
    choice = 0;
}
