const dom = document.querySelector("#heading")
const div = document.querySelector(".container")

dom.textContent= "List of Users"



const ul = document.querySelector(".container")

 
const makeRequest = async ()=>{
     await fetch('https://jsonplaceholder.typicode.com/users'
     )
     
    .then(response => response.json())

//     .then(res =>   console.log(res));

// }
// makeRequest()



    .then(res => {

        console.log(res)

        res.forEach ((each, i) => {
                               
            ul.innerHTML += `
            <div class="card">
                <h2 class="id">Id Number:${each.id}</h2>
                <p>Name: ${each.name}</p>
                <p>Username: ${each.username}</p>
                <p>Email: ${each.email}</p>
                    <hr/>
            </div>`
           
        });
    
    })
}


makeRequest()




