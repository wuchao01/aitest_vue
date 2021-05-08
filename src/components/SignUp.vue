<template>
    <div class="sign_up">
        <h1>注册</h1>
        <v-text-field v-model="username" label="用户名"></v-text-field>
        <v-text-field v-model="password" label="密码" type="password"></v-text-field>
        <v-text-field v-model="email" label="邮箱"></v-text-field>
        <v-btn color="primary" @click="register()">注册</v-btn>
        <v-btn color="primary" text @click="signIn()">去登录</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username:'',
            password:'',
            email:''
        }
    },
    methods: {
        // 跳转回登录页逻辑
        signIn(){
            console.log("登录")
            this.$router.push({name:"SignIn"})
        },
        register(){
            let post_data = {
                // 参数必须与服务端入参一致，大小写敏感
                username:this.username,
                password:this.password,
                email:this.email,
            }
            this.$api.user.signUp(post_data).then(res=>{
                console.log(res)
            })
        }
    },
    
}
</script>

<style scoped>
.sign_up{
        /* 宽度 */
        width: 500px;
        /* 居中，该属性为外边距 */
        margin: 0 auto;
        /* 文本居中 */
        text-align: center;
    }

</style>