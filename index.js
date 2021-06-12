const hamburger = document.querySelector('#hamburger')
let ul = document.querySelector('.nav')
let text = document.querySelector('.text-block')


function toggling() {
    ul.classList.toggle('show')
    text.classList.toggle('hide')
    
}
hamburger.addEventListener('click', toggling)
