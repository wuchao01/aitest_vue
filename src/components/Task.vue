<template>
    <div>
        <template>
            <v-app-bar dark dense>
            <v-toolbar-title style="width:100px">AITEST</v-toolbar-title>
            <!-- 简写:value标识value使用v-bind标签使0这个常量值数据绑定后变为变量值 -->
            <v-tabs :value="1" >
                <v-tab @click="$router.push({name:'Case'})">用例管理</v-tab>
                <v-tab @click="$router.push({name:'Task'})">任务管理</v-tab>
                <v-tab @click="$router.push({name:'Jenkins'})">Jenkins管理</v-tab>
                <v-tab @click="$router.push({name:'Report'})">报告管理</v-tab>
            </v-tabs>
            </v-app-bar>
        </template>
        Task
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        
    },
}
</script>

<style scoped>

</style>