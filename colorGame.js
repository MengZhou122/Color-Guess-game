var numSquares = 6;
var colors = [];
var picked;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var reset = document.getElementById("reset");
var message = document.getElementById("message");
var buttons = document.querySelectorAll(".mode");


init();

function init(){
    reset.addEventListener("click", resetGame);
    setupMode();
    setupSquares();
    resetGame();
}

function setupMode(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
            buttons[0].classList.remove("selected");
            buttons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            resetGame();
        });
    }
}

function resetGame(){
    //reset colors and picked
    colors = generateRandomColors(numSquares);
    picked = randomPick();
    colorDisplay.textContent = picked;

    //reset all the display
    reset.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        //add initial colors
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            //grab color of clicked square and compare with picked
            if (clickedColor === picked){
                message.textContent = "Correct!";
                reset.textContent = "Play Again?";
                changeColors(picked);
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Agian";
            }
        })
    }
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function randomPick() {
    var randint = Math.floor(Math.random() * colors.length);
    return colors[randint];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}