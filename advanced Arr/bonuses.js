function demo(input) {
    let numberOfStudents = Number(input.shift());
    let numOfLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let totalBonus = 0;
    let studentAtendance = 0;
for (const line of input) {     
     let newTotalBonus = line / numOfLectures * (5 + additionalBonus);
     if(totalBonus < newTotalBonus){
        totalBonus = newTotalBonus;
    }
 if(studentAtendance < Number(line)){
        studentAtendance = line
    }

}
console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
console.log(`The student has attended ${studentAtendance} lectures.`)
}
demo([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])