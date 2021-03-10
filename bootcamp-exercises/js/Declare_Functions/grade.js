const gradeAssigner = (grade) => {
    if(0 <= grade && grade <=64)
        return 'F'
    else if(65 <= grade && grade <=69)
        return 'E'
    else if(70 <= grade && grade <=79)
        return 'C'
    else if(80 <= grade && grade <=89)
        return 'B'
    else if(90 <= grade && grade <=100)
        return 'A'
    else return `Wrong grade`
}

console.log(gradeAssigner(64));
console.log(gradeAssigner(68));
console.log(gradeAssigner(70));
console.log(gradeAssigner(81));
console.log(gradeAssigner(90));
