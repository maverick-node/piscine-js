function longWords(arr){
    let ee = arr.every((currentValue) => currentValue.length >= 5 )
    return ee

}

function oneLongWord(arr){
    let ee= arr.some((currentValue) => currentValue.length >= 10)
    return ee
}



function noLongWords(arr){
    let ee = arr.every((currentValue) => currentValue.length < 7 )
    return ee
}

// let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']

// console.log(noLongWords(arr1));
