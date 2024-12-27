function addWeek(date) {
    let days = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday", "Sunday", "secondMonday", "secondTuesday",
        "secondWednesday", "secondThursday", "secondFriday",
        "secondSaturday", "secondSunday"
    ]

    let newDate = new Date('0001-01-01');
    let datep = date - newDate
    let secodn = datep / 1000
    let day = secodn / (24 * 3600) % 14

    return days[day]




}


function timeTravel(data) {



    data.date.setHours(data.hour)
    data.date.setMinutes(data.minute)
    data.date.setSeconds(data.second)


    return data.date


}
