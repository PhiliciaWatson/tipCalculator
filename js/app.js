    
function tips(){
    console.log('its Working')
    var billing = document.getElementById("billing").value;
    var percentage = document.getElementById("percentage").value;
    var people = document.getElementById("people").value;
    
var solution1 = percentage /100;
var solution2 = billing * solution1;
var finalsolution = solution2 / people;

var total = Math.round(100*finalsolution)/100;

var text = 'Your total is <br><b><div class="shake-little shake-constant shake-constant--hover">$' +total+ '</b></div>';

document.getElementById('answer').innerHTML = text;
console.log(finalsolution);

}




