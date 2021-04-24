
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/sindarin.json"

function getTranslationURL(text){
    return serverURL + "?" +"text=" + text;
}

function errorHandler(error){
    console.log("error occurred",error)
    alert("something went wrong with server, try again after sometime");
}

function clickEventHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        divOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickEventHandler);



