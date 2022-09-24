//Task6. Sort an array of strings in alphabetical order

const number =[50,2,19,44,1,5]
number.sort(function (a,b) {
if (b-a >0) {
 return 1
} else if (a-b>0){
    return -1
 } else {return 0}
 })
