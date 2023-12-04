const fs = require('fs').promises
const path = require('path')
const successIds = []

module.exports = async()=>{
    let countByColor = new Map(
        [['red',12], ['blue', 14], ['green', 13]]
    )
    
    const data = (await fs.readFile(path.join(__dirname,'../puzzle2/doc.txt'),'utf-8')).split('\n')
    const map = data.map((line)=>{
        const set =  line.split(':')[1].split(';').map((subset)=> {
            return subset.split(',').every(item => {
                const [count, color] = item.trim().split(' ')
                if(countByColor.get(color) >= Number(count)) return true
            })

        })
        return set.every(item=>item)
    }).reduce((acc, curr,i)=> curr ? acc + i+1 : acc,0)
    console.log(map)
    // outerLoop: for(const item of data){
    //     let success = true
        
    //     const [gameId, records] = item.split(':')
    //     const recordSubsets = records.split(';')
    //     console.log(recordSubsets,'recordsubsets')
    //     innerLoop: for(const rec of recordSubsets){

    //         console.log(rec,'record')
    //         if(success){
    //             const cubeCountByColor = rec.trim().split(',')
    //             console.log(cubeCountByColor,'subset')
    //             for (const item of cubeCountByColor){
    //                 if(Array.from(countByColor.values()).filter(num=> num < 0).length > 0){
    //                     success=false
    //                     break innerLoop;
    //                 } 
    //                 console.log(item,'item')
    //                 if(item.includes("green") && countByColor.get("green") >= 0 ){
    //                     countByColor.set("green",countByColor.get("green") - Number(item.trim().split(' ')[0]))
    //                     console.log(countByColor.get("green"),item)
    //                 }
    //                 else if(item.includes("blue") && countByColor.get("blue") >= 0){
    //                     countByColor.set("blue",countByColor.get("blue") - Number(item.trim().split(' ')[0]))
    //                     console.log(countByColor.get("blue"),item)
    //                 }
    //                 else if(item.includes("red") && countByColor.get("red") >= 0 ){
    //                     countByColor.set("red",countByColor.get("red") - Number(item.trim().split(' ')[0]))
    //                     console.log(countByColor.get("red"),item)
    //                 }
    //                 else {
    //                     console.log("returning from here",item,cubeCountByColor,countByColor)
    //                     success = false
    //                     break innerLoop;
    //                 }
    //             }
    //         }
    //     }
    //     console.log(countByColor, gameId, success, '----data-----')
    //     if(success) {
    //         console.log(gameId,'gameid')
    //         successIds.push(Number(gameId.split(' ')[1]))
    //     }
    //     if(!success) continue outerLoop
    // }
    
    // const sum = successIds.reduce((acc,curr)=> acc+curr,0)
    // console.log(sum)
}