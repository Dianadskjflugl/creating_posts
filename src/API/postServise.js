import axios from "axios";

export default class PostService {
    static async getAll(limit =10, page = 1) {
        const response = await axios ({
            params: {
                _limit: limit,
                _page: page
            },
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        return response;
    }
    static async getById(id) {
        const response = await axios({
            url: 'https://jsonplaceholder.typicode.com/posts/' + id
        })
        return response;
    }
    static async getCommentsByPostId(id) {
        const response = await axios({
            url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        })
        return response;
    }
}
