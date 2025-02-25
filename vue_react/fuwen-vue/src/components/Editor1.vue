<template>
    <div class="editor">
        <div class="editor-toolbar">
            <button @click="format('bold')">加粗</button>
            <button @click="format('italic')">斜体</button>
            <button @click="format('underline')">下划线</button>
            <button @click="format('justifyLeft')">左对齐</button>
            <button @click="format('justifyCenter')">居中</button>
            <button @click="format('justifyRight')">右对齐</button>
        </div>    
        <div 
            class="editor-container" 
            contenteditable="true"
            @input="handleInput"
            ref="editorRef"
        ></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue';

const props = defineProps<{
    modelValue: string
}>();

const emit = defineEmits(['update:modelValue']);
const editorRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (editorRef.value) {
        editorRef.value.innerHTML = props.modelValue;
    }
});

const handleInput = () => {
    emit('update:modelValue', editorRef.value?.innerHTML || '');
};

const format = (cmd: string) => {
    // document.execCommand(cmd, false);
    // handleInput();
    // 第二种 使用exceCommand + getSelection(灵活处理)
    // 对齐方式使用 execCommand 作用整个段落
    if (cmd === 'justifyLeft' || cmd === 'justifyCenter' || cmd === 'justifyRight') {
        document.execCommand(cmd, false);
        handleInput();
        return;
    }

    // 1.获取选中内容
    const selection = window.getSelection();
    // 2.没有选中的直接返回
    if (!selection || selection.rangeCount === 0) {
        return;
    }
    // 3.获取选中内容
    const range = selection.getRangeAt(0);
    // 4.不同命令，创建不同标签，不同样式（对齐特殊）
    let wrapper;
    switch(cmd) {
        case 'bold':
            wrapper = document.createElement('strong');
            break;
        case 'italic':
            wrapper = document.createElement('em');
            break;
        case 'underline':
            wrapper = document.createElement('u');
            break;
    }
    // 5.把选中内容提取
    const content = range.extractContents();
    // 6.放入新标签
    wrapper?.appendChild(content);
    // 7.包装好的内容替换到选中内容中
    range.insertNode(wrapper);
    // 8.更新内容
    handleInput();

};
</script>

<style scoped>
.editor {
    border: 1px solid #ccc;
    border-radius: 4px;
}

.editor-toolbar {
    padding: 8px;
    border-bottom: 1px solid #eee;
}

.editor-toolbar button {
    margin-right: 8px;
    padding: 4px 8px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
}

.editor-toolbar button:hover {
    background: #f5f5f5;
}

.editor-container {
    padding: 12px;
    min-height: 200px;
    outline: none;
}
</style>