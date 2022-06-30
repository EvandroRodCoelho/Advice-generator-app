
let elementToSearchPhrase = document.querySelector(".div-image-dice");
let url = "https://api.adviceslip.com/advice";
let paragraph = document.querySelector(".paragraph");
let spanIdPhase = document.querySelector(".id");


const searchPhase = () => {
    fetch(url).then(response => response.json())
        .then((jsonBody => changeText(jsonBody.slip.id, jsonBody.slip.advice)))
}


const changeText = (id, text) => {
    paragraph.textContent = text;
    spanIdPhase.textContent = id;
};

elementToSearchPhrase.addEventListener("click", searchPhase);
window.addEventListener("load", searchPhase);
