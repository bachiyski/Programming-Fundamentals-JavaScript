function demo(input) {
    let daysOfTheChamp = +input.shift().split();
    let pointsNeedToCover = +input.shift();
    let countSwimmers = +input.shift();
    let hotelPricePerEach = +input.shift();
    let participationFee = +input.shift();
    let totalPrice = 0;
    let counter = 0;
    let totalPoints = 0;
    let prevDayPoints = 0;


    for (let line of input) {
        line = +line
        if(counter > 0){
            let additionalPoints = 0.05 * prevDayPoints;
            totalPoints = totalPoints + additionalPoints + line;
        }else{
            totalPoints = +line;
        }
        prevDayPoints = +line;
        counter++
    }
    totalPrice = countSwimmers * participationFee + (daysOfTheChamp * hotelPricePerEach * countSwimmers);
    if(pointsNeedToCover <= totalPoints){
        totalPrice = totalPrice * 0.75
        console.log(`Money left to pay: ${totalPrice.toFixed(2)} BGN.`);
        console.log(`The championship was successful!`);
    }else{
        totalPrice = totalPrice * 0.9;
        console.log(`Money left to pay: ${totalPrice.toFixed(2)} BGN.`);
        console.log(`The championship was not successful.`)
    }
}
demo(["3",
    "400",
    "5",
    "70.6",
    "15.0",
    "100.6",
    "300.59",
    "250.9"])








    while (both < onePair) {
        totalPairs++
        both = both / 10
    }