function nasa(data){
    let res = ""
    
    
for (let i = 1 ; i <= data;i++) {
    if (i%3 ==0 && i%5 ==0){
        res+= "NASA";
    }else if (i%3 ==0){
        res+= "NA" ;
    }else if (i%5 ==0 ){
        res+= "SA" ;
    }else {
        res+= i;
    }
    if (i< data) {
        res+= " ";
    }
    
}
return res
}
console.log(nasa(3));
