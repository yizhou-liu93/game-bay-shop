import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(error => console.log('Fetch failed!', error));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="container  product-content">
        <div className="row">
          {this.state.products.map((p, key) => {
            return (
              <div className="col-lg-4" key={key} onClick={() => this.props.setView('details', { productId: p.productId })}>
                <ProductListItem name={p.name} image={p.image} shortDescription={p.shortDescription} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
