<template>
    <div class="login">
        <el-form :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="用户名">
                <el-input v-model="form.userName" placeholder="请输入用户名"/>
            </el-form-item>
                <el-form-item label="密码">
                    <el-input 
                    v-model="form.passWord" 
                    type="password"
                    placeholder="请输入密码"
                    show-password />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
        </el-form>

    </div>
</template>
<script lang="ts" setup>
import { reactive,getCurrentInstance } from 'vue';

import { useRouter } from 'vue-router'
const router = useRouter()
const form = reactive({
    userName: '',
    passWord: ''
})

// }
const onSubmit = () => {
        console.log(form);
        //跳转到home页面
        router.push('/')
    }
</script>
<style>
@media (min-width: 1024px) {
    .login {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>