$(document).ready(function () {
    $('#submit').click(function(event) {

        var name = $('#first-name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        var statusElm = $('#status');
        statusElm.empty()

        if(name.length > 2) {
        } else {
            event.preventDefault();
            statusElm.append('<div class="invalid">Name is not valid</div>');
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
        } else {
            event.preventDefault();
            statusElm.append('<div class="invalid">Email is not valid</div>');
        }

        if(subject.length >= 2) {
        } else {
            event.preventDefault();
            statusElm.append('<div class="invalid">Subject is not valid</div>');
        }

        if(message.length >= 10) {
        } else {
            event.preventDefault();
            statusElm.append('<div class="invalid">Message is not valid</div>');
        }
    })
})