const containerElement = document.getElementById('container');

function startGame(lang) {    
    //clear
    while(containerElement.firstChild){
        containerElement.removeChild(containerElement.firstChild);
    }   
    //add sitecontent for level1
    var outputDiv = document.createElement("div"); 
    outputDiv.setAttribute("class","outputContainer");
    outputDiv.setAttribute("id","output");    
    var h2 = document.createElement("h2") ;
    h2.setAttribute("id","outputText");
    var span = document.createElement("span") ;
    span.setAttribute("id","typed");
    h2.appendChild(span);
    outputDiv.appendChild(h2);
    
  // füge das neu erstellte Element und seinen Inhalt ins DOM ein  
    containerElement.appendChild(outputDiv);

/*
    <div id="input" class="inputContainer">
        <input type="text" name="inputText" class="inputText" value="" id="inputText"/>
        <button id="inputBtn" class="button" type="button" OnClick="textinput();">send</button>            
    </div>
</div>
*/

}