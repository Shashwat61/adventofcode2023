const fs = require('fs').promises
const path = require('path')
const successIds = []

module.exports = async()=>{
    let countByColor = new Map(
        [['red',12], ['blue', 14], ['green', 13]]
    )
    let sumsOfMinimumValues = 0
    const data = (await fs.readFile(path.join(__dirname,'../puzzle2/doc.txt'),'utf-8')).split('\n')
    const map = data.map((line)=>{
        console.log(line,'------line-------')
        let minimumMap = new Map([['red',0],['green',0],['blue',0]])
        const set =  line.split(':')[1].split(';').forEach((subset)=> {
            return subset.split(',').forEach(item => {
                // replace with maximum number in map with respective to color
                const [count, color] = item.trim().split(' ')
                if(Number(minimumMap.get(color)) < Number(count)) minimumMap.set(color,count)
            })

        })
        sumsOfMinimumValues+= (Array.from(minimumMap.values()).reduce((prev,curr,i)=> prev * curr, 1))
    })
    console.log(sumsOfMinimumValues)
}