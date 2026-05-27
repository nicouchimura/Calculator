const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    adjustFontSize();
}

function clearDisplay(){
    display.value="";
    adjustFontSize();
}

function calculate(){
    try{
        let expressao = display.value.replace(/x/g, '*');
        display.value = eval(expressao);
    } 
    catch(error){
        display.value="Error";
    }
    adjustFontSize();
}

function adjustFontSize(){
    const totalChar = display.value.length;

    if(totalChar>12){
        display.style.fontSize="1.5rem";
    } else if(totalChar>8){
        display.style.fontSize="2.2rem";
    } else {
        display.style.fontSize="3rem";
    }
}