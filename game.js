let gameSeq = [];
let userSer = [];
let bArray = ["one", "two", "three", "four"];
let started = false;
// let userC;
let level = 0;
document.addEventListener("keypress", function (event) {
    // if (event.code == "Enter") {
        if (started == false) {
            started = true;
            level = 0;
            gameSeq = [];
            userSer = [];
            levelup();
            document.querySelector("h3").innerText="";
        }
    // }
})

function levelup() {
    level++;
    userSer = [];
    document.querySelector("h2").innerText = `Level ${level}`;
    let btn = (Math.floor(Math.random() * 4));
    btnflash(btn);
    // btnflash(btn);   
}
function btnflash(btn) {
    let btnc = bArray[btn];
    console.log(btnc);
    let CurrentClass = document.querySelector(`.${btnc}`);
    gameSeq.push(btnc);
    CurrentClass.classList.add("flash");
    // console.dir(CurrentClass);
    setTimeout(function () {
        CurrentClass.classList.remove("flash")
    }, 200);

}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
    // btn.innerText="H";
}
function btnPress() {
    if(started){
    userC = this.getAttribute("id");
    userSer.push(userC);
    checker();
    console.log("user choice",userC);
}
}

function checker() {
    let x = userSer.length - 1;
    if (userSer[x] == gameSeq[x]) {
        document.querySelector(`#${userC}`).classList.add("gflash");
        setTimeout(function () {
            document.querySelector(`#${userC}`).classList.remove("gflash");
        }, 100);
        if (userSer.length == gameSeq.length) {
            levelup();
        }
    }
    else {
        document.querySelector("body").classList.add("danger");
        setTimeout(function () {
            document.querySelector("body").classList.remove("danger");

        }, 100);
        document.querySelector("h2").innerText = `Game over | Your Score: ${level - 1}`;
        let r = document.querySelector("h3");
        r.innerText = "Press 'Enter' key to restart";
        // document.querySelector("h2").insertAdjacentElement('afterend', r);
        started = false;
    }
}

