const textElement = document.getElementById('text2');

function startTyping(){
    runTypuing("")
}

function runTypuing(type){
    textElement.innerText =type;

var typed = new Typed('#typed', {
    stringsElement: '#text1',
    typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500  
});
}