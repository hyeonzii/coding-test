# E -> W 될 때 무한루프 발생

N = int(input())
map = input()
answer=0
prev=map[0]

for x in map[1:]:
    if prev=='E' and x =='W':
        answer += 1
    prev = x
print(answer)