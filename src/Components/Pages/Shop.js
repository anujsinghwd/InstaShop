import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTitle from '../Common/PageTitle';
import ProductList from '../Common/ProductList';
import { getProducts } from '../../actions/ProductAction';

class Shop extends Component {

  constructor(props){
    super(props);
    this.state = {
      lists: []
    }
  }

  componentWillReceiveProps(nextProps) {
      if(!nextProps.products.loading){
        if(nextProps.products.products.data){
          this.setState({lists: nextProps.products.products});
        }
      }
  }
  
  componentDidMount(){
    this.props.getProducts();
  }
  render() {
    
    return (
      <div>
        <PageTitle />
        <ProductList data={this.state.lists}/>
      </div>
    )
  }
}

Shop.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    products: state.products
});

export default connect(mapStateToProp, { getProducts })(Shop);