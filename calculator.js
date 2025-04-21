let store = ''
let tap = (value) => {
    let cal = document.querySelector("#display")
    store = store + value
    cal.innerHTML = store
}

let result = () => {
    let cal = document.querySelector("#display")
    store = eval(store)
    cal.innerHTML= store
}
    
let empty = () => {
    let cal = document.querySelector("#display")
    store = ""
    cal.innerHTML= store
}

let del = () => {
    let cal = document.querySelector("#display")
    store=store.slice(0, -1)
    cal.innerHTML= store
}