N,K = map(int,input().split(' '))

S =  list(map(int,input().split(' ')))
D =  list(map(int,input().split(' ')))

for k in range(K):
  temp = [0]*N
  for i,d in enumerate(D):
    temp[d-1]=S[i]
  S=temp

print(*S[0:])
