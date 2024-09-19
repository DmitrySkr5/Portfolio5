let turn = true; //true = X
let btn = document.querySelectorAll(".btn");
let btnClicked = 0;

btn.forEach(b => {
    b.addEventListener("click", btnClick);
});

function btnClick() {
    if(this.textContent != "") return;

    if(turn) this.textContent = "X";
    else this.textContent = "O";

    //checkWin
    let obj = checkWin();
    if(obj.win) {
        setTimeout(() => {
            alert(this.textContent + " has Won");
            reset();

        }, 200);
    } else if(obj.isTie) {
        setTimeout(() => {
            alert("It's a Tie");
            reset();
        }, 200);
    }

    turn = !turn;
}

function checkWin() {
    let obj = {win: false, isTie: false, pos:[]};

    if (btn[0].textContent == btn[1].textContent && btn[1].textContent == btn[2].textContent && btn[2].textContent != "") obj = {win: true, isTie: false, pos: [0, 1, 2]};
    else if (btn[3].textContent == btn[4].textContent && btn[4].textContent == btn[5].textContent && btn[5].textContent != "") obj = { win: true, isTie: false, pos: [3, 4, 5] };
    else if (btn[6].textContent == btn[7].textContent && btn[7].textContent == btn[8].textContent && btn[8].textContent != "") obj = { win: true, isTie: false, pos: [6, 7, 8] };
    else if (btn[0].textContent == btn[3].textContent && btn[3].textContent == btn[6].textContent && btn[6].textContent != "") obj = { win: true, isTie: false, pos: [0, 3, 6] };
    else if (btn[1].textContent == btn[4].textContent && btn[4].textContent == btn[7].textContent && btn[7].textContent != "") obj = { win: true, isTie: false, pos: [1, 4, 7] };
    else if (btn[2].textContent == btn[5].textContent && btn[5].textContent == btn[8].textContent && btn[8].textContent != "") obj = { win: true, isTie: false, pos: [2, 5, 8] };
    else if (btn[0].textContent == btn[4].textContent && btn[4].textContent == btn[8].textContent && btn[8].textContent != "") obj = { win: true, isTie: false, pos: [0, 4, 8] };
    else if (btn[2].textContent == btn[4].textContent && btn[4].textContent == btn[6].textContent && btn[6].textContent != "") obj = { win: true, isTie: false, pos: [2, 4, 6] };
    else if (btnClicked == 9) obj = { win: false, isTie: true, pos: []};

    return obj;
}

function reset() {
    turn = !turn;
    btnClicked = 0;
    btn.forEach(b => {
        b.textContent = "";
        b.style.color = "";
    });
}