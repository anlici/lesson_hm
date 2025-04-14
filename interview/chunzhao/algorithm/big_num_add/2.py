def max_tree(n,h):
    if n == 0:
        return 0
    
    dp = [0] * n
    for i in range(1,n):
        for j in range(i):
            if h[i] > h[j]:
                dp[i] = max(dp[i],dp[j]+1)
    return max(dp)

n = int(input())
h = list(map(int,input().split()))
print(max_tree(n,h))