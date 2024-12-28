from langchain.prompts import PromptTemplate
from langchain.document_loaders import PlaywrightURLLoader
from langchain.chains.summarize import load_summarize_chain
from langchain.text_splitter import RecursiveCharacterTextSplitter
from azure_chat_llm import llm

loader = PlaywrightURLLoader(urls=["https://content.jr.jd.com/article/index.html?pageId=708258989"])
data = loader.load()

text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
    model_name="gpt-3.5-turbo",
    allowed_special="all",
    separators=["\n\n", "\n", "。", "，"],
    chunk_size=7000,
    chunk_overlap=0
)

prompt_template = '''
作为一个资深编辑，请针对 >>> 和 <<< 中间的文本写一段摘要。 
>>> {text} <<<
'''
refine_template = '''
作为一个资深编辑，基于已有的一段摘要：{existing_answer}，针对 >>> 和 <<< 中间的文本完善现有的摘要。 
>>> {text} <<<
'''

PROMPT = PromptTemplate(template=prompt_template, input_variables=["text"])
REFINE_PROMPT = PromptTemplate(
    template=refine_template, input_variables=["existing_answer", "text"]
)

chain = load_summarize_chain(llm, chain_type="refine", question_prompt=PROMPT, refine_prompt=REFINE_PROMPT, verbose=False)

docs = text_splitter.split_documents(data)
result = chain.run(docs)
print(result)



