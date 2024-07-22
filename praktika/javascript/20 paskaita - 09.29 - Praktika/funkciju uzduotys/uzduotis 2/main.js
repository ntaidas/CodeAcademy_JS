let abc = ['a','h','z','b','f','c','g','t','n','s']

function sortABC(a){
    a.sort()
    for(let letter of a){
        console.log(letter)
    }
}

sortABC(abc)