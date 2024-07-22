function fizzBuzz(n){
    for(let i=1; i<= n;i++){
        if (i%5 === 0 && i%3 === 0){
            console.log('FIZZ-BUZZ')
        }else if(i%5 === 0){
            console.log('BUZZ')
        }else if(i%3 === 0){
            console.log('FIZZ')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(110)