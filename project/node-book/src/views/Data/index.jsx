// src/views/Data/index.jsx
import React, { useState } from 'react';
import { Input, Button, List } from 'zarm'; // 使用 Zarm 组件库
import { fetchAIRecommendations } from '@/api'; // 假设您有一个 API 函数来获取推荐

const DataView = () => {
  const [searchField, setSearchField] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchField) return;

    setLoading(true);
    try {
      const response = await fetchAIRecommendations(searchField);
      setRecommendations(response.data); // 假设返回的数据格式是 { data: [...] }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>AI 搜索推荐</h2>
      <Input
        placeholder="请输入查询内容"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <Button 
        theme="primary" 
        onClick={handleSearch} 
        loading={loading}
      >
        搜索
      </Button>
      <List
        dataSource={recommendations}
        renderItem={(item) => (
          <List.Item>{item.title}</List.Item>
        )}
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};

export default DataView;