import "../index.css"

import img from "../files/todo.jpg"


const h1 = document.createElement("h1")
h1.innerText = "TODO"
h1.classList.add("redtxt");

const logo = document.createElement("img")
logo.setAttribute("src",img)
logo.classList.add("logo")


const div = document.createElement('div')



document.getElementById("table").append(h1,logo)






