<!--组件-->
<template>
    <div class="login_form">
        <h3>登录</h3>
        <v-text-field label="用户名" v-model="username"></v-text-field>
        <v-text-field label="密码"  v-model="password" type="password"></v-text-field>
        <!-- 调用登录接口 -->
        <v-btn color="primary" @click="login()">登录</v-btn>
        <v-btn color="primary" @click="signUp()" text>注册</v-btn>
    </div>
</template>

<!--代码-->
<script>
export default {
    data() {
        // 该数据用于click数据绑定
        return {
            username:'',
            password:''
        }
    },
    methods: {
        // 跳转注册页逻辑
        signUp() {
            console.log("注册")
            this.$router.push({name:'SignUp'})
        },
        login(){
            let post_data = {
                // 参数必须与服务端入参一致，大小写敏感
                userName:this.username,
                password:this.password,
            }
            this.$api.user.signIn(post_data).then(res=>{
                console.log(res)
                //把token和username存储到浏览器本地
                localStorage.setItem('token',res.data.data.token)
                localStorage.setItem('username',this.username)
                this.$router.push({name:'Case'})
            })
        }

    },
}
</script>

<!--样式-->
<style scoped>
    .login_form {
        /* 宽度 */
        width: 500px;
        /* 居中，该属性为外边距 */
        margin: 0 auto;
        /* 文本居中 */
        text-align: center;
    }

</style>