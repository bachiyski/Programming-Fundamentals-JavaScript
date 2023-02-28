function demo(arr){
    let resultEven = 0
    let resultOdd = 0
    let num = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        num.push(arr[i])
    }
    for (let num of arr) {
        if(num % 2 === 0 ){
            resultEven+= num
        }
        else{
            resultOdd+= num
        }
    } 
    console.log(resultEven - resultOdd);   
}
demo([3,5,7,9])
demo([1,2,3,4,5,6])