function spinWords(str){
    return (str.split(" ").map(el=> el.length>=5 ? [...el].reverse().join("") :el)).join(' ')
}
console.log(spinWords("saddsa sda asr asdr abcdefgh") );   