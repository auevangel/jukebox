function resizeBody() {
let bodyWidth = window.innerWidth;
let bodyHeight = window.innerHeight;
document.getElementByTagName("body").setAttribute("width", bodyWidth);
document.getElementByTagName("body").setAttribute("height", bodyHeight);}