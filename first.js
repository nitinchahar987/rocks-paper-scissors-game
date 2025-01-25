let userscore =0;
let compscore=0;
let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const result= document.querySelector(".msg-container");
const choices= document.querySelectorAll(".choice");
const showwinner = (userwin,userchoice,compChoice) => {
    if(userwin===true){
        console.log("you win")
        msg.innerText=`you win!! your ${userchoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
        userscore++;
        userscorepara.innerText=userscore;
        
    }
    else{
        console.log("you lose");
        msg.innerText=`oppss you lose!! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        compscorepara.innerText=compscore;

    }
}

const genCompChoice = () =>{
    const option    = ["rock","paper","scissors"];
    const randomIdx =Math.floor(Math.random()*3);
    return option[randomIdx];
}
const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compChoice= genCompChoice();
    console.log("comp choice = ", compChoice);
    if(userchoice===compChoice){
        msg.innerText= "game is draw.try again!!";
        msg.style.backgroundColor="#081b31"
        return console.log("game is draw");
        
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            if(compChoice==="paper"){
                userwin=false;
            }
            
        }
        else if(userchoice==="paper"){
            if(compChoice==="scissors"){
                userwin=false;
            }
        }
        else{
            if(compChoice==="rock"){
                userwin=false;
            }
        }
        showwinner(userwin,userchoice,compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
        
    });   
});
const restart=document.querySelector("#reset");
restart.addEventListener("click",() =>{
    userscore=0;
    compscore=0;
    userscorepara.innerText=0;
    compscorepara.innerText=0;
});

