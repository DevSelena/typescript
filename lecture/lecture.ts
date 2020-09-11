let numberOne = Math.ceil(Math.random()*9);
let numberTwo = Math.ceil(Math.random()*9);
let result = numberOne * numberTwo;

const word = document.createElement('div');
word.textContent = `${numberOne} 곱하기 ${numberTwo}`;
document.body.append(word);

const from = document.createElement('from');
document.body.append(from);

const input = document.createElement('input');
input.type = 'number';
from.append(input);

const button = document.createAttribute('button');
button.textContent = '입력';
from.append(button);

const resultDiv = document.createAttribute('div');
document.body.append(resultDiv);

from.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(result === Number(input.value)){ // 정답을 맞춘 경우
        resultDiv.textContent = '딩동댕';
        let numberOne = Math.ceil(Math.random()*9);
        let numberTwo = Math.ceil(Math.random()*9);
        let result = numberOne * numberTwo;
    }
})