let click = 0;
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
console.log(boxes);
boxes.forEach(box => {
    console.log(box);
    box.addEventListener("click", handleClick);
});

function handleClick(e) {
    // console.log(typeof e.target.id);
    let num = parseInt(e.target.id);
    // console.log(typeof num);

    let val = document.createElement("p");
    boxes[num-1].append(val);


    if(click % 2 == 0) {
        x.push(num-1);
        val.textContent = "x";
    } else {
        o.push(num-1);
        val.textContent = "o";
    }

}