tc = int(input())


def rotate(n,angle, arr:list):
    n-=1
    
    isMinus = False

    if angle < 0:
       isMinus=True
    
    count = abs(angle)//45

    for _ in range(count):
        
        if not isMinus:
            prev_list = list()
            #주 대각선
            for i in range(n+1):
                prev_list.append(arr[i][i])
            #주 대각선 -> 가운데 열
            for i in range(n+1):
                prev_temp = arr[i][(n + 1) // 2]
                arr[i][(n + 1) // 2]=prev_list[i]
                prev_list[i]=prev_temp
            #가운데 열 -> 부 대각선
            for i in range(n+1):
                prev_temp = arr[i][n - i]
                arr[i][n - i]=prev_list[i]
                prev_list[i]=prev_temp
            #부 대각선 -> 가운데 행
            for i in range(n+1):
                prev_temp = arr[(n + 1) // 2][n - i]
                arr[(n + 1) // 2][n - i]=prev_list[i]
                prev_list[i]=prev_temp
            #가운데 행 -> 주 대각선
            for i in range(n+1):
                arr[n-i][n-i]=prev_list[i]
              
        else:
            prev_list = list()
            #가운데 열
            for i in range(n+1):
                prev_list.append(arr[i][i])
            # 주대각선 -> 가운데행
            for i in range(n+1):
                prev_temp = arr[(n + 1) // 2][i]
                arr[(n + 1) // 2][i]=prev_list[i]
                prev_list[i]=prev_temp
            #주 대각선 -> 가운데 행
            for i in range(n+1):
                prev_temp = arr[n - i][i]
                arr[n - i][i]=prev_list[i]
                prev_list[i]=prev_temp
            #가운데 행 -> 부 대각선
            for i in range(n+1):
                prev_temp = arr[n - i][(n + 1) // 2]
                arr[n - i][(n + 1) // 2]=prev_list[i]
                prev_list[i]=prev_temp
            #부 대각선-> 가운데 열
            for i in range(n+1):
                arr[n - i][n - i]=prev_list[i]

    

for _ in range(tc):
    n,angle = map(int,input().split())

    arr = [list(map(int,input().split(' '))) for _ in range(n)]
    rotate(n,angle,arr)

    for i in range(n):
        for j in range(n):
            print(arr[i][j],end=' ')
        print()
