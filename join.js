const joinForm = document.getElementById('joinForm');

if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const reason = document.getElementById('reason').value.trim();
        const other = document.getElementById('other').checked;

        const clubEmail = 'twistedhotdawgcodingclub@gmail.com';
        const subject = 'Join Request from ' + name;
        const body = 'Name: ' + name + '\nReason: ' + reason + '\nOther: ' + other;
        const mailtoLink = 'mailto:' + clubEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        window.location.href = mailtoLink;
    });
}
