function demo(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            newArr.push(arr[i] * 2)
            
        }
        
    }
    console.log(newArr.reverse().join(' '));
}
demo([3, 0, 10, 4, 7, 3])