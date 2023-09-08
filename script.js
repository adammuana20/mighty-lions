const checkbox = document.querySelector('input[id=terms_checkbox]');
const termsContent = document.querySelector('.terms-content');


checkbox.addEventListener('change', function() {
    if(this.checked) {
        termsContent.classList.add('show-terms');
    } else {
        termsContent.classList.remove('show-terms');
    }
})

const modalBtn = document.querySelectorAll('.claim-cta');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        modal.classList.add('open-modal');
    })
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal');
})


const imgBtns = document.querySelectorAll('.img-click')
const rewardContainers = document.querySelectorAll('.reward-display-img')

const claimBtn = document.querySelectorAll('.claim-cta')
claimBtn.forEach((btn) => {
    btn.classList.add('remove-pointer-event')
})

const rewardTitle = document.getElementById('header-title')
const rewardDescription = document.querySelector('.header-bottom p')
const rewardPoints = document.querySelector('.points')

const modalImg = document.querySelector('.modal-container img')
const modalTitle = document.querySelector('.modal-bottom-title')
const modalPoints = document.querySelector('.modal-points')

imgBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        rewardContainers.forEach((container) => {
            container.setAttribute('src', e.target.getAttribute('src'))
        })

        claimBtn.forEach((btn) => {
            btn.classList.remove('remove-pointer-event')
        })

        modalImg.setAttribute('src', e.target.getAttribute('src'))

        rewardTitle.innerHTML = e.target.parentElement.getElementsByClassName('reward-title')[0].innerHTML
        rewardDescription.innerHTML = e.target.parentElement.getElementsByClassName('reward-description')[0].innerHTML
        rewardPoints.innerHTML = e.target.parentElement.getElementsByClassName('reward-points')[0].innerHTML

        modalTitle.innerHTML = e.target.parentElement.getElementsByClassName('reward-title')[0].innerHTML
        modalPoints.innerHTML = e.target.parentElement.getElementsByClassName('reward-points')[0].innerHTML
    })
})