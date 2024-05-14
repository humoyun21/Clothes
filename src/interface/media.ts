export interface media {
    id?: number | string;
}

export interface MediaStore {
    postMedia: (id:media, data: media) => Promise<any>;
    getMedia: (id:media) => Promise<any>;
}

export interface Request {
    post_media: (id:media, data:media) => any;
    get_media: (id:media) => any;
}