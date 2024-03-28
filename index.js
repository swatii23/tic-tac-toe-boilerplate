let clicked = 0;
let x = [];
let o = [];

let combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const boxes = document.querySelectorAll(".box")
// console.log(boxes);
boxes.forEach(box => {
    // console.log(box);
    box.addEventListener("click", handleClick);
});

function handleClick(e) {
    // console.log(typeof e.target.id);
    let num = parseInt(e.target.id);
    // console.log(typeof num);

    let val = document.createElement("p");
    val.style.color = "#FAB201"
    console.log(boxes[num-1])
    boxes[num-1].appendChild(val);


    if(clicked % 2 == 0) {
        x.push(num-1);
        val.textContent = "x";
    } else {
        o.push(num-1);
        val.textContent = "o";
    }
    clicked++;
    winner();
}

function winner() {
    for (let combo of combos) {
        let [a, b, c] = combo;
        if (x.includes(a) && x.includes(b) && x.includes(c)) {
            displayWinner("X");
            return;
        }
        if (o.includes(a) && o.includes(b) && o.includes(c)) {
            displayWinner("O");
            return;
        }
    }
    if (clicked === 9) {
        displayWinner("draw");
    }
}

function displayWinner(player) {
    const result = document.getElementById("result")
    result.style.visibility = "visible";

    if(player == "draw"){
        message.innerHTML = `Game is draw.`
    } else {
        message.innerHTML = `'${player}' Won the game!`;
    }
}

document.getElementById("button").addEventListener("click", () => {
    window.location.reload();
})