import React, { Component } from 'react'
import axios from "axios";
import PageTitle from '../Common/PageTitle';
import ProductList from '../Common/ProductList';

class Shop extends Component {

  constructor(props){
    super(props);
    this.state = {
      lists: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/posts')
        .then((res) => {
            this.setState({lists: res.data});
        })
        .catch(err => console.log(err));
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

export default Shop;