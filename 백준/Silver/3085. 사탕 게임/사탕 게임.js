const swapRow = (candy,row,col) =>{

    let temp = candy[row][col];
    candy[row][col] = candy[row+1][col];
    candy[row+1][col] = temp;
    
}

const swapCol = (candy,row,col) =>{

    let temp = candy[row][col];
    candy[row][col] = candy[row][col+1];
    candy[row][col+1] = temp;
    
}

const countSame = (candy) =>{

    let cnt=0;

    for(let i=0;i<N;i++){

        let cnt_row=1;
        let cnt_col=1;
        
        for(let j=0;j<N-1;j++){

            if(candy[i][j] === candy[i][j+1]){
                cnt_row++;
            }
            else{
                cnt = Math.max(cnt,cnt_row);
                cnt_row=1;
            }

            if(candy[j][i] === candy[j+1][i]){
                cnt_col++;
            }
            else{
                cnt = Math.max(cnt,cnt_col);
                cnt_col=1;
            }
            
        }

       cnt =  Math.max(cnt,cnt_row,cnt_col);
    }

    return cnt;
}

let N;

// 문제 풀이
function solution(input) {

    N = input[0];
    let candy=[];

    for(let n=1;n<=N;n++){
        candy.push(input[n].split(""));
    }

    let ans = - Infinity;

    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){

            if(j+1 < N && (candy[i][j] !== candy[i][j+1])){
            
                swapCol(candy,i,j);
                ans = Math.max(ans, countSame(candy));

                swapCol(candy,i,j);
             
            }

            if(i+1 < N && (candy[i][j] !== candy[i+1][j])){
                swapRow(candy,i,j);
                ans = Math.max(ans, countSame(candy));

                swapRow(candy,i,j);
            }
            
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
let list = [];

rl.on("line", function (line) {

   input.push(line) // 입력받은 여러줄, line
   // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
   
}).on("close", function () {

  

    solution(input); // 문제 풀이 함수 호출    
    process.exit(); // 프로세스 종료
});