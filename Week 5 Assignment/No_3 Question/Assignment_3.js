
const dom = document.querySelector("#demo")

function Verify (each) {
     let dom1 = String
    
    if (dom1== String & each== "failed"){
       
        dom.textContent= "Transcation Verification"
        dom.style.color= "white";
        dom.style.backgroundColor="red"
        return dom
    }else if (dom1 == String & each =="successful"){
        dom.textContent= "Transcation Verification"
        dom.style.color= "white";
        dom.style.backgroundColor="green"
    }else{
        dom.innerHTML=""
        dom.style.backgroundColor="silver"
    }
}

Verify("successful")


