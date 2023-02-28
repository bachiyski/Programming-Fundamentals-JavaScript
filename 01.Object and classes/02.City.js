function demo(city){
    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}
demo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})