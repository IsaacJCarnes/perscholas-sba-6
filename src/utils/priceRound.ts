export const priceRound = (target:number):string =>{
    return (Math.round(target * 100)/100).toFixed(2)
}