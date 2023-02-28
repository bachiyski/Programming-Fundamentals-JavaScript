function demo(group, typeOfGroup, dayOfWeek){
let studentsFridayPrice = 8.45
let studentsSaturdayPrice = 9.8
let studentsSundayPrice = 10.46
let businessFridayPrice = 10.9
let businessSaturdayPrice = 15.6
let businessSundayPrice = 16
let regularFridayPrice = 15
let regularSaturdayPrice = 20
let regularSundayPrice = 22.5
if(group > 100 && typeOfGroup === "Business"){
    group-= 10
}
let studentsDiscount = 15
let regularDiscount = 5
let totalPrice = 0
if(dayOfWeek === "Friday" && typeOfGroup === "Students"){
    totalPrice += group * studentsFridayPrice
}else if(dayOfWeek === "Saturday" && typeOfGroup === "Students"){
    totalPrice += group * studentsSaturdayPrice
}else if(dayOfWeek === "Sunday" && typeOfGroup === "Students"){
    totalPrice += group * studentsSundayPrice
}else if(dayOfWeek === "Friday" && typeOfGroup === "Business"){
    totalPrice += group * businessFridayPrice
}else if(dayOfWeek === "Saturday" && typeOfGroup === "Business"){
    totalPrice += group * businessSaturdayPrice
}else if(dayOfWeek === "Sunday" && typeOfGroup === "Business"){
    totalPrice += group * businessSundayPrice
}else if(dayOfWeek === "Friday" && typeOfGroup === "Regular"){
    totalPrice += group * regularFridayPrice
}else if(dayOfWeek === "Saturday" && typeOfGroup === "Regular"){
    totalPrice += group * regularSaturdayPrice
}else if(dayOfWeek === "Sunday" && typeOfGroup === "Regular"){
    totalPrice += group * regularSundayPrice
}
if(typeOfGroup === "Students" && group >= 30){
    totalPrice -= (studentsDiscount / 100) * totalPrice
}else if(typeOfGroup === "Regular" && group >= 10 && group <= 20){
    totalPrice -= (regularDiscount / 100) * totalPrice
}
console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
demo(30,
    "Students",
    "Sunday")