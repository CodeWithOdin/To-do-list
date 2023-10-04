// let ip=document.querySelector(".task-show")
const form= document.querySelector(".form")
const par=document.querySelector(".each-task")
const input= "changed"


console.log(localStorage.getItem('data'))

form.addEventListener("submit",function(e){
    e.preventDefault();
  
    let create_input=document.createElement('input')
    create_input.className= "task-show"
    // create_input.value=input.value
    create_input.setAttribute('value',input)
    create_input.disabled=true// fase thhe..input le rra thha
    console.log(create_input);

})