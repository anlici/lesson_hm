/**
* @func 就地编辑
 * @params { id, parent 父节点, value 默认值}
 * @author ysw
 * @date 2024-06-12
 */
function EditInPlace(id, parent, value) {
  this.id = id;// 跨函数共享属性
  this.parent = parent || document.body;
  this.value = value || '这个家伙很懒，什么都没有留下';
  this.createElement(this.id);
}
EditInPlace.prototype.createElement = function(id) {
  // console.log(id);
  // 创建容器元素 div ,挂载 id
  // <div id="ep1"></div>
  this.containerElement = document.createElement('div');
  this.containerElement.id = id;
  this.parent.appendChild(this.containerElement);

  this.staticElement = document.createElement('span');
  this.staticElement.innerHTML = this.value;// 静态文本等于value
  this.containerElement.appendChild(this.staticElement);// 将静态文本span添加到id为ep1的div中
  
  console.log(this.containerElement);
  
}