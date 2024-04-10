def check(arr):
    total = 0
    check_idx=[0,1,2,3,4]
    for i in range(5):
        # 가로
        if arr[i][0]==0:
            tmp=0
            for idx in check_idx:
                if arr[i][0+idx]==0:
                    tmp+=1
                if tmp == 5:
                    total+=1

    #세로
    for i in range(5):
        if arr[0][i]==0:
            tmp=0
            for idx in check_idx:
                if arr[0+idx][i]==0:
                    tmp+=1
                if tmp == 5:
                    total+=1
    #대각선 ↘️
    tmp=0
    for idx in check_idx:
        if arr[idx][idx]==0:
            tmp+=1
        if tmp == 5:
            total+=1
    #대각선 ↗️
    tmp=0
    for idx in check_idx:
        if arr[0+idx][4-idx]==0:
            tmp+=1
        if tmp==5:
            total+=1
    if total >= 3:
        return True
    else:
        return False

arr = [list(map(int,input().split()))for _ in range(5)]
call = []
for _ in range(5):
    call+=map(int,input().split())
cnt=0     

for c in range(25):
    for i in range(5):
        for j in range(5):
            if arr[i][j] == call[c]:
                    arr[i][j]=0
                    cnt+=1
                    break
    if cnt >= 12:
        if check(arr):
            print(c+1)
            break