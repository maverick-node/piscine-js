function filterEntries(obj, func) {
    let res = {}
    for (let [key, val] of Object.entries(obj)) {
        if (func([key, val])) {
            res[key] = val
        }
    }
    return res
}

function mapEntries(obj, func) {
    let res = {}
    for (let [key, val] of Object.entries(obj)) {
        let [newkey, newval] = func([key, val])
        res[newkey] = newval;
    }
    return res;
}
function reduceEntries(obj, func, acc) {

    let r = acc !== undefined ? acc : ''

    for (let [key, val] of Object.entries(obj)) {
        r = func(r, [key, val])
    }
    return r
}
function totalCalories(obj) {
    return reduceEntries(obj, (x, [keys, vals]) => {
        let total = 0
        let to = vals / 100
        total = x + (nutritionDB[keys].calories * to)
        return Number.parseFloat(total.toFixed(1))

    }, 0)

}
function cartTotal(obj) {
 
    return mapEntries(obj, ([keys, val]) => {
        let total = {}
        let to = val / 100
        let nutre = nutritionDB[keys]
        for (let key in nutre) {
            total[key] = parseFloat((nutre[key] * to).toFixed(3))
                  
            
        }
        
        return [keys, total]

    });
}

function lowCarbs(obj) {
    return filterEntries(obj, ([keys, valv]) => {
        let to = valv / 100
        if ((nutritionDB[keys].carbs * to) < 50) {
            return [keys, valv]
        }

    })
}
const groceriesCart = { oil: 500, onion: 230, garlic: 220, paprika: 480 }

console.log(cartTotal(groceriesCart))