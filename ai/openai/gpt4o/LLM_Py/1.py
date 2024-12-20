import openai 
import os

from dotenv import load_dotenv,find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file
openai.api_key = os.environ['OPENAI_API_KEY']
def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message["content"]
# 辅助函数
get_completion("你好,你叫什么名字？")

from langchain.chat_models import ChatOpenAI
chat = ChatOpenAI(temperature=0) # 默认0.7

# 导入提示模版
from langchain.prompts import ChatPromptTemplate
# 导入提示模版 ,输入有style和text
template_string = """Translate the text \
that is delimited by triple backticks \
into a style that is {style}. \
text: ```{text}``` \
"""
prompt_template = ChatPromptTemplate.from_template(template_string)

# 查看输入变量style,text
prompt_template.messages[0].prompt.input_variables

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
# 下次只要修改style,text即可
customer_messages = prompt_template.format_messages(
                    style=customer_style,       
                    text=customer_email)

# 调用chat模型
customer_response = chat(customer_messages)   
print(customer_response.content) #转换结果
