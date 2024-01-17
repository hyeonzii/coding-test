let input = [];
let list = [];

let dx = [0,0,1,-1,1,-1,1,-1];
let dy = [1,-1,0,0,-1,1,1,-1];

let N=0,M=0;
let map=[];
let queue=[];

function solution() {

    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(map[i][j]===1){
                queue.push([j,i]);
            }
        }
    }

    bfs();

  //  console.log(map.flat());
   console.log(Math.max(...map.flat())-1);
   
}

const bfs= () =>{

    while(queue.length){

        let [x,y] = queue.shift();

        for(let d=0;d<8;d++){

            let nx = x+dx[d];
            let ny = y+dy[d];

            if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue;

            //우리는 1인 좌표로 부터 모든 0인 좌표까지의 거리 중에서 
            //가장 큰 것을 봐야하기 때문에 visited flase/true 판단하는 것 보단
            //하나하나 모든 좌표의 거리를 map에 그리는게 맞음
            if(!map[ny][nx]){
                queue.push([nx,ny]);
                map[ny][nx]=map[y][x]+1;
            }
            
        }
         
    }
    
}






/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,
    
});

rl.on("line", function (line) {

   input.push(line) // 입력받은 여러줄, line
   // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
   
}).on("close", function () {

    [N,M] = input[0].split(" ").map(Number);
    
    for(let n=1;n<=N;n++){
        map.push(input[n].split(" ").map(Number));
    }

    solution(); // 문제 풀이 함수 호출    
    
    process.exit(); // 프로세스 종료
});