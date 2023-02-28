function demo(arr){
    let result = {};
    for (const dayOfTheWeek of arr) {
        let[day, name] = dayOfTheWeek.split(' ')
        if(result.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            result[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }
    for (const day in result) {
        console.log(`${day} -> ${result[day]}`)
    }
}
demo(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])