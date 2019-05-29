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
    let prev_page = API_URL;
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
        //callback(res);
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
                //console.log(carousel_media.length);
                // if(e.carousel_media.videos){
                //     e.carousel_media.map((cm) => {
                //         carousel_media.push({
                //             high: cm.carousel_media.videos.standard_resolution.url,
                //             low: cm.carousel_media.videos.low_resolution.url,
                //             thumbnail: cm.carousel_media.videos.low_bandwidth.url
                //         });
                //     });
                // }
                // else
                // {
                //     e.carousel_media.map((cm) => {
                //         // carousel_media.push({
                //         //     high: cm.carousel_media[0].images.standard_resolution.url,
                //         //     low: cm.carousel_media[0].images.low_resolution.url,
                //         //     thumbnail: cm.carousel_media[0].images.thumbnail.url
                //         // });
                //     });
                // }
                
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
        
        if(res.pagination.length !== 'undefined'){
            next_page = res.pagination.next_max_id;
        }
        callback({data: true, response: result, next_id: next_page});
    });

}

module.exports = { getPosts };
