/**
 * DOMContentLoaded html节点，
 * dom树ready之后，onLoad事件之前执行
 * 
 */
// dom树ready
document.addEventListener('DOMContentLoaded',() => {
    // console.log('DOMContentLoaded')
    const backToTopButton = document.getElementById('back-to-top');
    const chatContainer = document.getElementById('chat-log');

    chatLogElement.addEventListener('scroll',() => {
        if(chatLogElement.scrollTop > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }

    })
    // 点击回到顶部
    backToTopButton.addEventListener('click',() => {
        chatLogElement.scrollTop({
            top: 0,
            behavior: 'smooth'
        })
    })

})
// 页面加载完成
window.addEventListener('load',() => {
    console.log('load')
})