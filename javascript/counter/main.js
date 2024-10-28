let x = document.querySelectorAll(".btn button")
let y = document.querySelector(".count p")
x[0].addEventListener("click",()=>{
    i = parseInt(y.innerHTML)
    i++
    y.innerHTML = i
})
x[1].addEventListener("click",()=>{
    i = parseInt(y.innerHTML)
    i = 0
    y. innerHTML = i
})
x[2].addEventListener("click",()=>{
    i = parseInt(y.innerHTML)
    i--
    y.innerHTML = i
})