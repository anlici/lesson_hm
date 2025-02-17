<template>
    <div class="login-view">
        <div class="login-card">
            <div class="title" style="height: 70px; line-height: 60px;">
                <div style="display: flex;">
                    <van-image
                        width="160"
                        height="60"
                        fit="fill"
                    />
                    <div style="font-size: 28px; margin-left: 10px; line-height: 60px; font-weight: bold; font-style: italic;">
                        星光不负赶路人
                    </div>
                </div>
            </div>
            <van-form
                :model="ruleForm"
                :rules="rules"
                ref="loginRuleForm"
                @submit="submitForm"
                label-width="100px"
                label-position="left"
                class="demo-ruleForm"
            />
        </div>

    </div>
</template>

<script setup name="Login">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
const router = useRouter();
const ruleForm = reactive({
    username: '',
    password: '',
});
// 验证规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
    ],
};
// 
const submitForm = () => {
//    loginRuleForm.value.validate().then(() => {
//          this.$postRequest("/user/toLogin", ruleForm).then(res => {
//             console.log(res);
//             if (res.data.status === 200) {
//                 Toast.success("登录成功！");
//                 this.$store.commit("updateLoginUser", res.data.obj);

//                 setTimeout(() => {
//                 router.push("/")
//                 }, 500)
//             } else {
//                 Toast.fail(res.data.msg);
//             }
//          }).catch(() => {
//             console.log("登录失败");
            
//          });

//    })
console.log('登入验证，是否重定向');

};
const updateCaptcha = () => {
      Toast.success("更新验证码");
      captchaSrc.value = `/api/user/getCaptcha?time=${new Date().getTime()}`;
};

</script>

<style scoped>
.login-view {
    position: relative;
    background-image: url('~@/assets/images/common/login_bg.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
  }
</style>