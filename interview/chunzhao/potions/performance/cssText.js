// 批量处理重绘重排
const el = document.getElementById('app')
el.classList.add('active') // 切换类名，一次性添加
el.cssText = 'color: red;height: 100px' // 添加样式