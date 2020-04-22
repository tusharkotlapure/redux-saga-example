import React from 'react';
import { connect } from 'react-redux';
import { getProductList, addProductToCart, removeProductFromCart } from './actions';
import ErrorData from '../../component/ErrorData';
import ProductList from '../../component/product/ProductList';

class Home extends React.Component {
    componentDidMount() {
        this.props.getProductList();
    }

    render() {
        const {
            errorData,
            listingData,
            addProductToCart,
            isListingFetching,
            removeProductFromCart
        } = this.props;

        const updatedListing = !isListingFetching && listingData.map(data => ({ imgUrl: data.thumbnailUrl, imgAlt: data.title, description: data.title, id: data.id }));

        return (
            <div className="container-fluid">
                {
                    isListingFetching ? "Loading...." : errorData ? <ErrorData /> : <ProductList productList={updatedListing} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.homeReducer);

const mapDispatchToProps = ({ getProductList, addProductToCart, removeProductFromCart })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
