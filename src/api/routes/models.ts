import _ from 'lodash';

export default {

    prefix: '/v1',

    get: {
        '/models': async () => {
            return {
            "data": [
                {
                    "id": "deepseek",
                    "object": "model",
                    "owned_by": "deepseek-free-api"
                },
                {
                    "id": "deepseek-r1",
                    "object": "model",
                    "owned_by": "deepseek-free-api"
                },
                {
                    "id": "deepseek-search",
                    "object": "model",
                    "owned_by": "deepseek-free-api"
                },
                {
                    "id": "deekseek-search-silent",
                    "object": "model",
                    "owned_by": "deepseek-free-api"
                },
                {
                    "id": "deepseek-r1-search",
                    "object": "model",
                    "owned_by": "deepseek-free-api"
                },
                {
                    "id": "deepseek-r1-silent",
                    "object": "model",
                    "owned_by": "deepseek-free-api"
                },
                {
                    "id": "deepseek-r1-fold",
                    "object": "model",
                    "owned_by": "deepseek-free-api"
                }
}
