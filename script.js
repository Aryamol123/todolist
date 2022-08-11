let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");
addBtn.addEventListener("click", addKitchenItems);
kitchenItemsList.addEventListener("click",deleteKitchenItems)
kitchenItemsList.addEventListener('click',editKitchenItems);

let kitchenInputData;
let kitchenInputArray = [];

//add to local storage
function setLocalStorage(){
    localStorage.setItem("kitchenInput",JSON.stringify(kitchenInputArray));
}

//get local storage

function getLocalStorage(){
  if(localStorage.getItem("kitchenInput"))
  {
    kitchenInputArray=JSON.parse(localStorage.getItem("kitchenInput")) 
    buildUI();

}
 
}



function buildUI(){

  
  kitchenItemsList.textContent = " ";
  kitchenInputArray.forEach((item)=>{
            //add elemnts to DOM
   let li = document.createElement("li");

   let spanElement = document.createElement('span');
   li.appendChild(spanElement);
   spanElement.innerText = item;
 
   li.style.cssText = "animation-name :slideIn";
   kitchenInput.value = " ";
   kitchenItemsList.appendChild(li);
   kitchenInput.focus();
 
   //create trash button
   let trashBtn = document.createElement("i");
   trashBtn.classList.add("fa-solid", "fa-circle-xmark");
   li.appendChild(trashBtn);
 
   //create edit button
   let editBtn = document.createElement('i');
   editBtn.classList.add('fas','fa-edit');
   li.appendChild(editBtn)
  })

}

//add kitchen items
function addKitchenItems() {
  kitchenInputData = kitchenInput.value;
  if(kitchenInputData.trim().length === 0){
    return;
   }
  kitchenInputArray.push(kitchenInputData)
  // console.log(kitchenInputArray)
  //set to local storage
  setLocalStorage();

  //get frm local storage

  getLocalStorage();
  

 

}

//delete items from kitchen list
function deleteKitchenItems(event){
 if(event.target.classList[0] === 'fa-solid'){
  let item = event.target.parentNode;
  // console.log(event.target.parentNode)
  item.classList.add('slideOut');
  item.addEventListener("transitionend",function(){
   
    item.remove();
  
    

  })
 }
}


//edit kitchen items
function editKitchenItems(event){
  console.log(event)
if(event.target.classList[1] === 'fa-edit'){

  
  let editedValue = prompt("Please add new value");
  if(editedValue.trim().length === 0){
    return;
  }
  let item = event.target.parentNode;
  let spanElement = item.querySelector('span');
  spanElement.innerText = editedValue
}

}

// getLocalStorage();
