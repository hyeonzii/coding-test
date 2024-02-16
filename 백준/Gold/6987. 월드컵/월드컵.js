const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
let matches = Array.from(Array(15),()=>Array(2));
let isEndGame = false;
let ans = '';

rl.on('line',line => {
    input.push(line);
}).on('close',()=>{
    solution(input);
    process.exit();
})

const solution = (input) =>{

    let index=0;
    for(let i=0;i<5;i++){
        for(let j=i+1;j<6;j++){
            matches[index][0]=i;
            matches[index][1]=j;
            index++;
        }
    }
   
    input.forEach((v,idx)=>{

        const vs = v.split(" ").map(Number);
        let worldCup = Array.from(Array(6),()=>Array(3));
        let isPossible = true;
        
        for(let i=0;i<6;i++){
            worldCup[i][0] = vs[i*3];
            worldCup[i][1] = vs[i*3+1];
            worldCup[i][2] = vs[i*3+2];

            if(worldCup[i][0] + worldCup[i][1] + worldCup[i][2] !== 5){
                isPossible=false;
                break;
            }
        }

        if(isPossible){

            backTracking(worldCup,0);
            if(isEndGame){
                ans += '1 ';
            }
            else ans += '0 ';
            
        }
        else{
            ans += '0 ';
        }

        isEndGame=false;
        
    })

    console.log(ans);
    
}

const backTracking = (worldCup,matchCnt) =>{
    if(isEndGame) return;

    if(matchCnt === 15){
        isEndGame = true;
        return;
    }

    let myTeam = matches[matchCnt][0];
    let enemyTeam = matches[matchCnt][1];

    if(worldCup[myTeam][0] > 0 && worldCup[enemyTeam][2] > 0){
        worldCup[myTeam][0]--;
        worldCup[enemyTeam][2]--;
        backTracking(worldCup,matchCnt+1);
        worldCup[myTeam][0]++;
        worldCup[enemyTeam][2]++;
    }

    if(worldCup[myTeam][1] > 0 && worldCup[enemyTeam][1] > 0){
        worldCup[myTeam][1]--;
        worldCup[enemyTeam][1]--;
        backTracking(worldCup,matchCnt+1);
        worldCup[myTeam][1]++;
        worldCup[enemyTeam][1]++;
    }

    if(worldCup[myTeam][2] > 0 && worldCup[enemyTeam][0] > 0){
        worldCup[myTeam][2]--;
        worldCup[enemyTeam][0]--;
        backTracking(worldCup,matchCnt+1);
        worldCup[myTeam][2]++;
        worldCup[enemyTeam][0]++;
    }
    
}