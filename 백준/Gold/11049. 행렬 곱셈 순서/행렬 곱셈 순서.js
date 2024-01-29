// 문제 풀이
function solution(input) {

    const N = Number(input[0]);
    let matrix = [];

    for(let n=1;n<=N;n++){
        matrix.push(input[n].split(" ").map(Number));
    }

    let dp = Array.from(Array(N+1),()=>Array(N+1).fill(0));

    for(let term=1;term<N;term++){
        for(let start=0;start<N;start++){
            if(start + term === N) break;

            dp[start][start+term] = Infinity;
            for(let t=start;t<start+term;t++){

            dp[start][start+term] = Math.min(
                dp[start][start+term],
                dp[start][t] + dp[t+1][start+term] + 
                matrix[start][0] * matrix[t+1][0] * matrix[start+term][1]
            );
                
            }
            
        }
    }

    console.log(dp[0][N-1]);
    
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