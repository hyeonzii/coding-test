M = int(input())

stock = list(map(int,input().split(' ')))

s = M
s_stock=0
j_stock=0
j = M

for num,price in enumerate(stock):
  s_stock += (s//price)
  s %= price

  temp = stock[num:num+4]

  if len(temp) >= 4:
    if temp[0] < temp[1] < temp[2] < temp[3]:
      j += (j_stock*temp[3])
      j_stock = 0
    elif temp[0] > temp[1] > temp[2] > temp[3]:
      j_stock += (j // temp[3])
      j %= temp[3]

answer_bnp = s + s_stock * stock[-1]
answer_timing = j + j_stock * stock[-1]

if answer_bnp < answer_timing:
    print("TIMING")
elif answer_bnp > answer_timing:
    print("BNP")
else:
    print("SAMESAME")
