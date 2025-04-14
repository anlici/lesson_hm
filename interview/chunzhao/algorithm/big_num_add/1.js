const a = '111111111';
const b = '2222222';

function addNumber(a,b) {
    
    let carry = 0;
    let result = '';
    let num1 = a.length-1;
    let num2 = b.length-1;
    
    while(num1 || num2 || carry ) {
        let digit1 = num1 ? a.charAt(--num1) : '0';
        let digit2 = num2 ? b.charAt(--num2) : '0';

        let sum = parseInt(digit1) + parseInt(digit2) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    return result;
}

console.log(addNumber(a,b));