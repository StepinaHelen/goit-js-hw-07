const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output")

inputNameRef.addEventListener("input", event => outputNameRef.textContent = event.target.value === "" ?
    "незнакомка" : event.target.value
//   {
//     if (event.target.value==="") {
//     outputNameRef.textContent = "незнакомец"
//     } else { outputNameRef.textContent = event.target.value };
// } 
)
