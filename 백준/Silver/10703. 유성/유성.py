import sys
input = sys.stdin.readline
n,m = map(int, input().split())
arr = [input() for _ in range(n)]

# 유성과 땅 사이의 최소 거리
def get_dist():
    dist = n
    for j in range(m):
        # 유성이 없으면 거리를 최대로 주기 위해 음수로 설정
        meteor = -3001 
        for i in range(n):
        
            # 유성이면 유성 위치를 업데이트
            if arr[i][j] == "X": 
                meteor = i
                
            # 땅을 만나면 최소 거리 업데이트
            elif arr[i][j] == "#":
                dist = min(i - meteor - 1,dist)
                break
    return dist

# 최소 거리
dist = get_dist()

# dist만큼 유성이 이동함으로 땅 외에는 공기만 존재
for i in range(dist):
    res = ""
    for j in range(m):
        if arr[i][j] == "#":
            res += "#"
        else:
            res += "."
    print(res)

# dist만큼 이동한 유성 위치 표시
for i in range(dist, n):
    res = ""
    for j in range(m):
        if arr[i-dist][j] == "X":
            res += "X"
        elif arr[i][j] == "#":
            res += "#"
        else:
            res += "."
    print(res)