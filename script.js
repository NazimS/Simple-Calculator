const display = document.getElementById("display")
function clean() {
    display.value = ''
}
function calc() {
    display.value = eval(display.value)
}
function press(x) {
    display.value += x
}