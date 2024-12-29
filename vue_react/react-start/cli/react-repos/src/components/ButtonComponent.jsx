// // src/ButtonComponent.js
// import React, { useState } from 'react';

// function ButtonComponent({ initialText, onClick }) {
//   const [text, setText] = useState(initialText);

//   const handleClick = () => {
//     // 调用父组件传递的 onClick 函数
//     if (onClick) {
//       onClick();
//     }
//   };

//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   );
// }

import React, { useState } from 'react';
function Parent() {
    const [msg, setMsg] = useState('');

    const getMsg = (msg) => {
        setMsg(msg);
    };

    return (
        <div>
            <h2>父组件状态：{msg}</h2>
            <Son1 getMsg={getMsg} />
            <Son2 msg={msg} />
        </div>
    );
}

function Son1({ getMsg }) {
    const sonMsg = '我是Son1子组件';
    return <button onClick={() => getMsg(sonMsg)}>传递消息</button>;
}

function Son2({ msg }) {
    return <h2>兄弟组件接收到的消息：{msg}</h2>;
}

 export default Parent;

