const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input=[];

rl.on('line',line=>{
    input.push(line);
}).on('close',()=>{

    solution(input);
    process.exit();
    
})

const numType = {
    "1" : [3,6],
    "2" : [1,3,4,5,7],
    "3" : [1,3,4,6,7],
    "4" : [2,3,4,6],
    "5" : [1,2,4,6,7],
    "6" : [1,2,4,5,6,7],
    "7" : [1,3,6],
    "8" : [1,2,3,4,5,6,7],
    "9" : [1,2,3,4,6,7],
    "0" : [1,2,3,5,6,7],
}

const solution = (input)=>{
    
    let [s,arr] = input[0].split(" ");
    s=Number(s);
    
    const len = arr.length;

    const board = Array.from(Array(2*s+3),()=>Array(((s+2)*len) + len).fill(" "));

    let type_num =0;
    let start = 0;
    
   for(let i=0;i<len;i++){
       
       let type = numType[arr[i]];
        
        type.forEach((v)=>{
            for(let j=0;j<s;j++){

                if(v===1) board[0][start+j+1] = '-';
                else if(v === 2) board[j+1][start] = '|';
                else if(v === 3) board[j+1][start+s+1] = '|';
                else if(v === 4) board[s+1][start+j+1] = '-';
                else if(v === 5) board[s+2+j][start] = '|';
                else if(v === 6) board[s+2+j][start+s+1] = '|';
                else if(v === 7) board[2*s+2][start+j+1] = '-';
                
            }
                   
        });

       start += s+3;

   }
    
     for(let i=0;i<board.length;i++){
           console.log(board[i].join(''));
       }   


    
}