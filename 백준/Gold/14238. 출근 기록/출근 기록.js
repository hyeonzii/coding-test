let worker = new Array(3).fill(0);
let dp = new Array(51);
for(let a=0;a<51;a++){
    dp[a] = new Array(51);
    for(let b=0;b<51;b++){
        dp[a][b] = new Array(51);
        for(let c=0;c<51;c++){
            dp[a][b][c] = new Array(4);
            for(let d=0;d<4;d++){
                dp[a][b][c][d] = new Array(4).fill(false);
            }
        }
    }
}

let res = new Array(51);

// 문제 풀이
function solution(input) {
    
    for(let i=0;i<input[0].length;i++){

        if(input[0][i]==='A') worker[0]++;
        else if(input[0][i]==='B') worker[1]++;
        else if(input[0][i]==='C') worker[2]++;
        
    }

    let str='';
    
    if(sol(0,0,0,0,0)){
        for(let j=0;j<input[0].length;j++){
            str += res[j];
        }

        console.log(str);
    }    
    else console.log(-1);
   
}

const sol = (a,b,c,pp,p) => {
    
    if(a === worker[0] && b === worker[1] && c === worker[2]){
        return true;
    }

    if(dp[a][b][c][pp][p]) return false;
    dp[a][b][c][pp][p]=true;

    if(a+1 <= worker[0]){
        res[a+b+c] = 'A';  
        if(sol(a+1,b,c,p,1)){
            return true;
        }
    }

    if(b+1 <= worker[1]){
        res[a+b+c] = 'B';  
        if(p!=2 && sol(a,b+1,c,p,2)){
            return true;
        }
    }

    if(c+1 <= worker[2]){
        res[a+b+c] = 'C';  
        if(pp!=3 && p!=3 && sol(a,b,c+1,p,3)){
            return true;
        }
    }

    return false;
    
    
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