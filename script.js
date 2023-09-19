const input1 = document.getElementById('fahrenheit')
const Cbtn = document.getElementById('convert-C-btn')
const Fbtn = document.getElementById('convert-F-btn')
let output = document.getElementById('result')
let clearbtn = document.getElementById('clear')

function converttocelcius(){
    let F = parseFloat(input1.value.trim());
    if(!isNaN(F)){
    let C = (F - 32) * 5/9;
    console.log(C)
    output.textContent = C;
    }
    else{
        alert('enter a valid figure')
    }
}
function converttofahrenheit(){
    let C = parseFloat(input1.value.trim());
    if(!isNaN(C)){
     let F = (C * 9/5) + 32;
    console.log(F)
    output.textContent = F;
}
    else{
        alert('enter a valid figure')
    }
}

Cbtn.addEventListener('click', converttocelcius)
Fbtn.addEventListener('click', converttofahrenheit)
clearbtn.addEventListener('click', () => {
    output.textContent = '';
    input1.value = '';
})
