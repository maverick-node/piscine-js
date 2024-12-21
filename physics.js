
function getAcceleration(object){
   
    
if (object.f !== undefined && object.m !== undefined){
    return  object.f/object.m 
}
if (object.Δv !== undefined && object.Δt !== undefined){
    return  object.Δv/object.Δt
}   
if (object.d !== undefined && object.t !== undefined){
    return (object.d*2)/(object.t**2)
}else {
    return "impossible"
}
}



