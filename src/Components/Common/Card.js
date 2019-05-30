import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const data = this.props.data;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
							
        <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                <img src={`${data.images.low}`} alt="IMG-PRODUCT" />

                <div className="block2-overlay trans-0-4">
                    <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                        {data.likes} <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                    </a>

                    <div className="block2-btn-addcart w-size1 trans-0-4">
                        
                        <Link to={{
                            pathname: '/detail',
                            state: {
                                data: this.props.data,
                                response: this.props.response
                            }
                            }} className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            View
                        </Link>
                    </div>
                </div>
            </div>

            <div className="block2-txt p-t-20">
                <Link to={{
                            pathname: '/detail',
                            state: {
                                data: this.props.data,
                                response: this.props.response
                            }
                            }} className="block2-name dis-block s-text3 p-b-5">
                    {data.name}
                </Link>

                <span className="block2-price m-text6 p-r-5">
                    {data.price} INR
                </span>
            </div>
        </div>
    </div>
    )
  }
}
export default Card;
