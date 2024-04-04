N = int(input())

shortCut=[]
for _ in range(N):
    words = list(input().split())
    Flag = False
    for i in range(len(words)):
        if words[i][0].upper() not in shortCut:
            shortCut.append(words[i][0].upper())
            words[i] = '['+words[i][0]+']' + words[i][1:]
            Flag=True
            print(' '.join(words))
            break
    if not Flag:
        for i in range(len(words)):
            for j in range(len(words[i])):
                if words[i][j].upper() not in shortCut:
                    shortCut.append(words[i][j].upper())
                    words[i] = words[i][:j] + '['+words[i][j]+']'+words[i][j+1:]
                    Flag=True
                    print(' '.join(words))
                    break
            if Flag: break
    if not Flag:
        print(' '.join(words))

        