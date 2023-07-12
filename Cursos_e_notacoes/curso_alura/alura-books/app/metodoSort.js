let precos = [29.98, 11, 1, 101,110];
            //1, 11, 29.98, 101, 110

let precosOrdenados = precos.sort((a,b) => {
    return a - b
});

console.log(precosOrdenados);