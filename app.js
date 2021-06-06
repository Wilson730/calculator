let numbers = document.querySelectorAll('.num');
let screen = document.querySelector('.screen');
let clear = document.querySelector('.clear');
let operators = document.querySelectorAll('.operator');
let solve = document.querySelector('.solve');

let num1 = null;
let num2 = null;
let operated = false;
let operand = null;
numbers.forEach(number => number.addEventListener('click', function(){
    screen.textContent += number.textContent;
    if (num1 != null && operated) {
        screen.textContent = ''+ number.textContent;
        operated = false;
    }
})
);

operators.forEach(operator => operator.addEventListener('click', function(){
    num1 = screen.textContent;
    operated = true;
    operand = operator.textContent;
    console.log(operand);
    console.log(num1);
}));

clear.addEventListener('click', function(){
    screen.textContent = '';
});

solve.addEventListener('click', function(){
    if (num1 && operand){
        num2 = screen.textContent;
        switch (operand){
            case '+':
                screen.textContent = parseInt(num1)+parseInt(num2);
                break;
            case '-':
                screen.textContent = parseInt(num1) - parseInt(num2);
                break;
            case '*': 
                screen.textContent = parseInt(num1)*parseInt(num2);
                break;
            case '/': 
                screen.textContent = parseInt(num1)/parseInt(num2);
        }
    }
})
