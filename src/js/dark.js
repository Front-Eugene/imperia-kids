const darkBtn = document.querySelector('.dark-btn');

darkBtn.addEventListener('click', function () {
    const body = document.getElementById('body');
          body.classList.toggle('night')
})