const outputTextElement = document.getElementById('typingText');
const inputTextElement = document.getElementById('inputText');
const inputElement = document.getElementById('input');
 

var typed;
var solved;



function textinput(){
    let output="";
    if (isHintWords(inputTextElement.value)){
        output = ["Du bringst mich nie zum schweigen!", "Ich bin intelligenter als du!", "Ha Ha Ha..."]
        runTypingArr(output);
    } else { 
        if (inputTextElement.value === ""){
            output = ["ERRRRRRR...", "Wie... kann das sein?", "Du hast mich besiegt!!!"]
            solved=true;     
            while(inputElement.firstChild){
                inputElement.removeChild(inputElement.firstChild);
            }
            runTypingArr(output);    
                
        } else if (isSolutionWords(inputTextElement.value))     {
            output = ["Gute Idee aber nicht gut genug.", "Manchmal ist weniger eben mehr.",inputTextElement.value +" "+inputTextElement.value]
            runTypingArr(output);
        }  
        else if (outputTextElement.innerText === inputTextElement.value){
            output = outputTextElement.innerText +inputTextElement.value    
            runTyping(output);
        } else {
            output = inputTextElement.value +' '+inputTextElement.value    
            runTyping(output);
        }
        inputTextElement.value ='sag was';                
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

function isSolutionWords(word){        
    var a = solutionWords.indexOf(word);     
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
