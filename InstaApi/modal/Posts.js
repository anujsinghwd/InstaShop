const request = require("request");
const { access_token, ApiUrl } = require("../config");

function getPosts(params, callback) {
    let options = {
        method: 'GET',
        url: ApiUrl,
        qs: {
            access_token: access_token,
            count: 9
        }
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
            let next = false;
            if(e.caption != null){
                e.caption.text.split('|').forEach(f => {
                    if(f.toLowerCase().indexOf('name') !== -1){
                        name = f.split('-')[1].trim().toUpperCase();
                    }
                    if(f.toLowerCase().indexOf('price') !== -1){
                        price = f.split('-')[1].trim().toUpperCase();
                    }
                    if(f.toLowerCase().indexOf('description') !== -1){
                        description = f.split('-')[1].trim().toUpperCase();
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
                let carousel_media = [];
                e.carousel_media.map((cm) => {
                    carousel_media.push({
                        high: cm.images.standard_resolution.url,
                        low: cm.images.low_resolution.url,
                        thumbnail: cm.images.thumbnail.url
                    });
                });
                carousel = carousel_media;
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
        
        if(res.pagination.length != 'undefined'){
            next = res.pagination.next_max_id;
        }
        callback({data: true, response: result, next_id: next});
    });

}

module.exports = { getPosts };
