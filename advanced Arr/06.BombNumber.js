function demo(arr,arrTwo){
   let num = arrTwo.shift();
   let power =  arrTwo.shift();
   let index = arr.indexOf(num)
   while(index !== -1) {
    let startExplIndex = Math.max(0,index - power)
      let explLength = power * 2 + 1
      arr.splice(startExplIndex,explLength)
      index = arr.indexOf(num)
   }
   let total = 0
   for (const number of arr) {
      total += number

   }
   console.log(total);
   
}
demo([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])
demo([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])