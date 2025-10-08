function loaduser(){
    const result=document.getElementById("res")
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
        if(!response){
            throw new Error("Internet Issue!")

        }
        return response.json()
    }).then((data)=>{
        data.map((value)=>{
            console.log(value.username,value.email,value.address.city);
            result.innerHTML+=`<li><b>${value.username}</b> - ${value.email} - ${value.address.city}</li>`
        })
    }).catch(()=>{
        throw new Error("No Data Found!")
    })   //fetch is a asynchronous func which returns promise
    
}
