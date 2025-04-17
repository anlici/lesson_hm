va = int(input())

print(f"{va}") # 格式化输出
print(f"{va:0>5}") # 
print(va, end="")

# int float str list tuple dict set
# number string tuple 不可变
# list dictionary set（集合） 可变

def f(a, b):
    return a + b

# 默认参
def f(a, b, c=0):
    return a + b + c
# 接收 未知参数 可变参数
def f(*args):
    print(args)
    print(type(args))
    print()

# 关键字参数
def f(**kwargs):
    print(kwargs)
    print(type(kwargs))
    print()
    print(kwargs["a"])
    print(kwargs["b"])

# 快读模板
import sys
input = lambda: sys.stdin.readline().strip()

if __name__ == "__main__":
    n = int(input())
    for i in range(n):
        print(i)

# lambda 参数: 函数体
x = lambda a, b: a + b
print(x(5, 6))
get_mid = lambda nums:nums[len(nums)//2]
print(get_mid([1, 2, 3, 4, 5])) # 3 中位数

# 内置排序 sorted(iterable, key=None, reverse=False)
# 可迭代，key 排序规则，reverse 是否翻转，返回新数组
nums = [1, 2, 3, 4, 5]
# 降序
sorted(nums,reverse=True)
# 按照字符串排序
sorted(nums,key=lambda x:x[::-1])

sorted(nums,key=len) # 长度排序

# 列表 sort 原地排序 
nums.sort(key=lambda x:x[::-1]) # 降序
# 按照第二个元素排序
nums.sort(key=lambda x:x[1])

# 单行多个整数
a,b,c = map(int,input().split()) # 输入 1 2 3 数字
# 多行多个整数
lst = [int(input()) for _ in range(n)] # n 行数字 


# 矩阵输入
n, m = map(int, input().split())
matrix = [list(map(int,input().split()) for _ in range(n)) ]

