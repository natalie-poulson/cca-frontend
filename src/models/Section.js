import axios from 'axios'

const endPoint = 'http://localhost:8000/api/sections'

class SectionModel {
    static all(){
        let request = axios.get(endPoint)
        return request
    }
}

export default SectionModel