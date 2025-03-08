import { useState, useEffect } from 'react';
import { Table } from 'antd';

const App = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

  const fetchData = async (params) => {
    const response = await fetch(`your-api-url?current=${params.current}&pageSize=${params.pageSize}`);
    const result = await response.json();
    setData(result.data);
    setPagination({
      ...params,
      total: result.total, // 后端返回的总数据量
    });
  };

  useEffect(() => {
    fetchData(pagination);
  }, []);

  const handleTableChange = (newPagination) => {
    fetchData({
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    });
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.key}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
};