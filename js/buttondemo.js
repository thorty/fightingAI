const outputTextElement = document.getElementById('outputText');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}

function startGame(){
 state={};
 showTextNode(1);
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNodes => textNodes.id === textNodeIndex )
    outputTextElement.innerText = textNode.text

    //remove all buttons
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    //show all available options eq to dataModel
    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('button')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button);
        }
    })
    
}

function showOption(option){
    return option.requiredState == null ||option.requiredState(state) 
}

function selectOption(option){
    const nextTextNode = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNode)
}

const textNodes = 
[
    {
    id: 1,
    text: 'Immer einer mehr wie du.',
        options: [
        {
            text: 'Mehr',
            setState: {more: true},
            nextText: 2
        },
        {
            text: 'Weniger',
            setState: {more: false},
            nextText: 3
        }
        ]
    },
    {
      id: 2,
      text: 'Mehr Mehr',
      options: [
        {
            text: 'Noch mehr',
            requiredState: (currentState) => currentState.more,
            setState: {more: true},
            nextText: 4
        },
        {
            text: 'Weniger',
            setState: {more: false},
            nextText: 3
        }
        ]            
    },
    {
        id: 3,
        text: '_',
      },
      {
        id: 4,
        text: 'Noch viel mehr',
        options: [
            {
                text: 'Weniger',
                setState: {more: false},
                nextText: 3
            }
            ]                    
      }
]

startGame()