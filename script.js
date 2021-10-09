window.onload = () => {
    const fields = {
        field: document.getElementById("res"),
        text: document.getElementById("text-password"),
        error: document.getElementById("err")
    }
    fields.field.style.display = "none";
    fields.text.style.display = "none";
    fields.error.style.display = "none";

    const generatePasswords = (length) => {
        let caracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz0123456789!@#$%^&*";
        let password = '';
        for (let i = 0; i < length; i++) {
            password += caracters.charAt(Math.round(Math.random() * caracters.length));
        }
        return password;
    }
    const dataValidate = () => {
        let charNumber = parseInt(document.querySelector('input').value);
        return (charNumber >= 8 && charNumber <= 64) ? charNumber : 0;
    }

    const activeErr = () => {
        return (fields.error.style.display === 'block');
    }

    const activeFieldPassword = () => {
        return (fields.text.style.display === 'block');

    }
    action = () => {
        fields.field.style.display = 'block';
        let a = dataValidate();
        if (a) {
            if (activeErr()) {
                console.log(activeErr())
                fields.error.style.display = 'none';
            }
            const fild = document.querySelector('h6');
            fild.innerText = generatePasswords(a);
            fields.text.style.display = 'block';
        } else {
            if (activeFieldPassword()) {
                console.log(activeFieldPassword());
                fields.text.style.display = 'none'
            }
            fields.error.style.display = "block";
        }
    }
}