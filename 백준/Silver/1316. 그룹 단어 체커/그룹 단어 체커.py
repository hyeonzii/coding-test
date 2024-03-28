num = int(input())
cnt =0

for i in range(num):
  words=input()
  bow=[]
  sw=True
  if len(words) == 1:
    cnt += 1
  else:
    for j in range(len(words)):
      if j == 0:
        bow.append(words[j])
      elif j > 0:
        if words[j-1] != words[j]:
          if(words[j] in bow):
            sw=False
            break
          else:
            bow.append(words[j])
    if sw :
      cnt += 1

print(cnt)