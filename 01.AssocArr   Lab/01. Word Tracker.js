function demo(input) {
    let result = {};
    let words = input.shift().split(' ');
    for (let word of words) {
        result[word] = 0;

    }
    for (let word of input) {
        if(result.hasOwnProperty(word)){
            result[word]++;

        }
    }
    let sorted = Object.entries(result);
    sorted.sort((a,b) => b[1] - a[1])
    for (let word of sorted) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}
demo([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
demo([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])