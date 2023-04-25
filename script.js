    //Minimum
    

let shoppingList = [
    {
        name: 'yogurt',
        quantity: 2,
        buy: 'no',
        price: 21.5,
        total: 43,
        // total() {
        //     return `${this.quantity} * ${this.price}`;
        //     console.log(return);
        // },
    },
    {
        name: 'bread',
        quantity: 1,
        buy: 'no',
        price: 30,
        total: 30,
    },
    {
        name: 'paint',
        quantity: 2,
        buy: 'yes',
        price: 72,
        total: 144,
    },
    {
        name: 'avocado',
        quantity: 3,
        buy: 'no',
        price: 68,
        total: 204,
    },
    {
        name: 'cookie',
        quantity: 10,
        buy: 'yes',
        price: 25,
        total: 250,
    },
    {
        name: 'chocolate',
        quantity: 4,
        buy: 'no',
        price: 58,
        total: 232,
    },
];

// shoppingList.forEach(shoppingList => {
//     console.log(`You need buy ${shoppingList.name} - ${shoppingList.quantity}p.`);
// });

console.log(shoppingList);

    //1.1. сортування продуктів, спочатку, що ще не придбані, а потім - ті, що вже придбали
// const shopList = shoppingList.sort((element, index, shopList) => element.buy.localeCompare(index.buy));
// console.log(shopList);


    // 2.2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

// console.log(buyingProduct);
// const buyingProduct = shoppingList.map((element, {chocolate}, buyingProduct) => {
//     // console.log(element)
//     if (element.name == 'chocolate') {
//         return element.buy = "yes"
//     }
// });


  
    //Norma
    //1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

// const deleteProduct = shoppingList.map(())
function deleteProduct(shoppingList) {
    shoppingList.splice(4, 1)
    
}
console.log(shoppingList);



    //2. Додавання покупки в список.



    //Maximum


