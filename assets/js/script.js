console.log("Hola desde un script externo");

function changeColorToRed(){
const refName= document.getElementById("name");
refName.style.color = "red";
}

function changeColorToBlue(){
    const refName= document.getElementById("name");
    refName.style.color = "lightblue";
    }

function changeColorToYellow(){
        const refName= document.getElementById("name");
        refName.style.color = "yellow";
        }

function changeColorParagraph(color, refObj){
console.log(refObj);
refObj.style.color= color;
}

function resetColors(){
    
    const refObjs = document.getElementsByClassName("text-color");
    console.log(refObjs);
    for (let index = 0; index < refObjs.length; index++) {
        const element = refObjs[index];
        console.log(element);
        element.style.color = "purple";
        
    }
}

function changeGreeting(){
    //obtener un nombre del cliente
    const clientName = getNameClient();
    //TODO obtener referencia de label h1
    const greetingReference = getReferenceOfIdGreetings();
    //TODO cambiar el saludo
    greetingReference.innerHTML = "Hola " + clientName;
}

function getNameClient(){
    const clientName = prompt("Escribe tu nombre");
    return clientName;
}

function getReferenceOfIdGreetings(){
    return document.getElementById("greetings");
}