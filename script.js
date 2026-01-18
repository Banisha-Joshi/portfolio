const textElement = document.querySelector(".typing-text");
const texts = ["Web Developer", "Coder"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    textElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause at end of word
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();