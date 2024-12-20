# 解释器 指定输出格式
from langchain.output_parsers import ResponseSchema
from langchain.output_parsers import StructuredOutputParser
from langchain.prompts import ChatPromptTemplate # 
import openai 
import os

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv())  # read local .env file
openai.api_key = os.environ['OPENAI_API_KEY']

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message["content"]


from langchain.chat_models import ChatOpenAI
chat = ChatOpenAI(temperature=0) # 默认0.7

# 定义客户评论
customer_review = """
This leaf blower is pretty amazing. It has four settings: candle blower, gentle breeze, windy city, and tornado. \
It arrived in two days, just in time for my wife's \
anniversary present. \
I think my wife liked it so much she was speechless. \
So far I've been the only one using it, and I've been \
using it every other morning to clear the leaves on our lawn. \
It's slightly more expensive than the other leaf blowers out there, but I think it's worth it for the extra features.
"""

# 模板
review_template = """
For the following text, extract the following information:

gift: Was the item purchased as a gift for someone else? Answer: Yes
delivery_days: How many days did it take for the product to arrive? Answer: 2
price_value: Extract any sentences about the value or price. Answer: "It's slightly more expensive than the other leaf blowers out there, but I think it's worth it for the extra features."

Format the output as JSON with the following keys:
- gift
- delivery_days
- price_value

text: {text}
"""
# 创建一个ChatPromptTemplate实例
prompt = ChatPromptTemplate.from_template(review_template)

# 格式化提示
messages = prompt.format_messages(text=customer_review)

# 实例化ChatOpenAI模型，注意这里使用的是'temperature'而不是'temerature'
chat = ChatOpenAI(temperature=0)

# 获取响应
response = chat(messages)

# 打印格式化后的消息内容
print(response.content)

# 定义响应模式
response_schemas = [
    ResponseSchema(name="gift", description="是否作为礼物购买"),
    ResponseSchema(name="delivery_days", description="产品到达所需天数"),
    ResponseSchema(name="price_value", description="关于价值或价格的句子")
]

# 创建结构化输出解析器 
output_parser = StructuredOutputParser.from_response_schemas(response_schemas)

# 解析模型的输出为JSON格式
try:
    parsed_output = output_parser.parse(response.content) #parse解析 
    print("Parsed Output:", parsed_output)
except Exception as e:
    print("Failed to parse the model output:", e)