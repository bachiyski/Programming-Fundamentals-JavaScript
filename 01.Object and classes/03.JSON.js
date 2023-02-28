function demo(obj){
    let objToJson = JSON.parse(obj);
    for (const key of Object.keys(objToJson)) {
        console.log(`${key}: ${objToJson[key]}`);
    }
}
demo('{"name": "George", "age": 40, "town": "Sofia"}')