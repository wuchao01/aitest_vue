<template>
    <div>
        <template>
            <v-app-bar dark dense>
            <v-toolbar-title style="width:100px">AITEST</v-toolbar-title>
            <!-- 简写:value标识value使用v-bind标签使0这个常量值数据绑定后变为变量值 -->
            <v-tabs :value="2" >
                <v-tab @click="$router.push({name:'Case'})">用例管理</v-tab>
                <v-tab @click="$router.push({name:'Task'})">任务管理</v-tab>
                <v-tab @click="$router.push({name:'Jenkins'})">Jenkins管理</v-tab>
                <v-tab @click="$router.push({name:'Report'})">报告管理</v-tab>
            </v-tabs>
            </v-app-bar>
        </template>
        
        <!-- 对话框 -->
        <v-dialog v-model="addDialog" max-width="500px">
            <v-card>
                <v-card-title>添加Jenkins</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field label="Jenkins名称" v-model="addItem.name">Jenkins名称</v-text-field>
                        <v-text-field label="测试命令标识" v-model="addItem.testCommand"></v-text-field>
                        <v-text-field label="Jenkins地址" v-model="addItem.url"></v-text-field>
                        <v-text-field label="Jenkins用户名" v-model="addItem.userName"></v-text-field>
                        <v-text-field label="Jenkins密码" v-model="addItem.passWord"></v-text-field>
                        <v-select :items="items" label="测试用例类型" v-model="addItem.commandRunCaseType"></v-select>
                        <v-text-field label="测试用例后缀名" v-model="addItem.commandRunCasSuffix"></v-text-field>
                        <v-text-field label="备注" v-model="addItem.remark"></v-text-field>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- @click="addDialog = false"即可实现弹框取消效果 -->
                    <v-btn color="blue darken-1" text @click="addDialog = false">取消</v-btn>
                    <v-btn color="blue darken-1" @click="addCase()">确定</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-btn color="light-blue" @click="addDialog = true">添加Jenkins</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addDialog:false,
            addItem:[
                {
                    name:'',
                    testCommand:'',
                    url:'',
                    userName:'',
                    passWord:'',
                    commandRunCaseType:'',
                    commandRunCasSuffix:'',
                    remark:''
                }
            ],
            items:['文本','文件'],
            tableData:[],
        }
    },
    created(){
        let post_data = {
            pageNum:1,
            pageSize:10
        }
        this.$api.jenkins.getJenkinsList(post_data).then(res=>{
                console.log(res)
                this.tableData = res.data.data.data
            })
    },
    methods: {
        
    },
}
</script>

<style scoped>

</style>