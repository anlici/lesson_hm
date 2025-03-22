import OpenAI from "openai/index.mjs";
import 'dotenv/config'
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
})
// 文本嵌入向量
async function getEmbedding(text) {
    const response = await openai.embeddings.create({
        // 文本嵌入
        model: "text-embedding-ada-002", 
        input: text
    })
    return response.data[0].embedding
}
async function main() {
    const embedding1 = await getEmbedding("你好");
    const embedding2 = await getEmbedding("你好ya");
    const embedding3 = await getEmbedding("今晚吃鱼");
    console.log(embedding1,embedding1.length);
    const similarity1 = cosineSimilarity(embedding1, embedding2);
    const similarity2 = cosineSimilarity(embedding1, embedding3);
    console.log(similarity1, similarity2); // 显示度：0.9383760658414636 0.7976974848296556
    
}
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
main();