function demo(arr){
arr = arr.sort((a,b) => b - a);
let newArr = [];
while (arr.length > 0) {
    let biggestNum = arr.shift();
    newArr.push(biggestNum);
    let smallestNum = arr.pop();
    newArr.push(smallestNum)
}
console.log(newArr.join(' '));
}
demo([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])