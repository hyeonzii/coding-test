const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let input=[];

rl.on('line',line=>{

    input.push(line);
    
}).on('close',()=>{
    solution(input);
    process.exit();
})

let map = new Array(5);
let N,div,cnt;
let visited = Array.from(new Array(5),()=>Array(div).fill(false));
let dx = [0,0,-1,1];
let dy = [1,-1,0,0];
let ans =''

const solution = (input) => {

    N = Number(input[0]);
    div = N/5;

    for(let i=0;i<5;i++){
        map[i]=input[1].slice(div*i,(div*i)+div);
    }

    for(let j=0;j<div;j++){
        if(map[0][j]== "#" && !visited[0][j]){
            cnt=0;
            dfs(j,0);

             if(cnt === 5) ans += '1';
             else if(cnt === 7) ans += '7' ;
             else if(cnt === 9) ans += '4';
             else if(cnt === 13) ans += '8' ;
             else if(cnt === 11){
                 if(map[1][j]==="#") ans += '5' ;
                 else if(map[3][j]==="#") ans += '2';
                 else ans += '3' ;
             }
            else if(cnt === 12){
                 if(map[3][j]===".") ans += '9' ;
                 else if(map[1][j+2]===".") ans += '6' ;
                 else ans += '0' ;
            }
        }
    }

    console.log(ans);
    
}

const dfs = (x,y) =>{
    
    if(visited[y][x]) return;

    visited[y][x]=true;
    cnt++;
    
    for(let d=0;d<4;d++){
        let nx = x+dx[d];
        let ny = y+dy[d];
        
        if(nx < 0 || ny < 0 || nx >= div || ny >= 5) continue;

        if(map[ny][nx]==="#" && !visited[ny][nx]){
            dfs(nx,ny);    
        }
    }  
}