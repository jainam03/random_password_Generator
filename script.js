const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?","/"];

let buttonEl = document.getElementById("button")
let fieldEl = document.getElementById("field")

function generate() {
    for (let i = 0; i < characters.length; i++) {
        let randomPass1 = (Math.floor(Math.random() * 91))

        let randomPass2 = (Math.floor(Math.random() * 91))

        fieldEl.textContent = "Your passwords are: " + characters[randomPass1] + " and " + characters[randomPass2]

        generate()
    }
}