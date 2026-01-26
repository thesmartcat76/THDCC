document.getElementById('join_us').addEventListener('click', function() {
    document.getElementById('contact_form').style.display = 'block';
});

document.getElementById('cancel').addEventListener('click', function() {
    document.getElementById('contact_form').style.display = 'none';
});

document.getElementById('join_form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var contacts = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };
    // Send email to variable
    var clubEmail = "thdcc@example.com";
    var subject = "Join Request from " + name;
    var body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message;
    window.location.href = "mailto:" + clubEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    // Hide form
    document.getElementById('contact_form').style.display = 'none';
});
