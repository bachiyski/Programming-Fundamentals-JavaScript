function demo(arr){
    let newArr = [];
    for (const number of arr) {
        if(!newArr.includes(number)){
            newArr.push(number);
        }
    }
    console.log(newArr.join(' '));
}
demo([7, 8, 9, 7, 2, 3, 4, 1, 2])