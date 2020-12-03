var input = document.querySelector("#txt-area");
var btn= document.querySelector("#btn-translate ");
var output = document.querySelector(" #output-txt");



function clickHandler(){
     
     var a = input.value;
     
     fetch("https://api.funtranslations.com/translate/minion.json?text="+a)
     .then(resolve => resolve.json())
     .then(json=>{ 
        var outputTranslation=json.contents.translated;
        output.innerText=outputTranslation})
     .catch(error => console.log(error))
}


btn.addEventListener("click", clickHandler);
