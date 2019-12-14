const outputTextElement = document.getElementById('typingText');
const inputTextElement = document.getElementById('inputText');

var typed;




function textinput(){
    let output="";
    if (isInputSolution(inputTextElement.value)){
        output = ')?!-#~+<$()&?=('
    } else { 
        if (inputTextElement.value === ""){
            output = 'Du kannst micht nicht besiegen!'
        }        
        else if (outputTextElement.innerText === inputTextElement.value){
            output = outputTextElement.innerText +inputTextElement.value    
        } else {
            output = inputTextElement.value +' '+inputTextElement.value    
        }
        inputTextElement.value ='';        
    }
    runTyping(output);
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



function runTyping(value){
    if(typed){
        typed.destroy();
    }    
    typed = new Typed('#typed', {        
        strings: [value],
        typeSpeed: 60,
            // time before typing starts
            startDelay: 1000,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500  
    });
}
