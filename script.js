let boxes = document.querySelectorAll(".box");
let turnX = true;
let count = 0;
let msg = document.getElementById("msg");

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// main click logic
boxes.forEach((box) => {
    box.addEventListener("click", () => {
   
        // prevent overwrite
        if (box.innerText !== "") return;

    // turn logic
        if (turnX) {
           box.innerText = "X";
            box.classList.add("pop");

            setTimeout(() => {
        box.classList.remove("pop");
    }, 100);

           box.style.color = "blue";
        } else {
           box.innerText = "O";
           box.style.color = "black";
        }
         turnX = !turnX;
         count++;

        // check winner
        checkWinner();
    });
});

// winner function
function checkWinner() {
    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            msg.innerText = "Winner is " + pos1;
            highlightWinner(pattern);
            disableBoxes();
            return;
            
        }
    }

    if (count === 9) {
        msg.innerText = "Match Draw";
    }
    }
//update checkwinner
    function highlightWinner(pattern) {
    pattern.forEach((index) => {
        boxes[index].classList.add("win");
    });
}
    
//disable boxes
    function disableBoxes() {
        boxes.forEach((box) => {
            box.disabled = true;
        });
    }

// reset button
let resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.classList.remove("win", "pop");
        box.innerText = "";
        box.disabled = false;
        box.style.color = "";
    });
    turnX = true;
    count = 0;
    msg.innerText = "";
});















