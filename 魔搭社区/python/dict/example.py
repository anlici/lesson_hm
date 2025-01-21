def Merge(dict1, dict2):
  # 使用 ** 操作符将字典 dict1 和 dict2 合并成一个新的字典
  res = {**dict1, **dict2}

  return res
# js 对象字面量    python 字典 key:value 键值对

dict1 = {"name": "郭大侠", "age": 25}
dict2 = {"name": "小龙女", "city": "地下城"}
dict3 = Merge(dict1, dict2)
print(dict3)