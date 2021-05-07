<!--组件-->
<<template>
    <div class="login_form">
        <h3>登录</h3>
        <v-text-field label="用户名"></v-text-field>
        <v-text-field label="密码" type="password"></v-text-field>
        <v-btn color="primary">登录</v-btn>
        <v-btn color="primary" @click="signUp()" text>注册</v-btn>
    </div>
</template>

<!--代码-->
<<script>
export default {
    methods: {
        // 跳转注册页逻辑
        signUp(){
            console.log("注册")
            this.$router.push({name:'SignUp'})
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