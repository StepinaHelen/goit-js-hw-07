const validInputRef = document.querySelector("#validation-input");
// elem.getAttribute(name) - получает значение атрибута и возвращает его
const dataLength = Number(validInputRef.getAttribute("data-length"));


validInputRef.addEventListener("input", event =>
    // console.log(event.target.value.length)
{
     if (event.target.value.length === dataLength) {
        //  console.log("hello")
         validInputRef.classList.add("valid")
         validInputRef.classList.remove("invalid")
    }
     else {
         validInputRef.classList.add("invalid")
     validInputRef.classList.remove("valid")}
   }

)