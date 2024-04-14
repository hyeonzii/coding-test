left,right = input().split(' ')
input_string = input()

keyboard =['qwertyuiop','asdfghjkl','zxcvbnm']
mo = 'yuiophjklbnm'

lx,ly,rx,ry = None,None,None,None

for i in range(len(keyboard)):
    if left in keyboard[i]:
      ly= i
      lx = keyboard[i].index(left)
    if right in keyboard[i]:
      ry = i
      rx = keyboard[i].index(right)

time=0
for letter in input_string:
    time += 1
    if letter in mo:
        for i in range(len(keyboard)):
           if letter in keyboard[i]:
              ny = i
              nx = keyboard[i].index(letter)

              time += abs(rx-nx) + abs(ry-ny)
              rx=nx
              ry=ny
              break
    else:
      for i in range(len(keyboard)):
           if letter in keyboard[i]:
              ny = i
              nx = keyboard[i].index(letter)
              time += abs(lx-nx) + abs(ly-ny)
              lx=nx
              ly=ny
              break
           
print(time)