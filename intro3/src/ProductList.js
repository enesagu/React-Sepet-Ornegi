import React, { Component } from "react";
import {  Table } from "reactstrap";


export default class ProductList extends Component {

 
 
  render() {
    return (
      <div>
        <h2>
          {this.props.info.title}-{this.props.currentCategory}
        </h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="Row">id</th>
              <th>Name</th>
              <th>Product </th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>

            </tr>
          </thead>
          {this.props.products.map((products) => (
            <tr key={products.id}>
              <th>{products.id}</th>
              <td>{products.productName}</td>
              <td>{products.quantityPerUnit}</td>
              <td>{products.unitPrice}</td>
              <td>{products.unitsInStock}</td>
              <td><button onClick={()=>this.props.addToChart(products)} type="button" class="btn btn-info">Add</button></td>

            </tr>
          ))}
        </Table>
      </div>
    );
  }
}
