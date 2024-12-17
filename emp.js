let data =[]

function display(){
    let tbody= document.querySelector("tbody")
    tbody.innerHTML=''
    data.forEach((user)=>{
        let tr= document.createElement("tr")

        let id_td=document.createElement("td")
        id_td.innerHTML=user.id
        tr.appendChild(id_td)

        let name_td=document.createElement("td")
        name_td.innerHTML=user.name
        tr.appendChild(name_td)

        let position_td=document.createElement("td")
        position_td.innerHTML=user.position
        tr.appendChild(position_td)
        
        let salary_td=document.createElement("td")
        salary_td.innerHTML=user.salary
        tr.appendChild(salary_td)

        let edit_td = document.createElement("td")
        let edit_btn = document.createElement("button")
        edit_btn.innerHTML="edit"

        edit_btn.onclick=function(){
            edit_form(user.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement("td")
        let dele_btn=document.createElement("button")
        dele_btn.innerHTML="Delete"

        dele_btn.onclick=function(){
            delete_data(user.id)
        }
        delete_td.appendChild(dele_btn)
        tr.appendChild(delete_td)

        tbody.appendChild(tr)
    })
}

function delete_data(id){
    data = data.filter((user)=>user.id!=id)
    display()
}

let edit_data
function edit_form(id){
    document.getElementById("edit_form").style.display='block'
    document.getElementById("add_form").style.display='none'
    let edit = data.find((user)=>user.id==id)
    document.getElementById("e_id").value=edit.id
    document.getElementById("e_name").value=edit.name
    document.getElementById("e_position").value=edit.position
    document.getElementById("e_salary").value=edit.salary

    edit_data = id
}

document.getElementById("edit_form").addEventListener("submit",function(event){
    event.preventDefault()
    let id = document.getElementById("e_id").value
    let name = document.getElementById("e_name").value
    let position = document.getElementById("e_position").value
    let salary = document.getElementById("e_salary").value

    data = data.map((user)=>{
        if(user.id==edit_data){
            return{...user,id:id,name:name,position:position,salary:salary}
        }
        return user
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    display()

})




document.getElementById("add_form").addEventListener('submit',function(event){
    event.preventDefault()
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let position = document.getElementById("position").value
    let salary = document.getElementById("salary").value
    data.push({id:id,name:name,position:position,salary:salary})


    document.getElementById("id").value=''
    document.getElementById("name").value=''
    document.getElementById("position").value=''
    document.getElementById("salary").value=''
    display()


})


display()


  