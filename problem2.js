
// problem-solving-1
//
const multiply = (a,b) =>{
    return a*b
}
const multi =multiply(6,7)
console.log(multi);
//
 const a = "I a am Web Devloper ."
 const b = 'I love code.'
 const c = 'I eat like to Biyrani'
 const full = `${a} ${b} ${c}`
 console.log(full)
 const threeLines =` ${a}
 ${b}
 ${c}`
 console.log(threeLines)
 //
  const numbers =(num1, num2 = 20) =>{
    return num1 +num2;
  }
  const numbr =numbers(10)
  console.log(numbr)
  //


  // Problem-Solving-2

  const frinds = ['badal', 'rana', 'sakil', 'rony', 'moin', 'zain']
let bondhu =[]
  for(let frnd of frinds){
    if(frnd.length %2 ===0){
        bondhu.push(frnd)
        
    }
  }
console.log(bondhu)
//


// Problem-Solving-3
const number = [5, 23, 66, 23, 58];

const squaredNumbers = number.map(num => num ** 2);

const sumOfSquares = squaredNumbers.reduce((acc, curr) => acc + curr, 0);

const averageOfSquares = sumOfSquares / number.length;

console.log('Squared Numbers:', squaredNumbers);
console.log('Sum of Squares:', sumOfSquares);
console.log('Average of Squares:', averageOfSquares);
//


// Problem-Solving-4
 let nmbr1 =[3,5,6,65,78,98,65,]
 let nmbr2 =[44, 55,43,33,55, 66,54,44,333,]
 const maxNmbr =[...nmbr1, ...nmbr2]
 const max = Math.max(...maxNmbr)
 console.log(max)
//

// Problem-Sovling-5



