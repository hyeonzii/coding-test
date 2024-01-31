// 문제 풀이
function solution(input) {
    
    const TC = Number(input[0]);

    const move = [[0,1],[1,0],[0,-1],[-1,0]];
    let curMove = 0;

    for(let t=1;t<=TC;t++){

        let command = input[t];

        let curPos=[0,0];
        let max_X = 0 , max_Y = 0, min_X =0, min_Y =0;
        
        for(let i=0;i<command.length;i++){

            if(command[i]==="F"){
                curPos[0] += move[curMove][0];
                curPos[1] += move[curMove][1];
            }
            else if(command[i]==="L"){
                curMove = (curMove + 3 ) % 4;
            }
            else if(command[i]==="R"){
                curMove = (curMove + 5 ) % 4;
            }
            else if(command[i]==="B"){
                curPos[0] -= move[curMove][0];
                curPos[1] -= move[curMove][1];
            }
            
            if(curPos[0] >= max_X){
                max_X = curPos[0];
            }

            if(curPos[1] >= max_Y){
                max_Y = curPos[1];
            }

            if(curPos[0] <= min_X){
                min_X = curPos[0];
            }

            if(curPos[1] <= min_Y){
                min_Y = curPos[1];
            }
           
           // console.log(curPos);
            //console.log(max_X+","+max_Y+"   "+min_X+","+min_Y)
            
            
        }
        
        console.log(Math.abs(max_X-min_X) * Math.abs(max_Y-min_Y));
        
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