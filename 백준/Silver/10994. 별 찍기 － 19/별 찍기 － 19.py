N = int(input())

stars = [[' ' for _ in range(4*N-3)] for _ in range(4*N-3)]

def drawStar(n,x,y):
  if n==1:
    stars[y][x]='*'
    return
  
  length = 4*n-3

  for i in range(length):
    stars[y+i][x]='*'
    stars[y+i][x+length-1]='*'
    stars[y][x+i]='*'
    stars[y+length-1][x+i]='*'
  drawStar(n-1,x+2,y+2)

drawStar(N,0,0)

for s in stars:
  print(''.join(s))