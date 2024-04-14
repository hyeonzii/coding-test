N = int(input())

sw = [-1] + list(map(int,input().split()))

student = int(input())

def changeNum(num):
   if num == 0:
      return 1
   elif num == 1:
      return 0

for _ in range(student):
  
    gender,index = map(int,input().split(' '))
    
    if gender == 1:
      for i in range(index,N+1,index):
        sw[i] = changeNum(sw[i])
            
    elif gender == 2:
        sw[index] = changeNum(sw[index])
        prev_index = index
        next_index = index
        while True:
            prev_index = prev_index-1
            next_index = next_index+1

            if prev_index < 1 or next_index > N: break
            if sw[prev_index] == sw[next_index]:
               sw[prev_index] = changeNum(sw[prev_index])
               sw[next_index] = changeNum(sw[next_index])
            else: break

for i in range(1,N+1):
   print(sw[i],end=" ")
   if i % 20 == 0 :
      print()