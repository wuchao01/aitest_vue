<template>
    <div>
        <template>
            <v-app-bar dark dense>
            <v-toolbar-title style="width:100px">AITEST</v-toolbar-title>
            <!-- 简写:value标识value使用v-bind标签使0这个常量值数据绑定后变为变量值 -->
            <v-tabs :value="0" >
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
                <v-card-title>添加测试用例</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field label="用例名称" v-model="addItem.name">测试用例</v-text-field>
                        <v-select :items="selectItem" label="测试类型" v-model="addItem.type"></v-select>
                        <!-- 输入框 -->
                        <v-textarea label="用例数据" v-model="addItem.data"></v-textarea>
                        <v-text-field label="remark" v-model="addItem.remark">备注</v-text-field>
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

        <v-dialog v-model="editDialog" max-width="500px">
            <v-card>
                <v-card-title>修改测试用例</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field label="用例名称" v-model="editItem.caseName">测试用例</v-text-field>
                        <!-- 输入框 -->
                        <v-textarea label="用例数据" v-model="editItem.caseData"></v-textarea>
                        <!-- <v-text-field label="remark" v-model="addItem.remark">备注</v-text-field> -->
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- @click="addDialog = false"即可实现弹框取消效果 -->
                    <v-btn color="blue darken-1" text @click="editDialog = false">取消</v-btn>
                    <v-btn color="blue darken-1" @click="confirmEdit()">确定</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-btn color="light-blue" class="btn" @click="addDialog = true">添加用例</v-btn>
        <v-btn color="cyan" class="btn">生成任务</v-btn>

        <template>
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            item-key="id"
            show-select
            class="elevation-1"
        >
        <template v-slot:[`item.operate`] = "{item}">
            <v-btn
            color="parimary"
            text
            small @click="editCase(item)"
            >编辑</v-btn>
            <v-btn
            color="error"
            text
            small @click="deleteCase(item)"
            >删除</v-btn>
        </template>
        </v-data-table>
    
        </template>       
    </div>
</template>

<script>
export default {
    data() {
        return {
            addDialog:false,
            editDialog:false,
            addItem:[
                {
                    name:'',
                    type:'',
                    data:'',
                    remark:''
                }
            ],
            editItem:{},
            selectItem:['文本','文件'],
            selected:[],
            headers:[
                {
                    text:'id',
                    value:'id'
                },
                {
                    text:'用例名称',
                    value:'caseName'
                },
                {
                    text:'用例数据',
                    value:'caseData'
                },
                {
                    text:'备注',
                    value:'remark'
                },
                {
                    text:'操作',
                    value:'operate',
                    align:'center'
                },
            ],
            desserts:[],
        }
    },
    created(){
        let post_data = {
            pageNum:1,
            pageSize:10
        }
        this.$api.cases.getList(post_data).then(res=>{
                console.log(res)
                this.desserts = res.data.data.data
            })
    },
    methods: {
        addCase(){
            let data_post={
                caseName:this.addItem.name,
                caseData:this.addItem.data,
                remark:this.addItem.remark
            }
            this.$api.cases.createCaseByText(data_post).then(res=>{
                console.log(res)
                this.addDialog = false
            })
        },
        editCase(item){
            this.editDialog = true
            this.editItem = item
        },
        confirmEdit(){
            let params = {
                caseData: this.editItem.caseData,
                caseName: this.editItem.caseName,
                id:this.editItem.id,
                remark:this.editItem.remark
            }
            this.$api.cases.editCase(params).then(res=>{
                console.log(res)
                this.$notify({
                    title:'成功',
                    message:'编辑成功',
                    type:'success'
                })
                this.editDialog = false
                let post_data = {
                    pageNum:1,
                    pageSize:10
                }
                this.$api.cases.getList(post_data).then(res=>{
                    console.log(res)
                    this.desserts = res.data.data.data
                })
            })
        },
        //todo:添加删除case功能
        deleteCase(item){
            let params = {
                caseId:this.item.id
            }
            this.$api.cases.deleteCase(params).then(res=>{
                console.log(res)
                this.$notify({
                    title:'成功',
                    message:'删除成功',
                    type:'success'
                })
                let post_data = {
                    pageNum:1,
                    pageSize:10
                }
                this.$api.cases.getList(post_data).then(res=>{
                    console.log(res)
                    this.desserts = res.data.data.data
                })
            })
        }
        
    },
}
</script>

<style scoped>
    .btn {
        margin: 10px;
    }
</style>