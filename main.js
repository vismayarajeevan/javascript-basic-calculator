// function to display content in display

function displayContent(content){

    result.value +=content
}
 
// clear input for AC 
 
function calcClear(){
    result.value=""
}

// function for equalto

function calOutput(){
    console.log(eval(result.value));  // eval is the in buit function to perform calculation

    result.value = eval(result.value)
    
}

// function for backspace

function removeLastDigit(){
    result.value =result.value.slice(0,-1)
}
