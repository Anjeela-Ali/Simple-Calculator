// Take input from user
// calcute
// output the result on screen


let btn8 = document.querySelector(".calc-btn");
let btn7 = document.querySelector(".calc-btn:nth-child(2)");
let btn6 = document.querySelector(".calc-btn:nth-child(3)");
let btn5 = document.querySelector(".calc-btn:nth-child(4)");
let btn4 = document.querySelector(".calc-btn:nth-child(5)");
let btn3 = document.querySelector(".calc-btn:nth-child(6)");
let btn2 = document.querySelector(".calc-btn:nth-child(7)");
let btn1 = document.querySelector(".calc-btn:nth-child(8)");
let btn0 = document.querySelector(".calc-btn:nth-child(9)");
let btnplus = document.querySelector(".calc-btn.op");
let btnMinus = document.querySelector('.calc-btn.op.minus')
let btnMult = document.querySelector('.calc-btn.op.mult')
let btnDiv = document.querySelector('.calc-btn.op.div')
let btneq = document.querySelector(".calc-btn.eq");
let result = document.querySelector(".res-value");


let operand1, oprend2, operand3, operand4, operand5, operand6, operand7, operand2, operand8, operand0, plusOp, eq, operationMinus, operationMult,operationDiv, result_str = 0;

btn8.addEventListener('click', (e) => {
    operand8 = e.target.value;
    console.log('888', operand8);
    result_str = result_str === 0 ? +operand8 : result_str + operand8;
    result.value = result_str;
    console.log(typeof operand8)
});
btn7.addEventListener('click', (e) => {
    operand7 = e.target.value;
    console.log('result string', typeof result_str, result_str);
    result_str = result_str === 0 ? +operand7 : result_str + operand7;
    console.log('result_str1', result_str);
    result.value = result_str;
    console.log(typeof operand7)
});
btn6.addEventListener('click', (e) => {
    operand6 = e.target.value;
    console.log(operand6)
    console.log('result string', typeof result_str, result_str);
    result_str = result_str === 0 ? +operand6 : result_str + operand6;
    // console.log('result_str1', result_str);
    result.value = result_str;
    console.log(typeof operand6)
});
btn5.addEventListener('click', (e) => {
    operand5 = e.target.value;
    console.log('result string', typeof result_str, result_str);
    result_str = result_str === 0 ? +operand5 : result_str + operand5;
    console.log('result_str1', result_str);
    result.value = result_str;
    console.log(typeof operand5)
});
btn4.addEventListener('click', (e) => {
    operand4 = e.target.value;
    console.log('result string', typeof result_str, result_str);
    result_str = result_str === 0 ? +operand4 : result_str + operand4;
    console.log('result_str1', result_str);
    result.value = result_str;
    console.log(typeof operand4)
});
btn3.addEventListener('click', (e) => {
    operand3 = e.target.value;
    console.log('result string', typeof result_str, result_str);
    result_str = result_str === 0 ? +operand3 : result_str + operand3;
    console.log('result_str1', result_str);
    result.value = result_str;
    console.log(typeof operand3)
});
btn2.addEventListener('click', (e) => {
    operand2 = e.target.value;
    console.log('result string', typeof result_str, result_str);
    result_str = result_str === 0 ? +operand2 : result_str + operand2;
    console.log('result_str1', result_str);
    result.value = result_str;
    console.log(typeof operand2)
});
btn1.addEventListener('click', (e) => {
    operand1 = e.target.value;
    console.log('result string', typeof result_str, result_str);
    result_str = result_str === 0 ? +operand1 : result_str + operand1;
    console.log('result_str1', result_str);
    result.value = result_str;
    console.log(typeof operand1)
});
btn0.addEventListener('click', (e) => {
    operand0 = e.target.value;
    console.log('result string', typeof result_str, result_str);
    result_str = result_str === 0 ? +operand0 : result_str + operand0;
    console.log('result_str1', result_str);
    result.value = result_str;
    console.log(typeof operand0)
});
btnplus.addEventListener('click', (e) => {
    plusOp = e.target.value;
    result_str = result_str === 0 ? plusOp : result_str ;
    console.log('this is the value of plus', plusOp)
    result.value = result_str;
    console.log('this is plus',result_str);

});
btnMinus.addEventListener('click', (e) =>  {
    operationMinus = e.target.value;
    console.log(operationMinus)
    result_str= result_str === 0 ? operationMinus : result_str ;
    result.value = result_str;
});
btnMult.addEventListener('click',(e) => {
    operationMult = e.target.value;
    console.log(operationMult)
    result_str= result_str === 0 ? operationMult : result_str + '*'
    result.value = result_str;
})
btnDiv.addEventListener('click', (e) => {
    operationDiv = e.target.value;
    console.log('the value of div is ..' , operationDiv)
    result_str = result_str === 0 ? operationDiv : result_str + '/'
    result.value = result_str;

})
btneq.addEventListener('click', (e) => {
    eq = e.target;
    console.log('calculate', result_str);
    result.value = calculate(result_str);
    console.log(result.value)
    result.value = eval(result_str)
});

function calculate(_equation) {
    console.log('The Result Is...',eval(result_str))
    return _equation;
} 
