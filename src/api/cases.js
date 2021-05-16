import axios from './http'

const cases = {
    getList(params){
        return axios.get('/testCase/list',params)
    },
    createCaseByText(params){
        return axios.post('/testCase/text',params)
    },
    createCaseByFile(params){
        return axios.post('/testCase/list',params)
    },
    editCase(params){
        return axios.put('/testCase/',params)
    },
    deleteCase(params){
        return axios.delete('/testCase/',params)
    }
}
export default cases