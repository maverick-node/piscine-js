function isValid(date) {

    if (isNaN(date) || date == '') {
        return false
    }
    if (new Date(date) == '') {
        return false
    }

    return true
}



function isAfter(date, date2) {
    if (new Date(date) > new Date(date2)) {
        return true
    }
    return false
}

function isBefore(date, date2) {
    if (new Date(date) < new Date(date2)) {
        return true
    }
    return false

}

function isFuture(date) {
    if ((isValid(date)) && new Date(date) > Date.now()) {
        return true
    }
    return false
}

function isPast(date) {
    if ((isValid(date)) && new Date(date) < Date.now()) {
        return true
    }
    return false
}

