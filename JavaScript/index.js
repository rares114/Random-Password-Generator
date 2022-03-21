let myReminders = []
let myPasses = []
let reminderEl = document.getElementById("input-rem") //gets the reminder element
const inputEl  = document.getElementById("input-el") //gets the number input element
let stringg = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()" //string of characters included
let formed = "" //initial password
let copy //copy of the string
let idx = 0 //string index
const ulEl = document.getElementById("ul-el")

let passesFromLocalStorage = JSON.parse( localStorage.getItem("myPasses") )
let remindersFromLocalStorage = JSON.parse(localStorage.getItem("myReminders"))

document.getElementById("btn-el").addEventListener("click",function generate() {
    if(reminderEl.value && inputEl.value)
    {
        copy = formed

    for(let i=0; i<inputEl.value; i++)
    {
        idx = Math.floor(Math.random() * 46)
        copy = copy + stringg[idx]
    } 

    myPasses.push(copy)
    myReminders.push(reminderEl.value)
    
    localStorage.setItem("myPasses", JSON.stringify(myPasses) )
    localStorage.setItem("myReminders", JSON.stringify(myReminders) )
}

    renderPasses()
    emptyInput()
})

if (passesFromLocalStorage) {
    myPasses = passesFromLocalStorage
    myReminders = remindersFromLocalStorage
    renderPasses()
}

function renderPasses() {
    let listPasses = ""

    for (let i = 0; i < myPasses.length; i++) {
        listPasses += "<li>" + myReminders[i] + " " + myPasses[i] + "</li>"
    }
    
    ulEl.innerHTML = listPasses
}

function emptyInput() {
    reminderEl.value = null
    inputEl.value = null
}

document.getElementById("del-el").addEventListener("click",function() {
    localStorage.clear()
    myPasses = []
    myReminders = []
    renderPasses()
})