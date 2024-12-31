# print("hello world")
import openai 
import os
from dotenv import load_dotenv, find_dotenv
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

# 读取本地 .env 文件
_ = load_dotenv(find_dotenv())

# 设置 API Key 和 API Base
openai.api_key = os.environ['OPENAI_API_KEY']
openai.api_base = "https://api.302.ai/v1"

# 打印当前的 API Base 以确认设置
print(f"API Base: {openai.api_base}")

def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    try:
        response = openai.ChatCompletion.create(
            model=model,
            messages=messages,
            temperature=0,
            timeout=30  # 设置超时时间为30秒
        )
        return response.choices[0].message["content"]
    except Exception as e:
        print(f"Error: {e}")
        return None

# 测试调用
print(get_completion("你好,你叫什么名字？"))

# 初始化 ChatOpenAI 并确保它使用了正确的 API Base
chat = ChatOpenAI(temperature=0, api_base=openai.api_base)

# 导入提示模版
template_string = """Translate the text \
that is delimited by triple backticks \
into a style that is {style}. \
text: ```{text}``` \
"""
prompt_template = ChatPromptTemplate.from_template(template_string)

# 查看输入变量style,text
input_variables = prompt_template.messages[0].prompt.input_variables
print(f"Input variables: {input_variables}")

customer_style = """American English \
in a calm and respectful tone
"""
customer_email = """
Arrr, I be fuming that me blender lid \
flew off and splattered me kitchen walls \
with smoothie! And to make matters worse,\
the warranty don't cover the cost of \
cleaning up me kitchen. I need yer help \
right now, matey!
"""

# 格式化输入,列表
customer_messages = prompt_template.format_messages(
                    style=customer_style,       
                    text=customer_email)

# 调用chat模型
try:
    customer_response = chat(customer_messages)   
    print(customer_response.content)  # 转换结果
except Exception as e:
    print(f"Error: {e}")