let cards= []
let result=0
let hasBlackJack=false
let aliveBlackJack=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playerEl=document.getElementById("player-el")
let player={
    name:"per",
    chips:42
}

playerEl.textContent= player.name+" $"+ player.chips

function getRandomCard(){
 
    let randomNum= Math.floor(Math.random()*13)+1
    if(randomNum==1){
        return 11;
    }
    else if(randomNum>10){
        return 10
    }
    else{
        return randomNum
    }
}

function startGame(){
    aliveBlackJack=true
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards= [firstCard,secondCard]
     result=firstCard+secondCard
    renderGame()
}
function renderGame(){
    if(result<20){
   
        message="Do you want to draw a card again?"
    }
    else if(result===21){
        message="Hurrah!! You win"
        hasBlackJack=true
    }
    else{
        message="You lost"
        aliveBlackJack=false
    }
    messageEl.textContent= message
    sumEl.textContent="Sum:"+result
    cardEl.textContent= "Cards: "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent+=cards[i]+" "
    }
}

function newCard(){
    if(hasBlackJack===false && aliveBlackJack===true){
        let newCardVal=getRandomCard()
        result+=newCardVal
        cards.push(newCardVal)
        renderGame()
    }
  
}

