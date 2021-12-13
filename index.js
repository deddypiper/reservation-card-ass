const decrementBtn = document.querySelector('#decrement')
const incrementBtn = document.querySelector('#increment')
const peopleAmt = document.querySelector('#people')
const names = document.querySelector('#name')
const email = document.querySelector('#email')
const reservationBtn = document.querySelector('.reservation')
peopleAmt.textContent = 0
let num = peopleAmt.textContent

const validateNameAndEmail = ()=> { 
if ((names.value == "") || (email.value == "")) {
        alert("Input field(s) can not be empty")
        event.preventDefault()
} else if ( (names.value.length <  3) || (email.value.length < 5 )  ) {
    alert("name must be at least 3 characters and email must be valid")
    event.preventDefault()
} else { return true}
}

const increment = ()=> { num ++
    if (num === 0){
       return  peopleAmt.textContent = `${num} person`
    }   else if (num === 1) {
        return peopleAmt.textContent = `${num} person`
    }  else if (num >= 2) {
        return peopleAmt.textContent = `${num} people`
    }
}

const decrement = ()=> {
    if (num < 1){}  else { 
        num --
        if (num === 0){
            return  peopleAmt.textContent = `${num} person`
         }   else if (num === 1) {
             return peopleAmt.textContent = `${num} person`
         }  else if (num > 2) {
             return peopleAmt.textContent = `${num} people`
         }
     }
    }

incrementBtn.addEventListener('click', increment) 
decrementBtn.addEventListener('click', decrement) 
reservationBtn.addEventListener('click', validateNameAndEmail) 
