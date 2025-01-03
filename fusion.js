function fusion(...objs) {
    let result = {};
    for (let obj of objs) {
        for (let [key, val] of Object.entries(obj)) {
            if (result[key] !== undefined) {
                if (typeof result[key] !== typeof val) {
                    result[key] = val;
                } else if (Array.isArray(val)) {
                    result[key] = result[key].concat(val);
                } else if (typeof val === "string") {
                    result[key] += " " + val;
                } else if (typeof val === "number") {
                    result[key] += val;
                } else if (val instanceof Object && !Array.isArray(val)) {
                    result[key] = fusion(result[key], val);
                }
            } else {
                result[key] = val;
            }
        }
    }
    return result;
}

