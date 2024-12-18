const escapeStr = "\`\\\/\"\'";
const arr = [4, '2'];
const obj = {};
obj.str = "";
obj.num=1;
obj.bool=true;
obj.undef=undefined;

const nested = {};
nested.arr =[4, undefined, '2'];
nested.obj = {};
nested.obj.str = "";
nested.obj.num = 0;
nested.obj.bool = true;

Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);