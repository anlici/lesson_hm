## ai

### ai幻觉
- 通过
- 使用transform.js ,使用外部知识库，要求

- rag 将
- 聊天机器人
  知识库（隐私），context（提示词模版）+用户问题

- rag 减少幻觉，减少模型更新推理
- 文档进行分割，文本分块
  embedding model 将高维转成低微
  （不同模型生成向量模型可能不同）
  向量嵌入
- 在向量空间查找最近的向量
- vector database 向量数据库 
  非结构化数据，图像，声音等，根据语义理解，
  对数据进行检索具有包容性
  结构化一般表格存储，明确数据类型（键值对

- 检索retrieve 
  查询向量query 查询 最近邻
  相似度搜索：欧式距离，余弦相似度（常用），dot product 
    两向量夹角：余弦值，余弦相似度，自然语言相识度

- top k chunks 检索 排序
  re-rank
- 提示词模版
  context+user question
  检索+提示词模版 增强模型理解

- 找最近
- 