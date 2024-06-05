tc = int(input())

for _ in range(tc):
  n = int(input())
  note1= set(map(int,input().split()))
  m = int(input())
  note2= list(map(int,input().split()))

  for number in note2:
    if number in note1:
      print(1)
    else:
      print(0)