function evaluatePresentations(input) {
    let n = parseInt(input[0]); 
    let index = 1; 
    let totalAverage = 0; 
    let presentationsCount = 0; 
while (index < input.length) {
        let presentationName = input[index]; 
        if (presentationName === "Finish") {
            break; 
        }
 let sumScores = 0; 
for (let i = 0; i < n; i++) {
            let score = parseFloat(input[index + 1 + i]); 
            sumScores += score; 
        }
let averageScore = sumScores / n; 
        console.log(`${presentationName} - ${averageScore.toFixed(2)}.`); 
totalAverage += averageScore; 
        presentationsCount++; 
        index += n + 1; 
    }
let finalAssessment = totalAverage / presentationsCount;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}