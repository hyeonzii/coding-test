N,M=map(int,input().split())

train = [[0 for _ in range(20)] for _ in range(N)]
state = []

for _ in range(M):
    command = list(map(int,input().split()))

    if command[0]==1:
        train[command[1]-1][command[2]-1]=1
    elif command[0]==2:
        train[command[1]-1][command[2]-1]=0
    elif command[0]==3:
        for i in range(19,0,-1):
            train[command[1]-1][i] = train[command[1]-1][i-1]
        train[command[1]-1][0]=0
    elif command[0]==4:
        for j in range(19):
            train[command[1]-1][j]=train[command[1]-1][j+1]
        train[command[1]-1][19]=0

ans=0

for i in range(N):
    if train[i] not in state:
        ans+=1
        state.append(train[i])

print(ans)




