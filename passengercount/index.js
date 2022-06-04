let count=0;
let changeVal=document.getElementById("count-ele")
let saveEl=document.getElementById("save-el")


function increment(){
  count=count+1;
  console.log(count);
  changeVal.innerText=count;
}


function saved(){
    let dashC=count+" - ";
    saveEl.textContent+=dashC;
    changeVal.innerText=0;
    count=0
}

