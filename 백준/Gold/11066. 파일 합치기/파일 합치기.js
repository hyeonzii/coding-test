let input = [];
const solution = () =>{

    let tc = Number(input.shift());

    for(let t=1;t<=tc;t++){
        let N = Number(input.shift());
        let sum_temp = input.shift().split(" ").map(Number);
        let sum = new Array(N+1).fill(0);
        
        let dp = Array.from(Array(N+1),()=>Array(N+1).fill(0));

        for(let n=1;n<=N;n++){
            sum[n] = sum[n-1] + sum_temp[n-1];
        }

        for(let size=1; size<=N;size++){

            for(let i=1;i<=N-size;i++){

                dp[i][i+size] = Infinity;
                
                for(let t=i;t<i+size;t++){
                    dp[i][i+size] = 
                        Math.min(dp[i][i+size],
                                dp[i][t]+dp[t+1][i+size]+sum[i+size]-sum[i-1])
                }
            }
            
        }
        console.log(dp[1][N]);
    
    }

    
    
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function(line){
    input.push(line);
}).on("close",function(){
    solution(input);
    process.exit();
});