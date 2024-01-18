function solution(input) {

    let A = input[0];
    let B = input[1];

    let queue =[[A,1]];
    let ans=-1;

    while(queue.length){

        let [x,cnt] = queue.shift();

        if(x===B){
            ans = cnt;
        }

        let mul = x*2;
        let right = Number(x+'1');
        
        if(mul <= B){
            queue.push([mul,cnt+1])
        }

        if(right <= B){
            queue.push([right,cnt+1]);
        }
        
    }

    ans===-1 ? console.log(-1) : console.log(ans);
    
}

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
    
});


let input;
let list = [];

rl.on("line", function (line) {

   input = line; // 입력받은 문자열, line
   // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
   
}).on("close", function () {

    // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입
    list = input.split(' ').map((el) => Number(el));

    solution(list); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});