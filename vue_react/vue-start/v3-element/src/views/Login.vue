<template>
    <div>
       <el-form 
            style="position: absolute; left: 45%;"
            ref="formRef"
            :model="form"
            label-width="auto"
            :rules="rules"
        >
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" size="small"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" size="small" autocomplete="false">
                <el-input v-model="form.password" type="password" size="small"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="reset">重置</el-button>
                <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
            </el-form-item>
       </el-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {login} from '../api/'
const formRef = ref(null)

const form = reactive({
    username: '',
    password: ''
})

const loading = ref(false)

const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ]
}
// bfs ,发送token 在浏览器缓存？
// 后面请求，都携带token这个凭证；服务器收到请求，验证token是否正确
const onSubmit = async () => {
    loading.value = true
    // 模版中直接访问，脚本.value
    await formRef.value.validate((valid) => {
        if (valid) {
            // 发送请求
            login(form)
            console.log('提交成功');
        } else {
            console.log('提交失败');
        }
        loading.value = false
    })
}

const reset = () => {
    formRef.value.resetFields()
}

console.log('我是home');
</script>

<style lang="scss" scoped>

</style>