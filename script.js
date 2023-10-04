window.addEventListener('load',() =>{
    const input= document.querySelector("input")
    const form= document.querySelector(".form")
    // const parent= document.querySelector(".wrapper")
    const parentkaparent= document.querySelector(".task-body")
    let count=0


    function add(input){
        const head=document.createElement('h3');
        head.innerHTML=`Tasks ${count}`;
        //
        const parent = document.createElement('div');
        parent.className="wrapper"
                //
        const naya_each_task = document.createElement('section');
        naya_each_task.className= "each-task"
        const create_input=document.createElement('input')
        create_input.className= "task-show"
        // create_input.value=input.value //Ye value ka attribute save ni kr rha thha
        create_input.setAttribute('value',input.value) // isslie ye tarika!
        // console.log(input.value+' value');
        // document.getElementsByClassName("task-show").value=input.value;
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
        // save();
        input.value='' 
        console.log(count);        
        // window.localStorage.setItem('data',JSON.stringify(data))

    }
    
    function deletedata(sectiondata){
        par=sectiondata.parentNode
        // par2=head.parentNode
        console.log(par);
        // par2.removeChild(head)
        par.removeChild(sectiondata)
        console.log(par);
        count--;
        save();
    }
    function editor(ip){
        if(ip.target.innerHTML=="Edit"){
            const text=ip.target.parentNode.parentNode
            text.firstChild.disabled=false
            text.firstChild.focus()
            ip.target.innerHTML="Save"      }
            else{
                const text=ip.target.parentNode.parentNode
                text.firstChild.disabled=true
                ip.target.innerHTML="Edit"
            }
        save();
        
    }


    form.addEventListener("submit",function(e){
        e.preventDefault();
        count++;
        if(input.value===''){
            return
        }else{
            add(input)
            save();
            // window.localStorage.setItem('data',JSON.stringify(data)) 
        }

    })

    parent.addEventListener("click",function(e){
        // console.log(e.target.className);
        if (e.target.className=="delete"){
            // const body=e.target.parentNode.parentNode
            // console.log(body);
            deletedata(e.target.parentNode.parentNode.parentNode)
        }
        else if(e.target.className=="edit"){
            editor(e)   
        }
        save();
    })
    function save(){
        // let arr=[]
        // arr.push(JSON.stringify(parent.innerHTML))
        // console.log(JSON.stringify(parentkaparent));
        // localStorage.setItem('data', JSON.stringify(arr))
        // console.log(parentkaparent.children[2]);
        // console.log(parentkaparent);
        // window.localStorage.setItem('data',JSON.stringify(parent.innerHTML))
        localStorage.setItem('data',parentkaparent.innerHTML)
        // console.log(data);
    }
    function show(){
        // parent.innerHTML=JSON.parse(localStorage.getItem('data'))
        parentkaparent.innerHTML=localStorage.getItem('data')

    }
    show();
    // localStorage.clear();
    
})

