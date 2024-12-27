function citiesOnly(arr) {
    return arr.map(arr2 => arr2.city);
}

function upperCasingStates(arr) {

    let arr1 = arr.map(arr2 => {
        return arr2.split(' ').map(arr3 => arr3[0].toUpperCase() + arr3.toLowerCase().slice(1)).join(' ');
    });
    return arr1;
}


function fahrenheitToCelsius(data) {
    let maap = data.map(elem => {
        let jd = elem.replace(/[°F]/g, '')
        let p = Math.floor((jd - 32) * 5 / 9) + "°C"
        return p


    })
    return maap
}


function trimTemp(arr) {
    let maap = arr.map(elem => {
        let p = elem.temperature.replace(/\s/g, "")
        return {
            ...elem, temperature: p
        }
    })
    return maap
}

function tempForecasts(arr) {
    let maap = arr.map(elem => {
        let jd = elem.temperature.replace(/[°F]/g, '')
        let p = Math.floor((jd - 32) * 5 / 9) + "°Celsius"
        let cit = (elem.city)
        let state = elem.state.split(' ').map(arr3 => arr3[0].toUpperCase() + arr3.toLowerCase().slice(1)).join(' ');


        return p + " " + "in" + " " + cit + ", " + state






    })
    return maap

}




