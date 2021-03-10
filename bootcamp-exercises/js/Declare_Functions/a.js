function alphabetPosition(text) {
    alphabet  = ['a','b','c','d','e','f','g','e','h','i','j'];
    let str =[];
    for(let i=0;i<alphabet.length;i++){
        if(alphabet.includes(text[i])){
            str.push(alphabet.indexOf(text[i])+1);
        }
    }
    return str;
}
console.log(alphabetPosition('dab3c'))

function longest(s1, s2) {
    // your code
    let s3 = [];
    for(let i=0;i<s1.length;i++){
      if(!s3.includes(s1[i]))
        s3.push(s1[i]);
    }
      for(let i=0;i.length<s2;i++){
      if(!s3.includes(s2[i]))
        s3.push(s2[i]);
    }
    return s3.sort().join('');
  }

  console.log(longest('abcdd','adsadwqer'));