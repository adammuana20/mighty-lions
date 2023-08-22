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