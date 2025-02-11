/** DOM 树ready 之后 onLoad 晚了， DOMContentLoaded html节点
 *  事件监听
 *  请求....
 * 不出问题， 最快的时机（onLoad 早）
 */
// 配置参数，最大显示 50条记录
const MESSAGE_LIMIT = 50;
document.addEventListener('DOMContentLoaded', function() {
  // console.log('DOMContentLoaded')
  const backToTopButton = document.getElementById('back-to-top');
  const chatLogElement = document.getElementById('chat-log');
  const messageInput = document.getElementById('message');
  const loadingIndicator = document.querySelector('.loading-indicator');
  
  // scrollTop 
  chatLogElement.addEventListener('scroll', () => {
    if (chatLogElement.scrollTop > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }) 
  // 回到顶部
  backToTopButton.addEventListener('click', () => {
    chatLogElement.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    })
  })
  // 打字机效果
  const  typeMessage = (bubble, content, callback) => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < content.length) {
        bubble.textContent += content.charAt(index++);
      } else {
        // 严谨
        clearInterval(intervalId)
        if (typeof callback === 'function') {
          callback()
        }
      }
    }, 50)
  }
   // 获取本地存储的聊天记录
  const saveChatLog = (role, content) => {
   // parse 字符串转成对象
    const chatLog = JSON.parse(localStorage.getItem('chatLog') )|| [];
    chatLog.push({
      role,
      content
    })
    // stringify 对象转成字符串
    localStorage.setItem('chatLog', JSON.stringify(chatLog));
  }
  // 添加消息 chat-log
  const appendMessage = (role, content,type='save') => {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message', role); 

    const bubble = document.createElement('div');
    bubble.classList.add('bubble', `${role}-bubble`);
    // 复制按钮
    const addCopyButton = (messageWrapper, content) => {
      const copyButton = document.createElement('button');
      copyButton.innerHTML = '<i class="fas fa-copy"></i>'
      copyButton.classList.add('copy-button');

      copyButton.addEventListener('click',() => {
        // BOM browser object model 浏览器对象模型
        // 向剪贴板 写入内容
        navigator.clipboard.writeText(content)
          .then(() => {
            alert('复制成功！');
          }).catch(err => {
            alert('复制失败！');
          })
      })
      // 添加到消息包装器
      messageWrapper.appendChild(copyButton);

    }
    if (role === 'assistant') {
      // 流式输出
      typeMessage(
        bubble,
        content, 
        ()=> addCopyButton(messageWrapper, content)
      )
    } else {
      bubble.textContent = content;
      messageWrapper.appendChild(bubble);
      
    }
    messageWrapper.appendChild(bubble);
    chatLogElement.appendChild(messageWrapper);
    chatLogElement.scrollTop = chatLogElement.scrollHeight;
    
    // bug 修复
    if(type === 'save') {
      saveChatLog(role,content);
    }
    
  }
  // 发送消息 调用接口
  const sendMessage = (message) => {
    // fetch promise 的实例
    return fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {"role": "user", "content": message}
        ],
        temperature: 0.7
      })
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data, '/////')
      return data.message
    })
    // 链式调用
   
  }

  // 显示加载中
  const showLoadingIndicator = () => {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }
  }
  // 隐藏加载中
  const hideLoadingIndicator = () => {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
  }

  // 发送消息
  document.querySelector('.send-icon').addEventListener('click', async () => {
    const messageText = messageInput.value.trim();

    if (messageText) {
      appendMessage('user', messageText); // 封装 
      messageInput.value = '';
      // llm 接口调用
      try {
        showLoadingIndicator();
        // await 返回promise的耗时任务
        const assistantMessage = await sendMessage(messageText)
        hideLoadingIndicator();
        appendMessage('assistant', assistantMessage);
      } catch(error) {
        console.error('发送消息时出错:', error)
        appendMessage('assistant', '抱歉，我遇到了一个问题，无法回复。')
      }
    }

  })
  // enter 发送消息
  messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) { // 回车， 并且没有同时按下shift 
      event.preventDefault(); // 阻止默认行为
      document.querySelector('.send-icon').click(); // 触发点击事件
    }
  })

  // 对话历史加载
 const loadChatLog = () => {
  const chatLog = JSON.parse(localStorage.getItem('chatLog')) || [];
  // 反向遍历
  chatLog.slice( - MESSAGE_LIMIT ).forEach(
    ({role, content}) => {appendMessage(role, content,'init');
 })
 }
 const main = () => {
  loadChatLog();
 }
 main();
})
 /* 所有的资源加载完了 */
// window.addEventListener('load', function(event) {
//   // 当所有资源（包括样式表、图片等）加载完毕后执行的代码
//   // console.log('All resources finished loading');
// });