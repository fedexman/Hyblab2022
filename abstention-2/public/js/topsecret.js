async function loadTopSecret() {
  let headerHtml = await loadTemplate('templates/header.ejs', [])
  container.innerHTML = headerHtml;
  date();
  let topSecret = await loadTemplate('templates/topsecret.ejs', {})
    document.getElementById('screen').innerHTML = topSecret;
  document.getElementById('quizLink').addEventListener("click", () => quizScreen());
}

let inputCode = [0,0,0,0];
const codeAnswer = [2,0,4,6];

function autotab(original,destination,index){
  inputCode[index] = original.value;
  if (inputCode.equals(codeAnswer)){
    loadAnswers();
  }
  if (original.getAttribute&&original.value.length==original.getAttribute("maxlength")){
    destination.focus();
  }
}


Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
