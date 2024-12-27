function adder(arr,o=0) {

    let re = arr.reduce((elem, elem2) =>elem2 + elem, o);
    return re
}


function sumOrMul(arr,o=0){
    let re = arr.reduce((elem,elem2) => {
        if (elem2 %2 ==0){
            elem *= elem2
        }else {
            elem += elem2
        }
        return elem
    },o);
    return re
    
}

function funcExec(arr,o =0){
    let re = arr.reduce((elem ,elem2) => {
      return elem2(elem)
        
    },o)
return re
}

// const fArr1 = [
//     (x) => x + 2,
//     (x) => x ** 2,
//     (x) => x - 7,
//     (x) => `result: [${x}]`,
//   ]

//   console.log(funcExec(fArr1));
  