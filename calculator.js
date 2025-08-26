function calculate(operator) {
    const firstno =parseFloat( document.getElementById('firstno').value);
    const secondno = parseFloat(document.getElementById('secondno').value);

    let result = "";

    if (isNaN (firstno) || isNaN (secondno))
        {
        result = " enter a valid no ";
    }

     if (operator === "+")
        {
        result = firstno + secondno ;
    }
    
     if (operator === "-")
        {
        result = firstno - secondno ;
    }

     if (operator === "*")
        {
        result = firstno * secondno ;
    }

     if (operator === "/")
        {
        result = firstno / secondno ;
    }

  
document.getElementById("answer").innerHTML= `YOUR ANSWER IS : ${firstno} ${operator} ${secondno} = ${result}`



}

function clearinputs(){
    document.getElementById("firstno").value = "";
    document.getElementById("secondno").value = "";


}