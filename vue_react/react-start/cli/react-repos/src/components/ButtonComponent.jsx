// src/ButtonComponent.js
import React, { useState } from 'react';

function ButtonComponent({ initialText, onClick }) {
  const [text, setText] = useState(initialText);

  const handleClick = () => {
    // 调用父组件传递的 onClick 函数
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

export default ButtonComponent;