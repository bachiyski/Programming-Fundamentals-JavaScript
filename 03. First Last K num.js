function demo(arr){
    let k = arr.shift()
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr.slice(0,k).join(' '));
    console.log(newArr.slice(-k).join(' '))
}
demo([2, 7, 8, 9])
demo([3,
    6, 7, 8, 9])