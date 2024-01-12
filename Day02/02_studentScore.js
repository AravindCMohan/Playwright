/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score) {
    switch (true) {
        case (score <= 100 && score >= 90):
            return "A Grade";
        case (score <= 89 && score >= 80):
            return "B Grade";
        case (score <= 79 && score >= 70):
            return "C Grade"
        case (score <= 69 && score >= 55):
            return "D Grade";
        case (score <= 54 && score >= 35):
            return "E Grade";
        default:
            return "FAIL";
    }
}

let score = [100,12,67,0,86,123,-12];
for (let index = 0; index < score.length; index++) {
    if((score[index] >= 0)&&(score[index] <= 100)){
        console.log('The Grade of the score '+ score[index] + ': ' +calculateGrade(score[index]) );
    } else {
        console.log(score[index] + ' The score is invalid');
    }
    }

