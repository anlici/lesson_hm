import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const chatApi = async (message) => {
  try {
    const response = await axios.post('http://localhost:3000/chatai', message, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data; // 假设 response.data 结构为 { message: 'response' }
  } catch (error) {
    console.error('Error in chatApi:', error);
    throw error;
  }
};

const App = () => {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedConversation = localStorage.getItem('conversation');
    if (storedConversation) {
      setConversation(JSON.parse(storedConversation));
    }
  }, []);

  const askQuestion = async () => {
    if (!question.trim()) {
      return;
    }

    setConversation((prevConversation) => [
      ...prevConversation,
      {
        question: question,
        answer: '等待回答...'
      }
    ]);

    setLoading(true);

    try {
      const message = `你是一个聪明的机器人, 我想知道${question}`;
      const response = await chatApi({ message });
      setConversation((prevConversation) => {
        const newConversation = [...prevConversation];
        newConversation[newConversation.length - 1].answer = response.message; // 假设 response 结构为 { message: 'response' }
        localStorage.setItem('conversation', JSON.stringify(newConversation));
        return newConversation;
      });
    } catch (error) {
      console.warn(error);
      setConversation((prevConversation) => {
        const newConversation = [...prevConversation];
        newConversation[newConversation.length - 1].answer = '网络错误，请稍后再试！';
        return newConversation;
      });
    } finally {
      setLoading(false);
      setQuestion('');
    }
  };

  return (
    <div className="chat-container" style={{ position: 'relative' }}>
      <p className="chat-title">我是ollama + deepseek 本地大模型</p>
      {
        conversation.map((item, index) => (
          <div key={index} className="chat-message">
            <div className="chat-question">
              <span className="el-tag el0tag--large">me:</span> {item.question}
            </div>
            <div className="chat-answer">
              {item.answer}
              <span className="el-tag el-tag--large">ai:</span>
            </div>
          </div>
        ))
      }
      <div className="chat-input">
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && askQuestion()}
          style={{ width: '80%' }} 
        />
        <button onClick={askQuestion}>提交</button>
      </div>
      { loading && (
        <div className="loading-container">
          <p>加载中...</p>
        </div>
      )}
    </div>
  );
};

export default App;