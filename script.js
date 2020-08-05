const generateBtn = document.getElementById('generateNumber');
generateBtn.addEventListener('click', function(){
const inputNumber = document.getElementById('generate-input').value;
generatePin();
})

function generatePin(){
    const inputNumber = document.getElementById('generate-input').value;
    for(var i=0; i<1000 ; i++){
        var randomNum = Math.random()* 99999;
        var output = Math.round(randomNum);
        return inputNumber;
    }
} 

/*...calculator.....*/
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n =Number(num);
    var value = n.toLocaleString("en")
    return value;
}
// function reverseNumberFormat(num){
//     return(num.replace(/,/g,''));
// }
var operator = document.getElementsByClassName("button");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
      if(this.id == "clear"){
          printHistory("");
          printOutput(""); 
      } 
      else if(this.id == "backspace"){
          var output = reverseNumberFormat(getOutput()).toString();
          if(output){//if output is a number
              output = output.substr(0,output.length-1);
              printOutput(output);
          }
      }