// 문제 풀이
function solution(input) {


    const N = Number(input[0]);
    const data = input[1].split(" ").map(Number);
    const max = Number(input[2]);
    const prefixSum = [0];

    const memo = Array.from(Array(4),()=>Array(N+1).fill(0));

    for(let i=1;i<=N;i++){
        prefixSum[i] = prefixSum[i-1]+data[i-1];
    }

    for(let i=1;i<=3;i++){

        for(let j=i*max;j<=N;j++){
            memo[i][j] = Math.max(
                memo[i][j-1],
                memo[i-1][j-max] + (prefixSum[j] - prefixSum[j-max])
            );
        }
    }

    console.log(memo[3][N]);
   
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