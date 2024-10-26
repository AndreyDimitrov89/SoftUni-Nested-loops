function equalSumsEvenOddPosition(starNum, endNum) {
    let result = "";
for (let currentNum = starNum; currentNum <= endNum; currentNum++) {
    let evenIndexSum = 0;
    let oddIndexSum = 0;
    let currentNumAsStr = currentNum + "";
    for (let index = 0; index < currentNumAsStr; index++) {
    let digit = Number(currentNumAsStr[index]);
    if (index % 2 === 0) {
        evenIndexSum += digit;
    } else {
        oddIndexSum += digit;
    }
    }
 if (evenIndexSum === oddIndexSum) {
    result += currentNum + ""; 
    
 }
    }
    console.log(result);
    
}
equalSumsEvenOddPosition(100000, 100050)