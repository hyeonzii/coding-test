import math


origin_str = input()+' '

def reverse(str):

  str_len = len(str)-1

  rev_str = ''

  mid = math.floor(str_len/2)-1

  for i in range(str_len,-1,-1):
    rev_str += str[i]

  return rev_str

target=''
sw=0
res=''
for j in origin_str:
  if(j=='<'):
    sw+=1
    if(target!=''):
      res = res + reverse(target)
      target=''
  elif(j=='>'):
    sw-=1
    res = res + '<' + target+'>'
    target=''
  elif(j== ' ' and sw == 0):
    res = res + reverse(target)
    res = res + ' '
    target=''

  else:
    target += j


print(res)