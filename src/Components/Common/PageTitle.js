import React, { Component } from "react";

class PageTitle extends Component {
  render() {
    return (
      <section
        className="bg-title-page p-t-50 p-b-40 flex-col-c-m"
        style={{backgroundImage: "url('images/heading-pages-02.jpg')"}}
      >
        <h2 className="l-text2 t-center">Products</h2>
        <p className="m-text13 t-center">New Arrivals Collection 2019</p>
      </section>
    );
  }
}

export default PageTitle;