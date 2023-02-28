function demo(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i]
        let isTopIntiger = true
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j]
            if( curNum <= nextNum){
                isTopIntiger = false
            break
            }
        }
        if (isTopIntiger) {
            newArr.push(curNum)
        }
    }
    console.log(newArr.join(' '));
}
demo([1, 4, 3, 2])
demo([14, 24, 3, 19, 15, 17])
demo([27, 19, 42, 2, 13, 45, 48])