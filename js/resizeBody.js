function resizeBody() {
    let bodyWidth = window.innerWidth;
    let bodyHeight = window.innerHeight;
    document.getElementByTagName("body").style.width=bodyWidth + "px";
    document.getElementByTagName("body").style.height=bodyHeight + "px";};