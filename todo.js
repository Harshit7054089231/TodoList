
//selectors

const okBtn = document.querySelector(".mybtn");
const inputField = document.querySelector(".input_field");
const deleteBtn = document.querySelector(".overall");








//Event Listeners

okBtn.addEventListener("click",addItem);
deleteBtn.addEventListener("click",deleteItem);






//Also on pressing enter key

document.addEventListener("keypress",function(e){

  if(e.keyCode === 13)
  {
    addItem();
  }
  

});



//Functions

//Adding the item
function addItem() {

  // e.preventDefault();
  
  let userInput = document.querySelector(".input_field").value;


  let html = '<div class="todo_container"><div class="todo_item"><main class="items">%data%</main><main class="btn1"><i class="fas fa-minus-circle"></i></main><main class="btn2"><i class="fas fa-check-square"></i></main></div></div>';

  let newHtml = html.replace('%data%',userInput);

  document.querySelector(".overall").insertAdjacentHTML('beforeend',newHtml);

  inputField.value = "";
  inputField.focus();





  /*
  const todoDiv =  document.createElement("div");
  todoDiv.classList.add("todo_container");

  const todoItem =  document.createElement("div");
  todoItem.classList.add("todo_item");

  todoDiv.appendChild(todoItem);

  const itemMain =  document.createElement("main");
  itemMain.classList.add("items");
  itemMain.textContent = userInput;
  todoItem.appendChild(itemMain);

  const btnMain =  document.createElement("main");
  btnMain.classList.add("btn");
  btnMain.innerHTML =  '<i class="fas fa-minus-circle"></i>';
  todoItem.appendChild(btnMain);


  document.querySelector(".overall").appendChild(todoDiv);

  inputField.value = "";


*/





}

//Deleting the item

function deleteItem(e)
{
 
  const Item = e.target;
  

  if(Item.classList[1] === "fa-minus-circle")
  {
   const todo = Item.parentNode.parentNode.parentNode;
   todo.classList.add("fall");
   todo.addEventListener("transitionend",function(){
    todo.remove();
   });
  
  }

  if(Item.classList[1] === "fa-check-square") 
  {
    const todo = Item.parentNode.parentNode.parentNode;
    todo.classList.toggle("completed");
  }

}










//For clearing input field on refresh
inputField.value = "";





