// Assignment code here

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSembol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

let userUpper = ""
let userLower = ""
let userNumber = ""
let userSymbol = ""


const cliboardEl = document.querySelector("#generate")
console.log(cliboardEl)
cliboardEl.addEventListener('click', () => {
    const textarrea = document.createElement('textarea');
    const password = textarrea.innerText;
    let passwordArr = []
    const length = prompt("how long do you want yopur password")

    if (length < 8) {
        prompt("password to short")
        return
    }
    userUpper = confirm("DO you want Upper")
    userLower = confirm("DO you want Lower")
    userNumber = confirm("DO you want Number")
    userSymbol = confirm("DO you want Symbol")
    for (let i = 0; i < length; i++) {
        passwordArr = passwordArr.concat(generatepassword())
    }

    console.log(passwordArr.join(''))

    var finalPassword = document.querySelector("#password")
    finalPassword.textContent = passwordArr.join('');
});

function generatepassword() {
    console.log(userLower)
    if (userUpper) {
        var upper = getRandomUpper();
    }
    if (userLower) {
        var lower = getRandomLower();
    }
    if (userNumber) {
        var number = getRandomNumber();
    }
    if (userSymbol) {
        var symbol = getRandomSembol();
    }
    var arr = [upper, lower, number, symbol]
    return arr[Math.floor(Math.random() * arr.length)]
}