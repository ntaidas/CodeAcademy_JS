let skaiciai = [1,5,3,8,88,6,42,24,87,244,9]

function sortNum(n){
    n.sort((a,b) => b-a)
    for(let sk of n){
        console.log(sk)
    }
}