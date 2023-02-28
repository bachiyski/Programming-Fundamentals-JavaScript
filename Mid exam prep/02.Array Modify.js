function demo(arr){
   let newArr = arr.shift().split(" ").map(Number)
   while(arr[0] != 'end'){
    let token = arr.shift().split(' ') 
    let command = token[0];   
     let index1 = Number(token[1]);
    let index2 = Number(token[2]);
    switch (command) {
        case 'swap':
            let temp = newArr[index1]
            newArr[index1] = newArr[index2]
            newArr[index2] = temp
        break
        case 'multiply':
            newArr[index1] *= newArr[index2]
        break
        case 'decrease':
        for (let i = 0; i < newArr.length; i++) {
            newArr[i]--
            
        }break
            }
            

    }
   
   console.log(newArr.join(', '));
  
}
demo(['23 -2 321 87 42 90 -123','swap 1 3','swap 3 6','swap 1 0','multiply 1 2'
,'multiply 2 1','decrease','end'])