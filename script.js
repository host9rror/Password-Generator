function generatePassword() {
    const minLength = 8;
    const maxLength = 30;

    const lengthInput = document.getElementById("length");
    const length = lengthInput.valueAsNumber || minLength;

    if (length < minLength || length > maxLength) {
        alert("The number of characters should be 8 to 30");
        return;
    }

    const includeSpecial = document.getElementById("special-c").checked;

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + (includeSpecial ? "!@#$%^&*" : "");

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById("password").value = password;
}
