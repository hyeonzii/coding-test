const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let input=[];

rl.on('line',line=>{
    input.push(line);
}).on('close',()=>{

    let [N,K] = input[0].split(" ").map(Number);

    if(!solution(0,0,0,0,N,K)) console.log(-1)
    else{
        console.log(ans.join(""));
    }
    
    process.exit(); 
});

let ans = new Array(31);
let dp = new Array(31);
    for(let a=0;a<31;a++){
        dp[a] = new Array(31);
        for(let b=0;b<31;b++){
            dp[a][b]=new Array(31);
            for(let c=0;c<31;c++){
                dp[a][b][c]=new Array(500).fill(false);
            }
        }
}

const solution = (wCnt,a,b,k,N,K) =>{

    if(wCnt === N){
        if(k===K){
            console.log(ans.join(""));
            process.exit();
        }
        else return false;
    }

    if(dp[wCnt][a][b][k]) return false;
    dp[wCnt][a][b][k]=true;

    ans[wCnt] = 'A';
    solution(wCnt+1,a+1,b,k,N,K)
    ans[wCnt] = 'B';
    solution(wCnt+1,a,b+1,k+a,N,K)
    ans[wCnt] = 'C';
    solution(wCnt+1,a,b,k+a+b,N,K)

    return false;
    
}

