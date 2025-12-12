const form = getElementById("form")
const pass = "THDCC"
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fdata = new FormData(form);
    const data = Object.formEntries(fdata.entries());
    const Cpass = data.get('password');
    if (Cpass === pass){
        window.location.href = ""
    }
});