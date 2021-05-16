import axios from './http'

const jenkins = {
    getJenkinsList(params){
        return axios.get('/jenkins/list',params)
    }
}
export default jenkins