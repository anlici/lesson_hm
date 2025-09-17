// LRU缓存实现 使用map 插入每次访问时间顺序，最近访问放在最前，达到上限删除最老数据
// map 保持顺序 keys()获取第一个key ，size 获取大小
// 不用考虑出现次数，只需要`最近访问时间` 
// lru 前端（图片缓存最近查看，api接口响应，最近访问页面）浏览器页面缓存，操作系统页面置换
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) { // 存在先delete 在set插入
      return null;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  set(key, value) {// 存在delete，不在但是已满，删map 第一个
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const [firstKey] = this.cache.keys();
      // 最求性能好 迭代器
      // this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

