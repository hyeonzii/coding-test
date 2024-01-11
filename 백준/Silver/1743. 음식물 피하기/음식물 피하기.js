let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//N 세로 M 가로 K 음식물 쓰레기 갯수
let [N, M, K] = input.shift().split(" ").map(Number);

let graph = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
let visited = Array.from(Array(N + 1), () => Array(M + 1).fill(false));

let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];
let cnt = 0;
let ans = 0;

for (let i = 0; i < K; i++) {
  let [r, c] = input.shift().split(" ").map(Number);
  graph[r][c] = 1;
}

function bfs(x, y) {
  let queue = [[x, y]];
  queue.push([x, y]);
  visited[x][y] = 1;
  cnt++;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      //범위를 벗어나는 경우 제외
      if (nx < 1 || ny < 1 || nx > N || ny > M) continue;

      if (!visited[nx][ny] && graph[nx][ny] === 1) {
        cnt++;
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      cnt = 0;
      bfs(i, j);
      ans = Math.max(ans, cnt);
    }
  }
}

console.log(ans);
