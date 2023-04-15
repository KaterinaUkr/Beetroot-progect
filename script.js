// Скасування функції setTimeout відбувається за допомогою clearTimeout(назва функції)


    //Factorial

function factorial(n) {
    let result = 1;   
    for (let i = 1; i <= n; i++) {
        result *= i;       
    }
    return result;    
}
let n = +prompt('Enter number', '');

if (n > 0 && Number.isInteger(n)) {
    alert(factorial(n));
    alert("Enter a number > 0");

} else {
    alert("It's wrong number");
}
    

