const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]
for(let i = START; i <= END; i++){
  simpleOne.push(i)
}

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]
for(let i = START; i <= END; i++){
  let n_array = []
  for(let j = 0; j < i; j++){
    n_array.push(i)
  }
  nestedOne.push(n_array)
}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]
for(let i = START; i <= END; i++){
  let countdown_array = []
  for(let j = i; j > 0; j--){
    countdown_array.push(j)
  }
  nestedTwo.push(countdown_array)
}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]
for(let i = START; i <= END; i++){
  let lenght_i_array = []
  for(let j = 1; j <= i; j++){
    let inner_array = []
    for(let k = 0; k < j; k++){
      inner_array.push(i)
    }
    lenght_i_array.push(inner_array)
  }
  deepOne.push(lenght_i_array)
}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]
for(let i = START; i <= END; i++){
  let lenght_i_array = []
  for(let j = 1; j <= i; j++){
    let inner_array = []
    for(let k = 1; k <= j; k++){
      inner_array.push(k)
    }
    lenght_i_array.push(inner_array)
  }
  deepTwo.push(lenght_i_array)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
for(let i = START; i <= END; i++){
  let lenght_i_array = []
  for(let j = 1; j <= i; j++){
    let inner_array = []
    let sum = 0
    for(let k = 1; k <= j; k++){
      sum += k**2
    }
    inner_array.push(sum/j)
    lenght_i_array.push(inner_array)
  }
  deepThree.push(lenght_i_array)
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
