// Task10. Create a function that filters out negative
//numbers


function negativenumber(numbers){
    return numbers.filter(function (num){
        return num<0 
    })
}
console.log (negativenumber([-32,90,34,-23,-90]))