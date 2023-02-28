function demo(input) {
    let whiteGold = input.shift().split(' ').map(Number);
    let yellowGold = input.shift().split(' ').map(Number);
    let totalPairs = 0;
    let onePair = 10;
    let storageWhite = 0;
    let storageYellow = 0;
    for (let i = 0; i < whiteGold.length; i++) {
        if (whiteGold[i] + yellowGold[i] === onePair) {
            totalPairs++
        } else if (whiteGold[i] + yellowGold[i] > onePair) {
            while (yellowGold[i] + whiteGold[i] >= onePair) {
                let yellowGoldCounter = yellowGold[i] -= 2;

                if (yellowGoldCounter + whiteGold[i] === onePair) {
                    totalPairs++

                }
            }
        } else {
            storageYellow += yellowGold[i];
            storageWhite += whiteGold[i];
        }
    }
    if (storageWhite + storageYellow > onePair) {
        while (both > onePair) {
            totalPairs++
            both = both / 10
        }
    }
    if (totalPairs >= 7) {
        console.log(`Great success, you created ${totalPairs} earrings.`);
    } else {
        console.log(`Keep trying, you need ${7 - totalPairs} more earrings.`)
    }
}
demo(['5 3 3 8 5',
    '5 5 8 2 6'])
