let n = 50;

function fiboEvenSum(num) {
    let arreglo = []
    let pri = 1;
    let sec = 2; 
    let next = pri + sec;
    let acc = sec
    arreglo.push(pri)
    arreglo.push(sec)

    while (next < num) {
        // console.log(pri, sec, next);
        next = pri + sec
        pri = sec
        sec = next
        if(next < num) {
            arreglo.push(next)
        }
        if(next % 2 == 0){
            acc = acc + next
        }
    }
    return arreglo.toString()
    // console.log(arreglo.toString());
    // console.log(acc);
    
    
}
fibo(50)