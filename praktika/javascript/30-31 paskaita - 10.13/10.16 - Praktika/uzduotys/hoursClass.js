export default function niceTime(minutes){
    if(minutes === 60){
        console.log(`1 valanda`)
        return `1 valanda`
    }else if(minutes > 60){
        let hours = minutes / 60;
        hours = Math.floor(hours);
        const minutesOver = minutes - (60*hours)
        console.log(`${hours} valanda ir ${minutesOver} minuciu`)
        return `${hours} valanda ir ${minutesOver} minuciu`  
    }else{
        console.log(`${minutes} minutes`)
        return `${minutes} minutes`
    }
}