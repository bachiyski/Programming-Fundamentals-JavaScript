function demo(arr, rotation){
for (let i = 0; i < rotation; i++) {
    let curNum = arr.shift()
    arr.push(curNum)
}
console.log(arr.join(' '));
}

demo([51, 47, 32, 61, 21], 2)
demo([32, 21, 61, 1], 4)
demo([2, 4, 15, 31], 5)