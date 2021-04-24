
// // console.log("Hello people!")

// // input
// var username = prompt("Give me your name");

// // processing
// var welcomeMsg = "This script works " + username;

// // output
// alert(welcomeMsg);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

//divOutput.innerText = "is awesome"; // to write a text
//console.log(divOutput);

//console.log(txtInput);

function getTranslationURL(text){
    return serverURL + "?" +"text=" + text;
}

function errorHandler(error){
    console.log("error occurred",error)
    alert("something went wrong with server, try again after sometime");
}

function clickEventHandler() {
    // console.log("clicked");
    // console.log("input",txtInput.value); //to read a value/text
   // divOutput.innerText = "ASNJDSFGSJFJ" + txtInput.value;

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



