function words(data) {
const res = data.split(" ");
return res;
}

function sentence(data) {
    const res= data.join(" ")
    return res;
}

function yell(data){
    const res= data.toUpperCase();
    return res;
}

function whisper(data){
    const res= data.toLowerCase();
    const re = '*'+res+'*';
    return re;

}

function capitalize(data){
    const res= data[0].toUpperCase()+data.slice(1).toLowerCase();
    return res;
}


