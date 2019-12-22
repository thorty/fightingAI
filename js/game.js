const containerElement = document.getElementById('container');
var inputText;

var typed;
var dataLang;
var speechlang;
var counter = 0;

function startGame(lang) {
    if (lang === "en") {
        speechlang = "en-US";
        dataLang = data.en;
    } else {
        speechlang = "de-DE";
        dataLang = data.de;
    }
    createLevel1();
    configureLevel1();


}


function createLevel1() {
    /* Preview:
    <div id="input" class="inputContainer">
        <input type="text" name="inputText" class="inputText" value="" id="inputText"/>
        <button id="inputBtn" class="button" type="button" OnClick="textinput();">send</button>            
    </div>
    </div>
    */
    setStyleForLevel1();
    //clear
    while (containerElement.firstChild) {
        containerElement.removeChild(containerElement.firstChild);
    }
    //output Div
    var outputDiv = document.createElement("div");
    outputDiv.setAttribute("class", "outputContainer");
    outputDiv.setAttribute("id", "output");
    var h2 = document.createElement("h2");
    h2.setAttribute("id", "outputText");
    var span = document.createElement("span");
    span.setAttribute("id", "typed");
    var outputElement = span;
    h2.appendChild(span);
    outputDiv.appendChild(h2);
    //inputDiv
    var inputDiv = document.createElement("div");
    inputDiv.setAttribute("class", "inputContainer");
    inputDiv.setAttribute("id", "input");
    inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("name", "inputText");
    inputText.setAttribute("class", "inputText");
    inputText.setAttribute("value", "");
    inputText.setAttribute("id", "inputText");
    var inpButton = document.createElement("button");
    inpButton.setAttribute("type", "button");
    inpButton.setAttribute("onClick", "level1Textinput();");
    inpButton.setAttribute("class", "button");
    inpButton.setAttribute("id", "inputBtn");
    inpButton.innerText = "send";
    inputDiv.appendChild(inputText);
    inputDiv.appendChild(inpButton);
    //füge das neu erstellte Element und seinen Inhalt ins DOM ein  
    containerElement.appendChild(outputDiv);
    containerElement.appendChild(inputDiv);
}

function configureLevel1() {
    runTyping(dataLang.outStart);
    inputText.value = dataLang.outStartinput;
    inputText.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("inputBtn").click();
        }
    });
}

function setStyleForLevel1() {
    var style = document.createElement('style');
    style.innerHTML = `
    
    .inputContainer{
        margin-top: 3em;
       }
       
       button {
           color: #353a43;
           background-color: rgb(190, 184, 186);
           padding: 0.3em 0.8em;
           border: 0;
           border-radius: 3px;
           font-size: 1em;
           cursor: pointer;
           box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
           border-bottom: solid 1px #353a43;
           transition: all ease .3s;
           margin: 0.2em 
         }
       
         
       input {
           box-sizing: border-box;
           font-size: 18px;
           border-radius: 3px;
          
       }
      

    `;
    document.head.appendChild(style);


}

function runTyping(value) {
    if (typed) {
        typed.destroy();
    }
    if (!Array.isArray(value)) {
        typed = new Typed('#typed', {
            strings: [value],
            typeSpeed: 60,
            // time before typing starts
            startDelay: 1000,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            onComplete: function(self) { speech(value) },
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
            backDelay: 500,
            onComplete: function(self) { speech(value) },
        });
    }
    
    
}
const data = {
    en: {
        outStart: "always one more much as you....",
        outStartinput: "say some",
        outHelp: ["Good idea.", " But.", "Not good enought.", "Sometimes less is more!"],
        outWin: ["ERRRRRRR...", "How...?", "Could that really be?", "You beat me!!!"],
        outMotivation: [

            ["You never silence me!", "I am smarter than you!", "Ha Ha Ha..."],
            ["Thinking is the key.", "try hard human."],
            ["Come on!", "No Idea?"],
            ["What could be answer to the puzzle?"],
            ["Now... Show me what you can!", "Ha ha ha"],

        ]
    },
    de: {
        outStart: "Immer einmal mehr wie du...",
        outStartinput: "Sag was",
        outHelp: ["Gute Idee!", "Aber..", "Nicht gut genug!", "Manchmal ist weniger eben mehr."],
        outWin: ["ERRRRRRR...", "Wie...?", "Kann das sein?", "Du hast mich besiegt!!!"],
        outMotivation: [
            ["Du bringst mich nie zum schweigen!", "Ich bin intelligenter als du!", "Ha Ha Ha..."],
            ["Schon mal nachgedacht?", "Jetzt gib dir doch mal mühe Mensch."],
            ["Komms schon!", "Keine Idee mehr?"],
            ["Was ist wohl des Rätsels lösung?"],
            ["Ist das alles was du kannst?", "Ha ha ha"],
        ]
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
            "ruhe",
            "nothing",
            "no",
            "more",
            "bye",
            "tschüss"
        ],
    }

}

function speech(value) {
    if ('speechSynthesis' in window) {
        var speech = new SpeechSynthesisUtterance(value);
        speech.lang = speechlang;
        speech.pitch = 0.4;
        speech.rate = 0.7;
        window.speechSynthesis.speak(speech);
        
    }
}

function getRandomArray(items) {
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function level1Textinput() {
    counter++;
    let outputTextElement = document.getElementById('outputText');
    let inputTextElement = document.getElementById('inputText');
    let inputElement = document.getElementById('input');
    let output = "";
    if (level1IsHintWords(inputTextElement.value)) {
        runTyping(getRandomArray(dataLang.outMotivation));
    } else if (inputTextElement.value === "") {
        output = dataLang.outWin;
        solved = true;
        while (inputElement.firstChild) {
            inputElement.removeChild(inputElement.firstChild);
        }

    } else if (level1IsSolutionWords(inputTextElement.value)) {
        output = dataLang.outHelp;
        output.push(inputTextElement.value + " " + inputTextElement.value);
    } else if (counter % 5 === 0) {
        output = getRandomArray(dataLang.outMotivation);
        output.push(inputTextElement.value + ' ' + inputTextElement.value)
    } else if (counter % 11 === 0) {
        output = dataLang.outHelp;
    } else {
        output = inputTextElement.value + ' ' + inputTextElement.value
    }
    runTyping(output);
    inputTextElement.value = dataLang.outStartinput;    
}



function level1IsHintWords(word) {
    var a = data.in.inHinttrigger.indexOf(word);
    if (a !== -1) {
        return true
    } else {
        return false;
    }

}

function level1IsSolutionWords(word) {
    var a = data.in.inNearSolution.indexOf(word);
    if (a !== -1) {
        return true
    } else {
        return false;
    }

}

