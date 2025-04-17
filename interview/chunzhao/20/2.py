# res，ans 结果，cnt tot 计算，x y 临时变量,nums 数组
# 保留字，False， and or is 
# str[1:5:2] 索引，2 step 步长，-1 倒序，-2 倒数第二个，-3 倒数第三个
# str * 2 重复两遍
# import sys # 引入系统模块
# 自定义，sep print(a,b,c,sep=",") 
# 格式化输出，f"{a}" f"{a:0>5}"
# format() 
# 数据类型，int float str list tuple set无序不重复 dict键值对
# 可变参数，* 列表，**字典

# 快读模版
import sys
input = lambda: sys.stdin.readline().strip() 
x = lambda a: a+1
print(x(5))
sorted([8,2,1]) # 升序,
# sorted([8,2,1],key = len,reverse=True) # 降序，按照内置len 长度排序
nums = [1,2,3,4,5]
nums.sort(reverse=True) # 降序
# a,b = sorted(nums,key = lambda x:x%2) # 奇偶排序 
# print(f"{a} {b}")

odds = [x for x in nums if x%2 != 0] # 奇数
evens = [x for x in nums if x%2 == 0]

a = odds[-1] if odds else -1

a,b,c = map(int,input().split()) 
n = int(input())
lst = [int(input()) for _ in range(n)] 
m = int(input())
matric = [list(map(int,input().split())) for _ in range(m)]

squares = [i**2 for i in range(1,11)]
squares = [i**2 for i in range(1,11) if i%2==0] # 偶数
num = [[0 for _ in range(n)] for _ in range]
fib = [0,1]
[fib.append(fib[-1]+fib[-2]) for _ in range(n-2)]
flat = [x for row in matric for x in row] # 展平,二维变成1维

# 快速统计每个字符出现次数
s = input()
char_count = {char:s.count(char) for char in s}

# 双端队列，左右都可以删除，插入 
from collections import deque as dq
q = dq([1,2,3]) 
q.append(4) 
stack = []

# 判空 if not q:
# 埃氏筛 素数
import math
prime = []
is_prime = [True] * (n+1)
is_prime[0] = is_prime[1] = False

for i in range(2,int(math.sqrt(n))+1):
    if is_prime[i]:
        for j in range(i*i,n+1,i):
            is_prime[j] = False

for i in range(2,n+1):
    if is_prime[i]:
        prime.append(i)


prime = [i for i in range(n+1) if is_prime[i]]

# 波兰表达式，逆波兰表达式：后缀
def dfs(tokens):
    stack = []
    ops = {"+":lambda x,y:x+y,"-":lambda x,y:x-y,"*":lambda x,y:x*y,
           "/":lambda x,y:int(x/y)}

    for t in tokens:
        if t in ops:
            x,y = stack.pop(),stack.pop()
            stack.append(ops[t](x,y))
        else:
            stack.append(int(t))
    return stack.pop()

# hi,ki 排序身高 c插入
def dfs(people):
    people.sort(key = lambda x:(-x[0],x[1]))

    res = []
    for i,p in enumerate(people,0):
        h,k = p[0],p[1]
        if k == i:
            res.append(p)
        elif k < i:
            res.insert(k,p)
    return res
names = ["Alice","Bob","Cindy","David","Eve","Fred","Gary"]
ages = [1,2,3,4,5,6,7]

# for i,(name,age) in enumerate(zip(names,ages),0)

# 分糖果
while True:
    nums1 = nums.copy()
    for i,x in enumerate(nums):
        nums1[i] = (x+num[(i+1) % n ]) // 2
        if nums1[i] & 1:
            nums1[i] += 1
    nums = nums1
    if len(set(nums)) == 1:
        break

ans = 0
def dfs(depth,n,m):
    global ans
    if depth == 7:
        if n == 0 and m == 0:
            ans += 1
        return
    for i in range(n+1):
        for j in range(m+1):
            if 2 <= i+j <= 5 and i <= n and i <= m:
                dfs(depth+1,n-i,m-j)

dfs(0,n,m)
