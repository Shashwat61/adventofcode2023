const fs = require('fs').promises
const path = require('path')
module.exports = async()=>{
    try {
        let sum =0;
        const bufferList = (await fs.readFile(path.join(__dirname, '../puzzle1/document.txt'),'utf-8')).split('\n').reduce((prev,curr,i)=>{
            return getSumOfNumbersFromCurrentString(curr) + prev
        },sum)
        console.log(bufferList)
    } catch (error) {
        console.log(error);
        throw error
    }
}

function getSumOfNumbersFromCurrentString(str){
    const nums = str.split('').filter((char)=> Number(char))
    return Number(nums[0] + nums[nums.length-1])
}

