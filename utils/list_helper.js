const dummy = (array) => {
    return 1;
}
const totalLikes = (list) => {
    function cal(initial,val) { 
        return initial+val.likes
    }
    const likes = list.reduce(cal,0)
    return likes
}
const favorite = (list) => {
    function calculate(initial,val){
        return initial>val ? initial : val.likes
    }
    const max = list.reduce(calculate,0)
    console.log(`The max number of likes`,max)
    const result = list.filter(val=>val.likes===max)
    console.log(`Here's the result`,result)
    return result
}
module.exports = {
    dummy,
    totalLikes,
    favorite
}