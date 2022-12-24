var txtInput = document.querySelector('.btn-primary');
var btnTranslate = document.querySelector('#btn-translate');
var outputDiv = document.querySelector('.output');

// var serverURL = "https://lessonfourapitanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL+ "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
}


function  clickHandler(){   
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler);






// var classTextArea = document.querySelector(".btn-primary");
// var idTextArea = document.querySelector("#input-btn");
// var elementTextArea = document.querySelector("textarea");
// var attributTextArea = document.querySelector(['[name="translator"]']) //for attribute