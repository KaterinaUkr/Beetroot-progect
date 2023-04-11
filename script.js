    // Minimum

// let a = +prompt('введіть перше число').replace(/,/, '.');
// let b = +prompt('введіть друге число').replace(/,/, '.');
// let sum = a + b;
// alert( sum.toFixed(1) );


// let a = "1";
// let b = +2;
// alert(a + b);


// const file = 820;
// const flashDrive = +prompt('Введіть обсяг флешки в Гб');
// alert(Math.round((flashDrive * 1024) / file));

    // Norma

// const money = +prompt('How much money do you have, hrn?');
// const price = +prompt('How much does chocolate cost?');
// const amount = Math.floor(money / price);
// const change = money % price;
// // const change = money - (price * amount);

// alert(`You сan buy ${amount} chocolate. Your change is ${change} hrn.`);


// let number = prompt('Введіть трьохзначне число');
// let result = 0;

//  while (number) {
//     result *= 10;
//     result += number % 10;
//     number = Math.floor(number / 10);
// }

// alert(result);


    // Maximum

// const number = +prompt('Введіть суму вкладу, грн');
// const depositeRateMonth = (5 / 12) / 100; //Відсотки за місяць
// const depositeRate = depositeRateMonth * 2; //Відсотки за 2 місяця
// const rateSum = number*depositeRate
    
// alert(`Сума відсотків за 2 місяці складає ${rateSum.toFixed(2)} грн`);


// 2 && 0 && 3      // 0 - повертає перше хибне значення
// 2 || 0 || 3      // поверне 2 - це перше істинне значення
// 2 && 0 || 3      // 3, бо '2 && 0' виведе 0, а '0 || 3' виведе