const outputTextElement = document.getElementById('typingText');
const inputTextElement = document.getElementById('inputText');
const inputElement = document.getElementById('input');
 

var typed;
var solved;

//Todo
//Datamodel in JSON
//COunter for inputs 
//Random Hints and Random motivation 

function startGame(){
    runTyping("Immer einmal mehr wie du...");
    inputTextElement.value ='sag was'; 
}


function textinput(){
    let output="";
    if (isHintWords(inputTextElement.value)){
        output = ["Du bringst mich nie zum schweigen!", "Ich bin intelligenter als du!", "Ha Ha Ha..."]
        runTyping(output);
    } else { 
        if (inputTextElement.value === ""){
            output = ["ERRRRRRR...", "Wie... kann das sein?", "Du hast mich besiegt!!!"]
            solved=true;     
            while(inputElement.firstChild){
                inputElement.removeChild(inputElement.firstChild);
            }   
                
        } else if (isSolutionWords(inputTextElement.value))     {
            output = ["Gute Idee aber nicht gut genug.", "Manchmal ist weniger eben mehr.",inputTextElement.value +" "+inputTextElement.value]
        }  
        else if (outputTextElement.innerText === inputTextElement.value){
            output = outputTextElement.innerText +inputTextElement.value    
        } else {
            output = inputTextElement.value +' '+inputTextElement.value    
        }
        runTyping(output);
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
    if (!Array.isArray(value)){
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
    } else {
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
    
const data = {
    en:{
        outStart: "always one more much as you....",
        outStartinput: "say some",
        outHelp: ["Good idea."," But.","Not good enought.", "Sometimes less is more!"],
        outWin: ["ERRRRRRR...", "How...?","Could that really be?", "You beat me!!!"],
        outMotivation: ["You never silence me!", "I am smarter than you!", "Ha Ha Ha..."],        
    },
    de: {
        outStart: "Immer einmal mehr wie du...",
        outStartinput: "Sag was",
        outHelp: ["Gute Idee!","Aber..", "Nicht gut genug!", "Manchmal ist weniger eben mehr."],
        outWin: ["ERRRRRRR...", "Wie...?", "Kann das sein?", "Du hast mich besiegt!!!"],
        outMotivation: ["Du bringst mich nie zum schweigen!", "Ich bin intelligenter als du!", "Ha Ha Ha..."],        
    },
    in: {
        inHinttrigger: [
            "hilfe",
            "help",
            "/h",
            "?",
            "man",
            "ich brauche hilfe",
            "hilf mir",            
            "tipp"
        ],
        inNearSolution: [
            "weniger",
            "less",
            "wenige",
            "keine",
            "nix",
            "null",
            "nichts",
            "still",
            "ruhe"            
        ],
    }

}

}
