let counter = 0 
let counterG = 0

let homeVar = document.getElementById("home")
let guestVar = document.getElementById("guest")



function plusOne(){
    counter+= 1
    homeVar.textContent = counter
}

function plusTwo(){
    counter+= 2
    homeVar.textContent = counter
}

function plusThree(){
    counter+= 3
    homeVar.textContent = counter
}

function plusOneG(){
    counterG+= 1
    guestVar.textContent = counterG
}

function plusTwoG(){
    counterG+= 2
    guestVar.textContent = counterG
}

function plusThreeG(){
    counterG+= 3
    guestVar.textContent = counterG
}

function reset(){
    homeVar.textContent = 0
    guestVar.textContent = 0
    counter = 0
    counterG = 0
}