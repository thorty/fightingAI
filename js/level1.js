const outputTextElement = document.getElementById('typingText');
const inputTextElement = document.getElementById('inputText');

var typed;




function textinput(){
    let output="";
    if (isHintWords(inputTextElement.value)){
        output = ["Du bringst mich nie zum schweigen!", "Ich bin intelligenter als du!", "Ha Ha Ha..."]
        runTypingArr(output);
    } else { 
        if (inputTextElement.value === ""){
            output = ')?!-#~*TILT*+$()?=('            
        }        
        else if (outputTextElement.innerText === inputTextElement.value){
            output = outputTextElement.innerText +inputTextElement.value    
        } else {
            output = inputTextElement.value +' '+inputTextElement.value    
        }
        inputTextElement.value ='';        
        runTyping(output);
    }
    
}

function isHintWords(word){        
        var a = hintWords.indexOf(word);     
        if (a !== -1){
            return true
        } else {
            return false;
        }
    
}


const hintWords = [
    "hilfe",
    "help",
    "/h",
    "?",
    "tipp",
];   

const solutionWords = [
    "weniger",
    "less",
    "wenige",
    "keine",
    "nix",
    "null",
    "nichts"
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

function runTypingArr(value){
    if(typed){
        typed.destroy();
    }    
    typed = new Typed('#typed', {        
        strings: value,
        typeSpeed: 60,
            // time before typing starts
            startDelay: 1000,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500  
    });
}
