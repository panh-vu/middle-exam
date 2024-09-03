function menuToggle() {
    var list = document.getElementById("list");
    var listElements = list.childElementCount;
    var height = 1.5 * listElements;
    var x = document.getElementById("burgerMenu");
    if (x.style.height === "0rem") {
        x.style.height = height + "rem";
    } else {
        x.style.height = "0rem";
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Your custom logic here
        console.log('Button clicked!');
    });
});