const form = getElementByID("form")
const pass = "THDCC"
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fdata = new FormData(form);
    const data = Object.formEntries(fdata.entries());
    const Cpass = data.get('password');
    if (Cpass === pass){
        window.location.href = "https://docs.google.com/document/d/1WTM5EqmRIuVH4IQnym-NiQpKzLsIGqSfTFdS85oJot8/edit?tab=t.2ywt10g6hr21"
    }
});