function primes(num){
    for(let i = 1; i<= num; i++){
        if((i%2 === 0 || i%3 === 0 || i%5 === 0) === false){    
            console.log(i)
        }
    }
}