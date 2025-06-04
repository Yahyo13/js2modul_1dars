let body = document.querySelector(`main`)
let body1 = document.querySelector(`header`)
let body2 = document.querySelector(`body`)


let dark_button = document.querySelector(`.dark`)
let light_button = document.querySelector(`.light`)

let but = document.querySelector(`.get`)

let logo = document.querySelector(`.h11`)
let logo2 = document.querySelector(`.h12`)

let a1 = document.querySelector(`.a1`)
let a2 = document.querySelector(`.a2`)
let a3 = document.querySelector(`.a3`)

let p = document.querySelector(`.p`)



let bg_dark = function(){
    body.style.background = `black`
    body1.style.background = `black`
    body2.style.background = `black`

    a1.style.color = `white`
    a2.style.color = `white`
    a3.style.color = `white`
    logo.style.color = `white`
    logo2.style.color = `white`

    p.style.color = `white`
    but.style.color = `white`

    light_button.style.background = `rgba(196, 181, 165, 1)`
    light_button.style.color = `white`

    dark_button.style.background = `rgba(250, 144, 33, 1)`
    dark_button.style.color = `white`
}

let bg_light = function(){
    body.style.background = `rgba(196, 181, 165, 1)`
    body1.style.background = `rgba(196, 181, 165, 1)`
    body2.style.background = `rgba(196, 181, 165, 1)`

    a1.style.color = `black`
    a2.style.color = `black`
    a3.style.color = `black`
    logo.style.color = `black`
    logo2.style.color = `black`

    p.style.color = `black`
    but.style.color = `black`

    light_button.style.background = `rgba(251, 152, 47, 1)`
    light_button.style.color = `black`

     dark_button.style.background = `black`
    dark_button.style.color = `white`
}