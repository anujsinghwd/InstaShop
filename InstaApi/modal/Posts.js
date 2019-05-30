const request = require("request");
const { credentials } = require("../config");

function getPosts(params, callback) {
    let API_URL = credentials.api_url; 
    let req = {
        access_token: credentials.access_token,
        count: 9
    }
    if(params.next_id){
        req.max_id = params.next_id;
        API_URL = `https://api.instagram.com/v1/users/${credentials.user_id}/media/recent`
    }
    let next_page = false;
    let prev_page = false;
    let options = {
        method: 'GET',
        url: API_URL,
        qs: req
    };
    request(options, function (error, response, body) {
        if (error){
            callback({data: false, response: 'No Data Found'});
        }
        let result = new Array();
        let res = JSON.parse(body);
        res.data.map((e) => {
            let images = {
                    high: e.images.standard_resolution.url,
                    low: e.images.low_resolution.url,
                    thumbnail: e.images.thumbnail.url
            }
            let created_on = e.created_time;
            let category = e.tags;
            let likes = e.likes.count;
            let comments = e.comments.count;
            let name = '';
            let price = 0.0;
            let description = '';
            let video = false;
            let carousel = false;
            if(e.caption != null){
                e.caption.text.split('|').forEach(f => {
                    if(f.toLowerCase().indexOf('name') !== -1){
                        name = f.split('-')[1].trim().toUpperCase();
                    }
                    if(f.toLowerCase().indexOf('price') !== -1){
                        price = f.split('-')[1].trim().toUpperCase();
                    }
                    if(f.toLowerCase().indexOf('description') !== -1){
                        let desc = f.split('-')[1].trim().split('~');
                        let features = [];
                        desc.map((er) => {
                            if(er.length > 0) features.push(er.trim().replace('>', ' - '));
                        })
                        description = features;
                    }
                });
            }
            if(e.type === 'video'){
                video = {
                    high: e.videos.standard_resolution.url,
                    low: e.videos.low_resolution.url,
                    tiny: e.videos.low_bandwidth.url
                }
            }
            if(e.type === 'carousel'){
                let video = [];
                let image = [];
                e.carousel_media.map((cm) => {
                    if(cm.type === 'video')
                    {
                        video.push({
                            high: cm.videos.standard_resolution.url,
                            low: cm.videos.low_resolution.url,
                            thumbnail: cm.videos.low_bandwidth.url
                        });
                    }
                    if(cm.type === 'image')
                    {
                        image.push({
                            high: cm.images.standard_resolution.url,
                            low: cm.images.low_resolution.url,
                            thumbnail: cm.images.thumbnail.url
                        });
                    }
                });

                if(video.length && image.length){
                    e.carousel_media.map((cm) => {
                        if(cm.type === 'image'){
                            images = {
                                high: cm.images.standard_resolution.url,
                                low: cm.images.low_resolution.url,
                                thumbnail: cm.images.thumbnail.url
                            }
                        }
                    });
                }
                if(video.length === 0){
                    video = false;
                }
                if(image.length === 0){
                    image = false;
                }
                carousel = {videos: video, images: image};
            }
            let resp_data = {
                id: e.id,
                name: name,
                price: price,
                description: description,
                images: images,
                videos: video,
                likes: likes,
                comments: comments,
                category: category,
                created_on: created_on,
                carousel: carousel
            }
            result.push(resp_data);
        });
        
        if(res.pagination.length !== 'undefined'){
            next_page = res.pagination.next_max_id;
        }
        callback({data: true, response: result, next_id: next_page, prev_id: prev_page});
    });

}

module.exports = { getPosts };
