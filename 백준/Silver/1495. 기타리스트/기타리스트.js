// 문제 풀이
function solution(input) {

    const [N,S,M] = input[0].split(" ").map(Number);
    const V = input[1].split(" ").map(Number);

    let dp = Array.from(Array(51),()=>Array(1001).fill(false));
    dp[0][S]=true;

    for(let i=1;i<=N;i++){
        for(let j=0;j<=M;j++){

            //이전 곡에서 j라는 값이 존재해야지 그 다음 누적합을 구할 수 있으므로
            if(!dp[i-1][j]) continue;

            if(j - V[i-1] >= 0){
                dp[i][j - V[i-1]] = true;
            }

            if(j+V[i-1] <= M){
                dp[i][j + V[i-1]] = true;
            }
            
        }
    }

    let ans = -1;
    
    for(let i=0;i<=M;i++){
        if(dp[N][i]){
            ans = Math.max(ans,i);
        }
    }

    console.log(ans);
    
    
}



/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
    
});


let input = [];

rl.on("line", function (line) {

   input.push(line) // 입력받은 여러줄, line
   // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
   
}).on("close", function () {

    solution(input); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});