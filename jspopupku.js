let exitPopup = document.getElementById('exitPopup');
let noButton = document.getElementById('noButton');
let confirmed = false;

window.onpopstate = function(event) {
    if (!confirmed) {
        event.preventDefault();
        exitPopup.style.display = 'flex';
        history.pushState(null, null, location.href);
    }
};

noButton.addEventListener('click', function() {
    exitPopup.style.display = 'none';
});

document.getElementById('yesButton').addEventListener('click', function() {
    confirmed = true;
    window.history.back();
});

history.pushState(null, null, location.href);