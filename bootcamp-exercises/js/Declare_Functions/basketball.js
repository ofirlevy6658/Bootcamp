
const avg = (arrPoints) => {
    let avg =0;
    for(let i =0;i<arrPoints.length;i++){
        avg +=arrPoints[i]
    }
    return avg/arrPoints.length;
}

const winner = (john,mike,mary) =>{
    let highScore = Math.max(john,mike,mary)
    if(john === highScore && highScore===mike || highScore===mary && highScore===mike || highScore===john && highScore===mary){
        return "tie";
    }
    else if(john === highScore){
        return `the winner is john with ${highScore} points`
    }
    else if(mike === highScore){
        return `the winner is mike with ${highScore} points`
    }
    else if(mary === highScore){
        return `the winner is mary with ${highScore} points`
    }
}


let john = [89,120,103];
let mike = [116,94,123];
let mary = [97,134,105];

console.log(winner(avg(john),avg(mike),avg(mary)));

let john2 = [89,120,103];
let mike2 = [100,100,150];
let mary2 = [100,150,100];

console.log(winner(avg(john2),avg(mike2),avg(mary2)));