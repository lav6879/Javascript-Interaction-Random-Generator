var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

var mil = ["Avocado Aficionados","TikTok Tyrants","Uber Overlords","Amazon Addicts"];
var z = ["Fortnite Fiends","Twitchy Thumbs","Snap Queens/Kings","Emoji Emperors"];
var boom = ["boomer","Wrinkle Crew","Senior Swaggers","Seasoned Saints"];

var randomIndex = Math.floor(Math.random() * mil.length);

var selectedRandomNicknameB = boom[randomIndex];
var selectedRandomNicknameM = mil[randomIndex];
var selectedRandomNicknameZ = z[randomIndex];

executeButton.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(currentInputText){

  if (1946 < currentInputText && currentInputText < 1964){
    outputParagraph.innerText = "Given your input " + currentInputText + " I know you are part of the " + selectedRandomNicknameB;
  }
  else if (1981 < currentInputText && currentInputText < 1996){
    outputParagraph.innerText = "Given your input " + currentInputText + " I know you are part of the " + selectedRandomNicknameM;
  }
  else if (1996 < currentInputText && currentInputText < 2012){
    outputParagraph.innerText = "Given your input " + currentInputText + " I know you are part of the " + selectedRandomNicknameZ;
  }
  else {
    alert("Unable to judge you, you got lucky!");
  }
}

function restyle() {
  var outputText = document.getElementById("outputText");

  var randPadding = Math.random() * 10 + 2 + 'vmin'; 
  var randFontSize = Math.random() * 2 + 1 + 'rem';
  var randColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'

  outputText.style.padding = randPadding;
  outputText.style.fontSize = randFontSize;
  outputText.style.color = randColor;
}