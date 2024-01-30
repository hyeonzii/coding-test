const mod = 1000000007n;
let dp=new Array(51);
for(let a =0;a<51;a++){
    dp[a] = new Array(51);
    for(let b=0;b<51;b++){
        dp[a][b] = new Array(51);
        for(let c=0;c<51;c++){
           dp[a][b][c] = new Array(51).fill(-1n); 
        }
    }
}


// 문제 풀이
function sol(input) {

    const [s,d,k,h] = input[0].split(" ").map(Number);
    solution(s,d,k,h);

    console.log(Number(dp[s][d][k][h]));
}

const solution = (s,d,k,h) => {

    if(s === 0){
        if(d==0 && k==0 && h==0) return 1n;
        else return 0n;
    }

    if(d < 0 || k < 0 || h < 0) return 0n;
    if(dp[s][d][k][h] !== -1n) return dp[s][d][k][h];

    dp[s][d][k][h]=0n;
    dp[s][d][k][h] += solution(s-1,d-1,k,h);
    dp[s][d][k][h] += solution(s-1,d,k-1,h);
    dp[s][d][k][h] += solution(s-1,d,k,h-1);
    dp[s][d][k][h] += solution(s-1,d-1,k-1,h);
    dp[s][d][k][h] += solution(s-1,d-1,k,h-1);
    dp[s][d][k][h] += solution(s-1,d,k-1,h-1);
    dp[s][d][k][h] += solution(s-1,d-1,k-1,h-1);
    dp[s][d][k][h]%=mod;

    return dp[s][d][k][h];
    
}




/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
    
});


let input = [];
let list = [];

rl.on("line", function (line) {

   input.push(line) // 입력받은 여러줄, line
   // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
   
}).on("close", function () {

    sol(input); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});