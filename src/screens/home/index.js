import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Product } from './Product';
import { getAllProducts } from '../../store/actions';
const Home = ({ getAllProducts, products }) => {
  useEffect(() => {
    getAllProducts({
      page: 1,
      limit: 9,
      description_length: 120
    });
  }, []);
  console.log(2, products);

  const items = products.all.data.rows;

  return (
    <div style={styles}>
      {items.map((item) => (
        <Product key={item.product_id} product={item} />
      ))}
    </div>
  );
};
const styles = {
  padding: '10vw',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
};

Home.propTypes = {
  getAllProducts: PropTypes.func,
  products: PropTypes.object
};
const mapStateToProps = ({ products }) => {
  return {
    products
  };
};
const mapDispatchToProp = {
  getAllProducts
};
export default connect(mapStateToProps, mapDispatchToProp)(Home);