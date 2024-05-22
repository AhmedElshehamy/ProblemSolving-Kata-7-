function evaporator(content, evap_per_day, threshold) {
    let days = 0

    let thresholdValue = content * (threshold / 100)

    while (content > thresholdValue) {

        content *= (thresholdValue - evap_per_day / 100)
        days++
    }
    return days

}

console.log(evaporator(10, 10, 10))