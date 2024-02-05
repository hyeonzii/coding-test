const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input =[];

rl.on('line',line=>{
    
    input.push(line);
    
}).on('close',()=>{
    solution(input);
    process.exit();
})



const solution = (input) => {

    const N = Number(input[0]);
    const number_list = input[1].split(" ").map(Number);
    const M = Number(input[2]);
let dp = Array.from(Array(N+1),()=>Array(N+1).fill(0));
    number_list.unshift(0);
    
    for(let i=1;i<=N-1;i++){
        dp[i][i]=1;
        if(number_list[i]===number_list[i+1]) dp[i][i+1] = 1;
    }
    dp[N][N]=1; 

    for(let size=2; size<=N;size++){
        for(let start=1;start+size<=N;start++){
            let end = start+size;
            if(dp[start+1][end-1] && number_list[start] == number_list[end]) dp[start][end]=1;
        }
    }

    let ans=[];
    
    input.slice(3).map((i)=>{
        const [s,e] = i.split(" ").map(Number);
        ans.push(dp[s][e]);
    })

    console.log(ans.join('\n'));
}
