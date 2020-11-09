const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeRef.addEventListener("input", event =>
    textRef.style.fontSize = `${event.currentTarget.value}px`
)