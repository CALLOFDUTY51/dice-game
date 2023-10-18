document.addEventListener("DOMContentLoaded", function () {
    let roll_dice = document.querySelector(".btn--roll");
    let dice_img = document.querySelector(".dice");
    let curr_scor1 = document.querySelector("#current--0");
    let curr_scor2 = document.querySelector("#current--1");
    let hold = document.querySelector(".btn--hold");
    let total_sum1 = document.querySelector("#score--0");
    let total_sum2 = document.querySelector("#score--1");
    let p1 = document.querySelector("#name--0");
    let p2 = document.querySelector("#name--1");
    let p1body = document.querySelector(".player--0");
    let p2body = document.querySelector(".player--1");
    let new_game = document.querySelector(".btn--new");

let sum1=0;
let sum2=0;
let curr_play_scor=0;
let player=1;
let random_number;
function diceimage(random_number){
    if(random_number==1){
        dice_img.src="./dice-1.png";
    }
    if(random_number==2){
        dice_img.src="./dice-2.png";
    }
    if(random_number==3){
        dice_img.src="./dice-3.png";
    }
    if(random_number==4){
        dice_img.src="./dice-4.png";
    }
    if(random_number==5){
        dice_img.src="./dice-5.png";
    }
    if(random_number==6){
        dice_img.src="./dice-6.png";
    }
    
}

function dice_roll(){
       random_number=Math.trunc(Math.random()*6)+1;
       diceimage(random_number);
       if(player==1){
         if(random_number!=1){
            if(random_number+sum1+curr_play_scor>=20){
                p1.textContent="player1 won";
                total_sum1.textContent=random_number+sum1+curr_play_scor;
                p1body.style.backgroundColor="black";
                roll_dice.disabled=true;
                hold.disabled=true;
            }
            curr_play_scor+=random_number;
            curr_scor1.textContent=curr_play_scor;
          }
          else{
            curr_play_scor=0;
            player=2;
            curr_scor1.textContent=0;

          }
    }
    else if(player==2){
        if(random_number!=1){
            if(random_number+sum2+curr_play_scor>=20){
                p2.textContent="player2 won";
                total_sum2.textContent=random_number+sum2+curr_play_scor;
                p2body.style.backgroundColor="black";
                roll_dice.disabled=true;
                hold.disabled=true;
            }
           curr_play_scor+=random_number;
           curr_scor2.textContent=curr_play_scor;
         }
         else{
           curr_play_scor=0;
           player=1;
           curr_scor2.textContent=0;

         }
   }
}

function holding(){
    if(player==1){
        sum1+=curr_play_scor;
        total_sum1.textContent=sum1;
        curr_scor1.textContent=0;
        player=2;
        curr_play_scor=0;
    }
  else if(player==2){
        sum2+=curr_play_scor;
        total_sum2.textContent=sum2;
        curr_scor2.textContent=0;
        player=1;
        curr_play_scor=0;
    }
}

function replay(){
    p1.textContent="PLAYER 1";
    p2.textContent="PLAYER 2";
    dice_img.src="./dice-5.png";
    total_sum1.textContent=0;
    total_sum2.textContent=0;
    curr_play_scor=0;
    curr_scor1.textContent=0;
    curr_scor2.textContent=0;
    sum1=0;
    sum2=0;
    roll_dice.disabled=false;
    hold.disabled=false;
}

new_game.addEventListener("click",replay);
roll_dice.addEventListener("click",dice_roll);
hold.addEventListener("click",holding);
});