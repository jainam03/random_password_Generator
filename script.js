let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={,[,},],,,|,:,;,<,>,.?/";

let buttonEl = document.getElementById("button")
let fieldEl = document.getElementById("field")
let fieldEl2 = document.getElementById("field2")

/*function generate() {
    for (let i = 0; i < characters.length; i++) {
        let randomPass1 = (Math.floor(Math.random() * 91))

        let randomPass2 = (Math.floor(Math.random() * 91))

        fieldEl.textContent = "Your passwords are: " + characters[randomPass1] + " and " + characters[randomPass2]

        generate()
    }
}

*/

function generate(length) {
    let result = ' '
    let result2 = ' '
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    //return result

    fieldEl.textContent = "Your passwords are: " + result + " and " + result2

    generate(15)
}