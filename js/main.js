// Write your DOM code here!
const red1 = document.getElementById('redBtn')
const white1 = document.querySelector("#whiteBtn")
const blue1 = document.getElementById('blueBtn')
const yellow1 = document.querySelector('#yellowBtn')


red1.addEventListener('click', () => 
{
let body = document.querySelector('body')
body.style.backgroundColor = 'red'
})


white1.addEventListener('click', () =>
{
    let body = document.querySelector('body')
    body.style.backgroundColor = "white"
})

blue1.addEventListener('click', () =>
{
    let body = document.querySelector('body')
    body.style.backgroundColor = "blue"
})

yellow1.addEventListener('click', () => {
    let body = document.querySelector('body')
    body.style.backgroundColor = "yellow"
})