
const arrrayoffruits  =["Frid Rice", "Jellof Rice","Rice and Stew","Yam and Beans", 
"Semo and Eqwusi Soup","Amala and Ogono Soup"]
function list() {
    // demo.innerHTML=""
    arrrayoffruits.forEach((each, i)=>{
        demo.innerHTML +=`<li>${each}</li>`
    })
  }


  function back() {
    document.querySelector("#demo").style.display='none'
  }

  function list_1() {
    demo1.innerHTML=""
    arrrayoffruits.forEach((each, i)=>{
        demo1.innerHTML +=`<li>${each}</li>`
    })
  }
