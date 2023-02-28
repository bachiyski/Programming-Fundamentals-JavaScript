function demo(arrOne, arrTwo){
let obj = {};
for (let i = 0; i < arrOne.length; i += 2) {
    let currProduct = arrOne[i];
    obj[currProduct] = Number(arrOne[i + 1]);
}
for (let i = 0; i < arrTwo.length; i+= 2) {
let currProduct = arrTwo[i];
if(!obj.hasOwnProperty(currProduct)){
obj[currProduct] = 0;
}   
obj[currProduct]+= Number(arrTwo[i+1])
}
for (const product in obj) {
    console.log(`${product} -> ${obj[product]}`);
}
    
}
demo(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])