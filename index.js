const card_1 = document.getElementById('card_1')
const card_2 = document.getElementById('card_2')
const card_3 = document.getElementById('card_3')
const card_text_title_1 = document.getElementById('card-text-title_1')
const card_text_title_2 = document.getElementById('card-text-title_2')
const card_text_title_3 = document.getElementById('card-text-title_3')
const oval_1 = document.getElementById('oval_1')
const oval_2 = document.getElementById('oval_2')
const oval_3 = document.getElementById('oval_3')
const description_1 = document.getElementById('title_1')
const description_2 = document.getElementById('title_2')
const description_3 = document.getElementById('title_3')
const buy_btn_1 = document.getElementById('buy_1')
const buy_btn_2 = document.getElementById('buy_2')
const buy_btn_3 = document.getElementById('buy_3')
const card_footer = document.querySelector('.card-footer')

const description_text = ['Печень утки разварная с артишоками.',
                    'Головы щучьи с чесноком да свежайшая сёмгушка.',
                    'Печень утки разварная с артишоками.']

const disabled_description_text = ['Печалька, с фуа-гра закончился.',
                                    'Печалька, с рыбой закончился.',
                                    'Печалька, с курой закончился.']

const disabled = [false, false, false]
let contentTitle 
let contentTitleTop

function cardDisabled(card, oval, title, btn) {
    card.classList.add('selected')
    card.style.opacity = '0.3'
    oval.classList.add('selected-oval')
    title.style.color = '#FFFF66'
    btn.remove()
    if(oval.id === oval_1.id) {
        title.textContent = disabled_description_text[0]
        disabled[0] = true
    } else if(oval.id === oval_2.id) {
        title.textContent = disabled_description_text[1]
        disabled[1] = true
    } else {
        title.textContent = disabled_description_text[2]
        disabled[2] = true
    }
}

function cardSelect(card, oval, title, btn, titleTop) {
    card.classList.toggle('selected')
    oval.classList.toggle('selected-oval')
    titleTop.textContent = 'Котэ не одобряет?'
    if (card.classList.contains('selected')) {
        btn.style.display = 'none'
        if(oval.id === oval_1.id) {
            title.textContent = description_text[0]
        } else if(oval.id === oval_2.id) {
            title.textContent = description_text[1]
        } else {
            title.textContent = description_text[2]
        }
    } else {
        title.textContent = contentTitle
        titleTop.textContent = contentTitleTop
        btn.style.display = 'block'
    }

}

function buyClick(card, oval, title, btn, titleTop) {
    contentTitle = title.textContent
    contentTitleTop = titleTop.textContent
    btn.addEventListener('click', ()=> {
        cardSelect(card, oval, title, btn, titleTop)
    })
    card.addEventListener('click', ()=> {
        cardSelect(card, oval, title, btn, titleTop)
    })
}

// cardDisabled(card_1, oval_1, description_1, buy_btn_1)
// cardDisabled(card_2, oval_2, description_2, buy_btn_2)
// cardDisabled(card_3, oval_3, description_3, buy_btn_3)

if (!disabled[0])  {
    buyClick(card_1, oval_1, description_1, buy_btn_1, card_text_title_1)
}

if (!disabled[1]) {
    buyClick(card_2, oval_2, description_2, buy_btn_2, card_text_title_2)
}

if (!disabled[2]) {
    buyClick(card_3, oval_3, description_3, buy_btn_3, card_text_title_3)
}

