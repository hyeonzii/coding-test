function solution(input) {

    const tc = Number(input[0]);
    const mod = 1000000007n; //BigInt로 변환
    let dp = new Array(5001).fill(0n);
    
    dp[0]=1n;
    dp[1]=1n;

    for(let i=2;i<=5000;i+=2){
        for(let j=0;j<i;j+=2){
            dp[i] = (dp[i] + (dp[j] * dp[i-j-2])%mod)%mod;
        }
    } 
    
    for(let t=1;t<=tc;t++){

        let L = Number(input[t]);

        if(L%2!==0){
          console.log(0);
            continue;
        } 

        console.log(Number(dp[L]));        
        
    }
   
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

    solution(input); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});