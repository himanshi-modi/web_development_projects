let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;

document.addEventListener("keypress",function(){
    if(start==false){
        
        levelUp();
        start=true;
    }

    
    
});
let h4=document.querySelector('h4');

let ColorClass=["pink-box","blue-box","orange-box", "light-blue-box"];

function levelUp(){
    userSeq = [];
    level++;
    h4.innerText=`Level ${level}`;
    let randomIndex=Math.floor(Math.random()*4);
    let randomColorclass=ColorClass[randomIndex];
    let randombtn=document.querySelector(`.${randomColorclass}`);
    gameSeq.push(randomColorclass);

    Flash(randombtn);
    
}

function Flash(randombtn){
    randombtn.classList.add("flash-btn");
    setTimeout(function(){
        randombtn.classList.remove("flash-btn");
    },250);
}

function btnPress(){
    let btn=this;
    Flash(btn);
    let userColor=btn.getAttribute('id');

    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    

}
function reset(){
     gameSeq=[];
    userSeq=[];
     start=false;
     level=0;
}


function checkAns(currentIndex){
    if(userSeq[currentIndex]!=gameSeq[currentIndex]){
        h4.innerHTML=`Oops , Game Over !!,Your Score is ${level} <br>Press any key to start the game`;
        let body=document.querySelector('body');
        body.style.backgroundColor="red";
        setTimeout((function(){
        let body=document.querySelector('body');
        body.style.backgroundColor="white";

    }),250)
        reset();
        return;
    }
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
}
let btns=document.querySelectorAll('.color-div');
for(btn of btns){
    btn.addEventListener("click",btnPress);
}