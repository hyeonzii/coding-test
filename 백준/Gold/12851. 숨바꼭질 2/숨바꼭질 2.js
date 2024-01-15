let ans=Infinity,cnt=0;

function solution(input) {

    let [N,K] = input[0].split(" ").map(Number);
    let map = new Array(100001).fill(0);
    let queue = [[N,0]];
    
    while(queue.length){

        let [x,time] = queue.shift();

        if(x===K) {
            ans = Math.min(ans,time);
            cnt++;
        }

        if(time > ans) return;
        
        let forward = x + 1;
        let back = x - 1;
        let move = 2*x;

       if(forward >= 0 && forward <= 100000 && ( map[forward] == 0  || map[forward] >= time+1) ) {queue.push([forward,time+1]); map[forward]=time+1}
       if(back >= 0 && back <= 100000 && ( map[back] == 0  || map[back] >= time+1) ) {queue.push([back,time+1]); map[back]=time+1}
       if(move >= 0 && move <= 100000 && ( map[move] == 0  || map[move] >= time+1) ) {queue.push([move,time+1]); map[move]=time+1}

        
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

    console.log(ans);
    console.log(cnt);
    
    process.exit(); // 프로세스 종료
});