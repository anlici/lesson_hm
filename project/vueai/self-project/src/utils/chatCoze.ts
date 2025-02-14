
import axios from 'axios';

const url = 'https://api.coze.cn/open_api/v2/chat';
const apiKey = 'pat_KeAhxP5JrR3k1Mxv1lRCMN9PJ1nkZK2jBHIKaqUbCSpFeEtoLbtLpu4Hq6ICci8E';
const botId = '7399128294542688308';

import { FetchDataRequest } from '@/types/cozeConfig.ts'

async function getCozeData(content: string): Promise<any> {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };

    const data: FetchDataRequest = {
        "bot_id": botId,
        "conversation_id": "456",
        "user": "user_1",
        "query": content,
        "stream": false,
        "chat_history": [
            { "role": "user" },
            { "role": "assistant", "type": "answer" }
        ]
    };

    try {
        const response: any = await axios.post(url, data, { headers });

        // console.log(response);

        return response;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
export default getCozeData