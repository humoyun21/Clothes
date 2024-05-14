import request from '../config'
import {Request} from '../../interface/media'

const product: Request = {
    post_media: (id) => request.post(`/media/upload-photo?id=${id}`),
    get_media: (id) => request.get(`/media/${id}`),
}

export default product;