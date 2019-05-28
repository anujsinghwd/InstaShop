var request = require("request");

function getPosts(params, callback) {
    var options = {
        method: 'GET',
        url: 'https://api.instagram.com/v1/users/self/media/recent/',
        qs: {
            access_token: '13990117643.e3c5770.1ea0dcc385a445bf983a1ae02a30dd2c',
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
        })
        callback({data: true, response: result});
    });

}

module.exports = { getPosts };
