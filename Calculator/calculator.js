document.addEventListener("DOMContentLoaded", function() {
    var number1, number2, result, operator, currentNumber, screen;
        number1 = '';  
        number2 = '';
        currentNumber = 1;
    
        screen = document.querySelector('.screen');
    var buttons = document.querySelector(".calculator");

        buttons.addEventListener('click', function(event){

            if(!isNaN(Number(event.target.innerHTML))){
                if(currentNumber === 1){
                    number1 += event.target.innerHTML;
                    screen.innerHTML = number1;
                } else {
                    number2 += event.target.innerHTML;
                    screen.innerHTML = number1 + operator + number2;
                }
            }

            switch(event.target.innerHTML){
                case '÷':
                    setOperator('÷');
                    break;
                case '*':
                    setOperator('*');
                    break;
                case '-':
                    setOperator('-');
                    break;
                case '+':
                    setOperator('+');
                    break;
                case 'C':
                    screen.innerHTML = 0;
                    reset();
                    break;
                case '←':
                    clearLastCharacter();
                    break;
                case '=':
                    calculateNumbers();
                    break; 
            }      

            function setOperator(operatorType){
                operator = operatorType;
                screen.innerHTML = number1 + operator;
                currentNumber = 2;
            }

            function reset(){
                currentNumber = 1;
                number1 = '';
                number2 = '';
                operator = '';  
            }

            function calculateNumbers(){
                if(operator === '÷'){
                    result = Number(number1) / Number(number2);
                    screen.innerHTML = result;
                    reset();
                }
                if(operator === '*'){
                    result = Number(number1) * Number(number2);
                    screen.innerHTML = result;
                    reset();
                }
                if(operator === '-'){
                    result = Number(number1) - Number(number2);
                    screen.innerHTML = result;
                    reset();
                }
                if(operator === '+'){
                    result = Number(number1) + Number(number2);
                    screen.innerHTML = result;
                    reset();
                }
            }

            function clearLastCharacter(){
                if(currentNumber === 1){ 
                    number1 = number1.slice(0, -1); 
                    screen.innerHTML = number1;    
                } 
                if(currentNumber === 2){
                    number2 = number2.slice(0, -1);
                    screen.innerHTML = number1 + operator + number2;    
                }
            }
        });
});