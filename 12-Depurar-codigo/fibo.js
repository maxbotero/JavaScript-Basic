fibo = (num) => {
    
    let a = 0
    let b = 1
    let c = a + b
    let lista = [c]
    for(let i=1; i < num; i++) {
        lista.push(c)
        a = b
        b = c
        c = a + b
    }
    return lista
}

console.log(fibo(6))
