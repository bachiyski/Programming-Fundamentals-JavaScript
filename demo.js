function demo(arrOne, arrTwo){
   let arrThree = []
    for (let i = 0; i < arrOne.length; i++) {
        if (i % 2 === 0) {
           arrThree.push(Number(arrOne[i]) + Number(arrTwo[i]))
        }
        else{
           arrThree.push(`${arrOne[i]}${arrTwo[i]}`)
        
        }
    }
    console.log(arrThree.join('- '));
}
demo(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
demo(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])