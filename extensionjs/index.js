const saveInput=document.getElementById("save-btn")
let ulEl=document.getElementById('ul-el')
let myLead=[]
let deleteBtn=document.getElementById("dlt-btn")
const inputText=document.getElementById("input-el")
let saveTab=document.getElementById("save-tab")
let  itemFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(itemFromLocalStorage){
    myLead=itemFromLocalStorage
    render(myLead)
}

saveTab.addEventListener("click",()=>{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLead.push(tabs[0].url)
        console.log(tabs)
        localStorage.setItem("myLeads",JSON.stringify(myLead))
        render(myLead)
    })
    
})


function render(lead){
    let listItem=" "
    for(let i=0; i<lead.length; i++){
        //Add the items to the listitems
        listItem +=`<li>
        <a target='_blank' href='${lead[i]}'>${lead[i]}</a>
        </li>`
        console.log(listItem)
    }
    
    ulEl.innerHTML =listItem
}
deleteBtn.addEventListener('dblclick',function() {
    console.log("double clicked")
    localStorage.clear()
    myLead=[]
    render(myLead)
})

saveInput.addEventListener('click', function(){
    
    myLead.push(inputText.value)
    inputText.value=" "
    localStorage.setItem("myLeads",JSON.stringify(myLead))
    render(myLead)

    console.log(localStorage.getItem("myLeads"))
})




