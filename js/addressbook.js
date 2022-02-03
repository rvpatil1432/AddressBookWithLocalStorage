let isUpdate = false;
let addressbookObject = {};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("server loaded");
    validateFields();
});
function validateFields() {

    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');

    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            checkName(name.value);
            textError.textContent = "";
        } catch (e) {
            console.error(e);
            textError.textContent = e;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');

    phone.addEventListener('input', function () {
        try {
            checkPhoneNumber(phone.value);
            phoneError.textContent = "";
        } catch (e) {
            console.error(e);
            phoneError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');

    address.addEventListener('input', function () {
        try {
            checkAddress(address.value);
            addressError.textContent = "";
        } catch (e) {
            console.error(e);
            addressError.textContent = e;
        }
    })
        ;
}
