const outputTextElement = document.getElementById('outputText');
const inputTextElement = document.getElementById('inputText');





function textinput(){
    if (isInputSolution(inputTextElement.value)){
        outputTextElement.innerText = '__'
    } else { 
        if (inputTextElement.value === ""){
            outputTextElement.innerText = 'Du kannst micht nicht besiegen!'
        }        
        else if (outputTextElement.innerText === inputTextElement.value){
            outputTextElement.innerText = outputTextElement.innerText +inputTextElement.value    
        } else {
            outputTextElement.innerText = inputTextElement.value +' '+inputTextElement.value    
        }
        inputTextElement.value ='';
        //Todo What todo when empty
    }
}

function isInputSolution(word){        
        var a = solutionWords.indexOf(word);     
        if (a !== -1){
            return true
        } else {
            return false;
        }
    
}

const solutionWords = [
    "weniger",
    "less",
    "wenige",
    "keine",
    "nix",
    "null"
];   