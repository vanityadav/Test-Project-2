let next = 1 
let maximages = 10

let img = document.getElementById("imgName")
let registerbtn = document.querySelector('.openModal')
let modalReg = document.querySelector('.register-modal')
let closeModal = document.querySelector('.sumbit-register')
let registerheaderbtn = document.querySelector('.Register')
let nextImagebtn = document.querySelector('.btn-right-image')
let previousImagebtn = document.querySelector('.btn-left-image')
let schButton = Array.from(document.querySelectorAll('.sch-btn'))
let eventRegister = Array.from(document.querySelectorAll('.event-register'))
    
nextImagebtn.addEventListener('click', nextImage)
previousImagebtn.addEventListener('click', previousImage)
document.addEventListener('DOMContentLoaded', changeImage)
closeModal.addEventListener('click', ()=> modalReg.close())
registerbtn.addEventListener('click', ()=> modalReg.showModal())
registerheaderbtn.addEventListener('click', () => modalReg.showModal())
eventRegister.forEach(element => { element.addEventListener('click', ()=>modalReg.showModal())});

schButton.forEach(element => { element.addEventListener('click', showEvents)});

function changeImage() {
    next += 1
    if (next < maximages) {
        imgnewsrc = `../img${next}.jpg`
        img.src = imgnewsrc
    }
    else {
        next=1
        imgnewsrc = `../img${next}.jpg`
        img.src = imgnewsrc
    }
     setTimeout(changeImage, 5000);
}

function nextImage() {
    let newnext = next + 1
    next+=1
    if (newnext < maximages && newnext >=1 ) {
        imgnewsrc = `../img${newnext}.jpg`
        img.src = imgnewsrc
    }
    else {
        next=1
        imgnewsrc = `../img${next}.jpg`
        img.src = imgnewsrc
    }
}

function previousImage() {
    let newnext = next - 1
    next-=1
    if (newnext < maximages && newnext >=1 ) {
        imgnewsrc = `../img${newnext}.jpg`
        img.src = imgnewsrc
    }
    else {
        next=maximages -1
        imgnewsrc = `../img${next}.jpg`
        img.src = imgnewsrc
    }
}

function showEvents() {
    let events = document.querySelector('.events')
    events.style.opacity = "1"
    events.style.animation = "slidein 0.7s ease-out 1 forwards"
    setTimeout(() => {events.style.animation=""}, 1000);
}