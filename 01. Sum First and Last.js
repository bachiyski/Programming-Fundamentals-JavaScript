function demo(arr){
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop())
    console.log(firstNum + lastNum);

}
demo(['20', '30', '40'])