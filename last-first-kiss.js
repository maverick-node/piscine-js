function first(data){
const vars = data[0];
return vars;
}

function last(data){
const vars = data[data.length-1];
return vars
}

function kiss(data){
    return [last(data),first(data)];
}

