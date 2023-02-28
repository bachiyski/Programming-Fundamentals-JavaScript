function demo(arr){
    let obj = {}
    for (const input of arr) {
        let splited = input.split(' | ')
        let name = splited[0];
        let latitude = Number(splited[1]);
        let longitude = Number(splited[2]);
        obj.town = name;
        obj.latitude = latitude.toFixed(2);
        obj.longitude = longitude.toFixed(2);
        console.log(obj);
    }
}
demo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)