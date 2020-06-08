import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProducts } from '../../store/actions';
import { Profession } from './Profession';
import { ContainerDiv, ItemsWrapper } from '../styles';


const Professionals =  ({ getAllProducts, products }) => {
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
        <ContainerDiv>
            <ItemsWrapper className="Artisan__container">
                {items.map((item) => (
                    <Profession key={item.product_id} product={item} />
                ))}
            </ItemsWrapper>
        </ContainerDiv>
    )
}

Professionals.propTypes = {
    getAllProducts: PropTypes.func,
    products: PropTypes.object
}

const mapStateToProps = ({ products }) => {
    return {
        products
    }
};

const mapDispatchToProp = {
    getAllProducts
}

export default connect(mapStateToProps, mapDispatchToProp)(Professionals);