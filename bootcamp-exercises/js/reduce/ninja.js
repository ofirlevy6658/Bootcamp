const star = (n)=>{
    for(let i=0;i<n;i++){
        process.stdout.write(`'`);
        for(let j=0;j<n;j++){
            if(j<=i)
                process.stdout.write(`#`);
            else
            process.stdout.write(` `);
        }
        process.stdout.write(`'`);
        console.log('');
    }
}

star(10);