N = int(input())
positionNum = int(input())

maps = [[0 for j in range(N)] for i in range(N)]

dx = [0,1,0,-1]
dy = [1,0,-1,0]

nx,ny= None,None

def draw (n,sx,sy,cnt):
  global nx, ny
  global maps
  
  cx=sx
  cy=sy

  if n == 1:
     if positionNum==1:
        nx = cx
        ny = cy
     maps[cy][cx]=1
     return
  
  for d in range(4):
    for i in range(n-1):
      
      maps[cy][cx]=cnt

      if cnt == positionNum:
        nx = cx
        ny = cy

      cx += dx[d]
      cy += dy[d]
      cnt-=1
  
  draw(n-2,sx+1,sy+1,cnt)

draw(N,0,0,N*N)

for i in range(N):
  print(' '.join(map(str,maps[i])))
print(ny+1,nx+1)