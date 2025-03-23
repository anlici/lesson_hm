import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import { client } from './app.service.mjs'
import fs from 'fs/promises'
const inputFilePath = './data/posts_with_embeddings.json'

const data = await fs.readFile(inputFilePath, 'utf8');
const posts = JSON.parse(data);

const app = new Koa();
const router = new Router();
const port = 3002;

app.use(cors());
app.use(bodyParser());

// 显示调用路由
app.use(router.routes());
app.use(router.allowedMethods());

// 显示监听
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


function cosineSimilarity(a, b) {
  if (a.length !== b.length) {
      throw new Error('向量长度不匹配');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

router.post('/search', async (ctx) => {
  // ctx.body = { status: 200, data: posts } // 测试
  const {keyword} = ctx.request.body; // 从请求体中获取关键字
  console.log(keyword);
  const response = await client.embeddings.create({
    model: 'text-embedding-ada-002',
    input: keyword,
  })
  const {embedding} = response.data[0]; // 获取向量嵌入
  const results = posts.map(item => ({
    ...item,
    similarity: cosineSimilarity(embedding,item.embedding)
  }))
  .sort((a, b) => b.similarity - a.similarity)
  .slice(0,3) // 前三个最相似
  .map((item,index) => ({
    id: index,
    title: `${index + 1}.${item.title}, ${item.category}`
  }))

  ctx.body = {
    status: 200,
    data: results
  }
})