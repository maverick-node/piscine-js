export let getArchitects = () => {
    let res1 = []
    let res2 = []
    let r1 = document.getElementsByTagName("a")
    let r2 = document.getElementsByTagName("span");

    for (let i = 0; i < r1.length; i++) {
        res1.push(r1[i])
    }
    for (let i = 0; i < r2.length; i++) {
        res2.push(r2[i])
    }
    return [res1, res2]
}

export let getClassical = () => {
    let ar1 = []
    let ar2 = []
    let t1 = document.getElementsByClassName("classical")

    let t2 = document.querySelectorAll('a:not(.classical)');


    for (let i = 0; i < t1.length; i++) {
        ar1.push(t1[i])
    }
    for (let i = 0; i < t2.length; i++) {
        ar2.push(t2[i])
    }

    return [ar1, ar2]
}

export let getActive = () => {
    let ar1 = []
    let ar2 = []
    let t1 = document.getElementsByClassName("active")
 
    
    let t2 = document.querySelectorAll("a:not(.classical.active)")


    for (let i = 0; i < t1.length; i++) {
        ar1.push(t1[i])
    }
    for (let i = 0; i < t2.length; i++) {
        ar2.push(t2[i])
    }

    return [ar1, ar2]
}

export let getBonannoPisano = () => {

    let ar2 = []
    let t1 = document.getElementById("BonannoPisano")
    let t2 = document.querySelectorAll("a:not(#BonannoPisano)")
    for (let i = 0; i < t2.length; i++) {
        ar2.push(t2[i])
        
    }


    return [t1, ar2]
}