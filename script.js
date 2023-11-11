window.addEventListener('load',() =>{
    const input= document.querySelector("input")
    const form= document.querySelector(".form")
    const parent= document.querySelector(".button")
    const parentkaparent= document.querySelector(".task-body")
    let count=0
    show();

    form.addEventListener("submit",function(e){
        e.preventDefault();
       
        if(input.value===''){
            return
        }else{
            add(input)
            save(); 
        }

    })


    function add(input){
        const head=document.createElement('h3');
        const parent = document.createElement('div');
        parent.className="wrapper"
        const naya_each_task = document.createElement('section');
        naya_each_task.className= "each-task"
        const create_input=document.createElement('input')
        create_input.className= "task-show"
        create_input.setAttribute('value',input.value) // isslie ye tarika!
        create_input.disabled=true// fase thhe..input le rra thha
        const create_button=document.createElement('div')
        create_button.className= "button"
        const create_edit=document.createElement('button')
        create_edit.className= "edit"
        create_edit.innerHTML=('Edit')
        const create_delete=document.createElement('button')
        create_delete.className= "delete"
        create_delete.innerHTML=('Delete')
        naya_each_task.appendChild(create_input)
        create_button.appendChild(create_edit)
        create_button.appendChild(create_delete)
        naya_each_task.appendChild(create_button)      
        console.log(naya_each_task);
        parent.appendChild(head);
        parent.appendChild(naya_each_task);
        parentkaparent.appendChild(parent)
        input.value='' 
        console.log(count);
        taskNumberUpdate()        
        // window.localStorage.setItem('data',JSON.stringify(data))

    }
    
    function deletedata(sectiondata){
        par=sectiondata.parentNode
        console.log(par);
        par.removeChild(sectiondata)
        console.log(par);
        taskNumberUpdate()
        save();
    }

    function taskNumberUpdate(){
        const hTag=document.querySelectorAll("h3")
        hTag.forEach((ele,index)=>{
            ele.textContent="Task "+`${index+=1}`
        })
    }
    function editor(ip){
        const section=ip.target.parentNode.parentNode
        if(ip.target.innerHTML=="Edit"){
            console.log(section.firstChild);
            section.firstChild.disabled=false
            section.firstChild.focus()
            ip.target.innerHTML="Save" 
            }
            else if(ip.target.innerHTML=="Save"){              
                console.log(section.firstChild.value);
                section.firstChild.value=`${section.firstChild.value}`
                section.firstChild.disabled=true       
                ip.target.innerHTML="Edit"
                
            }
            save()

        
    }

    document.addEventListener("click",function(e){
        if (e.target.className=="delete"){
            deletedata(e.target.parentNode.parentNode.parentNode)
        }
        else if(e.target.className=="edit"){
            // console.log(e);
            editor(e)  
            console.log(e); 
        }
    })
    function save(){
        localStorage.setItem('data',parentkaparent.innerHTML)
    }
    function show(){
        parentkaparent.innerHTML=localStorage.getItem('data')

    }
    
    // localStorage.clear();
    
})

