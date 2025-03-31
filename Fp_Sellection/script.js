let prevButton = document.getElementById('antes')
let nextButton = document.getElementById('depois')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicador')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let fistPosition = 0
let lastPosition = items.length - 1

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    list.style.setProperty('--aux', -1)


    itemOld.classList.remove('active')

    active = active - 1 < fistPosition ? lastPosition : active - 1

    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')

    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

    indicator.querySelector('.numeros').innerHTML = '0' + (active + 1)



}

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')

    list.style.setProperty('--aux', 1)

    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1

    items[active].classList.add('active')


    let dotsOld = indicator.querySelector('ul li.active')

    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

    indicator.querySelector('.numeros').innerHTML = '0' + (active + 1)
    
}


