let joinSubject = "Join request from " + document.getElementById("name").value + " (" + document.getElementById("email").value + ")";
let joinName = "Name: " + document.getElementById("name").value;
let joinReason = "Reason: " + document.getElementById("reason").value;
let joinOther = "No-code position: " + document.getElementById("other").checked;
const joinForm = document.getElementById("joinForm");
/*if (joinForm) {
    joinForm.addEventListener("submit", function (event) {
        event.preventDefault();
        joinForm.subject = joinSubject;
        joinForm.name = joinName;
        joinForm.reason = joinReason;
        joinForm.other = joinOther;
        joinForm.submit();
    });
}
    



*/