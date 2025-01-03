function filterValues(obj, func) {
    let r = {};
    for (let [k, v] of Object.entries(obj)) {
        if (func(v)) {
            r[k] = v;
        }
    }
    return r;
}

function mapValues(obj, func) {
    let r = {};
    for (let [key, val] of Object.entries(obj)) {
        r[key] = func(val);
    }
    return r;
}

function reduceValues(obj, func, acc) {
    let index = 0;
    let r = 0;
    if (acc !== undefined) {
        index = 0;
    } else {
        index = 1;
    }
    let te = Object.keys(obj);
    let k = Object.values(obj);

    if (acc !== undefined) {
        r = acc;
    } else {
        r = k[0];
    }

    for (let i = index; i < te.length; i++) {
        r = func(r, obj[te[i]]);
    }
    return r;
}
