/** DOM 树ready 之后 onLoad 晚了， DOMContentLoaded html节点
 *  事件监听
 *  请求....
 * 不出问题， 最快的时机（onLoad 早）
 */
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
  
    backToTopButton.addEventListener('click', () => {
      chatLogElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
    // 添加消息 chat-log
    const appendMessage = (role, content) => {
      const messageWrapper = document.createElement('div');
      messageWrapper.classList.add('message', role); 
  
      const bubble = document.createElement('div');
      bubble.classList.add('bubble', `${role}-bubble`);
      
      if (role === 'assistant') {
  
      } else {
        bubble.textContent = content;
        messageWrapper.appendChild(bubble);
        chatLogElement.scrollTop = chatLogElement.scrollHeight;
      }
      messageWrapper.appendChild(bubble);
      chatLogElement.appendChild(messageWrapper);
  
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
  })

  /* 所有的资源加载完了 */
  // window.addEventListener('load', function(event) {
  //   // 当所有资源（包括样式表、图片等）加载完毕后执行的代码
  //   // console.log('All resources finished loading');
  // });