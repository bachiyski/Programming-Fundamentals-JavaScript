function demo(arr){
    let studentCount = Number(arr.pop());
    let firstWorker = Number(arr.shift());
    let secoundWorker = Number(arr.shift());
    let thirdWorker = Number(arr.shift());
    let eff = firstWorker + secoundWorker + thirdWorker
    let totalHours = 0
    while(studentCount > 0){
        totalHours++
        if(totalHours % 4 != 0){
            studentCount-= eff
        }
    }
    console.log(`Time needed: ${totalHours}h.`);

}
//demo(['5','6','4','20'])
//demo(['1','2','3','45'])
demo(['3' ,'2','5', '40'])