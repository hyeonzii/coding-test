N,M = map(int,input().split())
A = list(map(int, input().split()))

sp=0
ep=0

sum = A[sp]
ans = 0
while True:
  if sum == M:
    ans += 1
  
  if sum > M:
    sum -= A[sp]
    sp += 1
    if sp > ep:
      ep += 1
      if ep==N:
        break
      sum += A[ep]
  else:
    ep += 1
    if ep==N:
      break
    sum += A[ep]
    
#  print(sp)
#  print(ep)
#  print('-----')

print(ans)