let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#msg")
let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");

choices.forEach((choice)=>{  
    const gencompchoice=()=>{
        const options=["Rock","Paper","Scissor"];
        const idx=Math.floor(Math.random()*3);
        return options[idx];
    }
    const Finalwinner=(userwin,userchoice,compchoice)=>{
        if(userwin){
            userScore++;
            userscorepara.innerHTML=userScore;
            console.log("YOU WIN")
            msg.innerHTML=`YOU WIN! Your ${userchoice} Beats ${compchoice}` ;
            msg.style.backgroundColor="green";

        }
        else{
            compScore++;
            compscorepara.innerHTML=compScore;
            console.log("YOU LOSE");
            msg.innerHTML=`YOU LOSE! ${compchoice} Beats Your ${userchoice}`
            msg.style.backgroundColor="red";

        }
    }
    
    const playgame =(userchoice)=>{
        const compchoice=gencompchoice();
        if(userchoice===compchoice){
            msg.innerHTML="YOU DRAW PLAY AGAIN!"
            msg.style.backgroundColor="black";
            
        }
        
        else{
            let userwin=true;
            if(userchoice==="Rock"){
                userwin=compchoice==="Paper"?false:true;
            }
            else if(userchoice==="Paper"){
                userwin=compchoice==="Scissor"?false:true;
            }
            else{
                userwin=compchoice==="Rock"?false:true;
            }
            Finalwinner(userwin,userchoice,compchoice);
        }
        
    }
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})