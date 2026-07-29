const joinForm = document.getElementById('join_form');
joinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var reason = document.getElementById('reason').value;
    var other = document.getElementById('other').checked;

    // Send email to variable
    var clubEmail = "twistedhotdawgcodingclub@gmail.com";
    var subject = "Join Request from " + name;
    var body = "Name: " + name + "\nReason: " + reason + "\nOther: " + other;
    window.location.href = "mailto:" + clubEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});
