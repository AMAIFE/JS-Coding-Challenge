// Task9. Return the number of vowels in a string

function vowels (alphabetical){
    let sum = 0
    for (let i=0;i<alphabetical.length;i++){
        let letter =alphabetical[i].toLowerCase();
        if (letter=='a'|| letter=='e'|| letter=='i'||letter=='o'||letter=='u'){
          sum=sum+1  
        }
    }
    return sum
}
console.log (vowels('biology'))