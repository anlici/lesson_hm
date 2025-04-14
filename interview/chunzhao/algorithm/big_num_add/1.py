def calculate_xor_sum(n, numbers):
    
    total_sum = 0
    for i in range(n):
        for j in range(i + 1, n):
            xor_result = numbers[i] ^ numbers[j]
            total_sum += xor_result * (j - i)
    return total_sum

n = int(input())
numbers = list(map(int, input().split()))

result = calculate_xor_sum(n, numbers)
print(result)