function demo(arr, arr2){
let countTakenElem = arr2.shift();
let countDeleteElem = arr2.shift();
let searchNumber = arr2.shift();
let takenElem = arr.splice(0,countTakenElem);
let deleteElem = takenElem.splice(0,countDeleteElem)
let count = 0
for (const num of takenElem) {
    if(num === searchNumber){
        count += 1
    }
}
console.log(`Number ${searchNumber} occurs ${count} times.`);
}
demo([5, 2, 3, 4, 1, 6],[5, 2, 3])