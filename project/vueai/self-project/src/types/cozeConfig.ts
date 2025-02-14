// 或者使用type类型
// export type ChatHistoryItem = {
//     role: string;
//     type?: string;
//     answer?: string;
// }

// 限定传入coze的配置信息

export interface ChatHistoryItem {
    role: string;
    type?: string;
    answer?: string;
}

export interface FetchDataRequest {
    bot_id: string;
    conversation_id: string;
    user: string;
    query: string;
    stream: boolean;
    chat_history: ChatHistoryItem[];
}

export interface FetchDataResponse {
    // 这里应该根据实际的API响应数据结构来定义
    // 示例:
    data: any;
}