import React, { Component } from 'react'
import "react-image-gallery/styles/css/image-gallery.css";

import RelatedProduct from '../Common/RelatedProduct';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player';


class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.renderVideo = this.renderVideo.bind(this);
    }

    renderVideo(url){
            return (<ReactPlayer url={url} playing />);
    }

    render() {
        const cara_images = [];
        const { data, response } = this.props.location.state;
        let cards;
        let video;
        if (data.carousel) {
            if (data.carousel.videos) {
                data.carousel.videos.map((ev) => {
                    //cara_images.push({original: ev.high, thumbnail: ev.thumbnail});
                    //thumbnail: `${PREFIX_URL}4v.jpg`,
                    // original: `${PREFIX_URL}4v.jpg`,
                    // embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
                    // description: 'Render custom slides within the gallery',
                    // renderItem: this._renderVideo.bind(this)
                    //cara_images.push({original: ev.thumbnail, thumbnail: ev.thumbnail, embedUrl: ev.high,renderItem: <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />});
                    //console.log(ev);
                    //https://scontent.cdninstagram.com/vp/b35820834df2ed19f6753b07d4b7a293/5D93F734/t51.2885-15/e35/s150x150/61822977_1250310961794747_2619449728594902503_n.jpg?_nc_ht=scontent.cdninstagram.com
                    //<ReactPlayer url={ev.high} playing />
                    //cara_images.push({thumbnail: 'https://scontent.cdninstagram.com/vp/b35820834df2ed19f6753b07d4b7a293/5D93F734/t51.2885-15/e35/s150x150/61822977_1250310961794747_2619449728594902503_n.jpg?_nc_ht=scontent.cdninstagram.com', original: 'https://scontent.cdninstagram.com/vp/b35820834df2ed19f6753b07d4b7a293/5D93F734/t51.2885-15/e35/s150x150/61822977_1250310961794747_2619449728594902503_n.jpg?_nc_ht=scontent.cdninstagram.com'});
                    //video = <ReactPlayer url={ev.high} playing />
                });
            }

            if (data.carousel.images) {
                data.carousel.images.map((ei) => {
                    cara_images.push({ original: ei.high, thumbnail: ei.thumbnail });
                });
            }
        }
        else {
            cara_images.push({ original: data.images.high, thumbnail: data.images.thumbnail });
        }
        cards = response.response.slice(0, 5).map((r, i) => {
            return (r.id !== data.id) ? <RelatedProduct key={i} data={r} response={this.props.location.state.response} /> : ''
        })
        return (
            <>
                <div className="container bgwhite p-t-35 p-b-80">
                    <div className="flex-w flex-sb">

                        <div className="w-size13 p-t-30 respon5">
                            <div className="wrap-slick3 flex-sb flex-w">
                                <ImageGallery items={cara_images} />
                                {/* {video} */}
                            </div>
                        </div>
                        <div className="w-size14 p-t-30 respon5">
                            <h4 className="product-detail-name m-text16 p-b-13">
                                {data.name}
                            </h4>
                            <span className="m-text17">
                                {data.price} INR
                            </span>
                            {
                                data.description.map(e => <p className="s-text8 p-t-10">{e}</p>)
                            }

                            <div className="p-t-33 p-b-60">
                                <div className="flex-m flex-w p-b-10">
                                    <div className="s-text15 w-size15 t-center">
                                        Size
               </div>
                                    <div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
                                        <select className="selection-2 select2-hidden-accessible" name="size" tabIndex="-1" aria-hidden="true">
                                            <option>Choose an option</option>
                                            <option>Size S</option>
                                            <option>Size M</option>
                                            <option>Size L</option>
                                            <option>Size XL</option>
                                        </select>
                                        <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '152px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-size-fq-container"><span className="select2-selection__rendered" id="select2-size-fq-container" title="Choose an option">Choose an option</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                </div>
                                <div className="flex-m flex-w">
                                    <div className="s-text15 w-size15 t-center">
                                        Color
               </div>
                                    <div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
                                        <select className="selection-2 select2-hidden-accessible" name="color" tabIndex="-1" aria-hidden="true">
                                            <option>Choose an option</option>
                                            <option>Gray</option>
                                            <option>Red</option>
                                            <option>Black</option>
                                            <option>Blue</option>
                                        </select>
                                        <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '152px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-color-iw-container"><span className="select2-selection__rendered" id="select2-color-iw-container" title="Choose an option">Choose an option</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                </div>
                                <div className="flex-r-m flex-w p-t-10">
                                    <div className="w-size16 flex-m flex-w">
                                        <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                            <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                                                <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="size8 m-text18 t-center num-product" type="number" name="num-product" value="1" />
                                            <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                                                <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">

                                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                                Add to Cart
                                            a</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-b-45">
                                <span className="s-text8 m-r-35">SKU: MUG-01</span>
                                <span className="s-text8">Categories: Mug, Design</span>
                            </div>

                            <div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
                                <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4 show-dropdown-content">
                                    Description
               <i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
                                    <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                                </h5>
                                <div className="dropdown-content dis-none p-t-15 p-b-23" style={{ display: 'block' }}>
                                    {/* {
                   data.description.map(e => <p>{e}</p>)
               } */}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section className="relateproduct bgwhite p-t-45 p-b-138">
                    <div className="container">
                        <div className="sec-title p-b-60">
                            <h3 className="m-text5 t-center">
                                Related Products
						</h3>
                        </div>

                        <div className="wrap-slick2">

                            <div className="slick2 slick-initialized slick-slider">
                                <div className="slick-list draggable">
                                    <div className="slick-track">
                                        {cards}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default DetailPage;
