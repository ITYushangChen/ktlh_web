// helper.jsx
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
export function uniqueRandomIntegers(min, max, count) {  
    const result = new Set();
    while (result.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      result.add(randomNumber);
    }
    return Array.from(result);
  }
  

export function uniqueRandomColors(min, max, count,choosen) {  
    const result = new Set();
    result.add(choosen);
    while (result.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.add(randomNumber);
    }
    return Array.from(result);
}

export function randomSortArray(arr){
    arr.sort(function(){
        return Math.random() - 0.5;
    })
}