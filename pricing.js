const cBox = document.querySelector('.checkbox')
const amt1 = document.querySelector('.amt1')
const amt2 = document.querySelector('.amt2')
const amt3 = document.querySelector('.amt3')
const mo1 = document.querySelector('.mo1')
const mo2 = document.querySelector('.mo2')
const mo3 = document.querySelector('.mo3')
const Yearly = document.querySelector('#Yearly')
const monthly = document.querySelector('#monthly')

cBox.addEventListener('click', () => {
    // amt1.classList.toggle('checked')

    if (cBox.checked) {
        console.log(mo1)
        amt1.innerText = '$48'
        amt2.innerText = '$144'
        amt3.innerText = '$84'

        mo1.innerText = '/yr'
        mo2.innerText = '/yr'
        mo3.innerText = '/yr'

        Yearly.style.fontWeight = 'bold'
        monthly.style.fontWeight = 'normal'

    } else {
        amt1.innerText = '$4'
        amt2.innerText = '$12'
        amt3.innerText = '$7'

        mo1.innerText = '/mo'
        mo2.innerText = '/mo'
        mo3.innerText = '/mo'


        monthly.style.fontWeight = 'bold'
        Yearly.style.fontWeight = 'normal'
    }
})

function amount(value) {
    value *= 12;
}