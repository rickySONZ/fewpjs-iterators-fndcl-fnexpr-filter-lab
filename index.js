// Code your solution here

function findMatching(arr, str){
   return arr.filter(n => {
        return (n.toLowerCase() === str.toLowerCase())
    })

}

function fuzzyMatch(arr, s){
    return arr.filter(n => {
         return (n[0] === s[0])
     })
 }

 function matchName(arr, s){
     return arr.filter(n =>{
        return n.name === s
     })
 }

