import React, { Component } from 'react'
import Card from './Card';

class ProductList extends Component {
  render() {
	let cards;
	if(this.props.data.length != 0){
		cards = this.props.data.response.map((r, i) => {
			return <Card data={r} key={i} response={this.props.data} />
		})
	}
    return (
		
        <section className="bgwhite p-t-55 p-b-65">
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
					<div className="leftbar p-r-20 p-r-0-sm">
						
						<h4 className="m-text14 p-b-7">
							Categories
						</h4>

						<ul className="p-b-54">
							<li className="p-t-4">
								<a href="#" className="s-text13 active1">
									All
								</a>
							</li>

							<li className="p-t-4">
								<a href="#" className="s-text13">
									Women
								</a>
							</li>

							<li className="p-t-4">
								<a href="#" className="s-text13">
									Men
								</a>
							</li>

							<li className="p-t-4">
								<a href="#" className="s-text13">
									Kids
								</a>
							</li>

							<li className="p-t-4">
								<a href="#" className="s-text13">
									Accesories
								</a>
							</li>
						</ul>


						


						<div className="search-product pos-relative bo4 of-hidden">
							<input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..." />

							<button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
								<i className="fs-12 fa fa-search" aria-hidden="true"></i>
							</button>
						</div>
					</div>
				</div>

				<div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
					
					<div className="flex-sb-m flex-w p-b-35">
						<div className="flex-w">
							{/* <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select className="selection-2" name="sorting">
									<option>Default Sorting</option>
									<option>Popularity</option>
									<option>Price: low to high</option>
									<option>Price: high to low</option>
								</select>
							</div> */}

							{/* <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select className="selection-2" name="sorting">
									<option>Price</option>
									<option>$0.00 - $50.00</option>
									<option>$50.00 - $100.00</option>
									<option>$100.00 - $150.00</option>
									<option>$150.00 - $200.00</option>
									<option>$200.00+</option>

								</select>
							</div> */}
						</div>

						<span className="s-text8 p-t-5 p-b-5">
							Showing 1–12 of 16 results
						</span>
					</div>
					<div className="row">
						{this.props.load}
						{cards}
					</div>
					<div className="pagination flex-m flex-w p-t-26">
						<a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
						<a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	
    )
  }
}
export default ProductList;
