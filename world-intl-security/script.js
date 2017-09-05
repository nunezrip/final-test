const contactForm = document.querySelector('#contact-form')

contactForm.addEventListener('submit', function(e) {
e.preventDefault()

$.ajax({
    url: contactForm.action,
    method: contactForm.method,
    data: $(contactForm).serialize()
})
.done(function(response){
    console.log(response)
    let message = document.createElement('p');
    message.textContent = 'Message Sent!';
    contactForm.appendChild(message);
    message.style.marginTop = '20px';
})
.fail(err => {
    console.log(er);
})
}); 

const logo = document.querySelector('.brand-logo');
logo.addEventListener('click', () => {
    console.log('click on logo')
})

/*
function toggleDiv() {
    var x = document.getElementById(`card-title`);
    x.classList.toggle(`mystyle`);
}
*/

/*
function myFunction() {
    var x = document.getElementById('card-title');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
*/

(function() {
    var menuButton = document.getElementById('card-title');
    var menuClose = document.getElementById('card-content');
    var menuButtons = document.querySelectorAll('nav a');
    var nav = document.getElementsByTagName('nav')[0];

    menuButton.addEventListener('click', function() {
        if(nav.classList.contains('hide-menu')) {
            nav.classList.remove('hide-menu');
        }
        else {
            nav.classList.add('hide-menu');
        }
    });

    menuClose.addEventListener('click', function() {
        nav.classList.add('hide-menu');
    });

    for(var i = 0, x = menuButtons.length; i < x; i++) {
        menuButtons[i].addEventListener('click', function() {
            nav.classList.add('hide-menu');
        });
    }

})();


