import React from 'react';
import { connect } from 'react-redux';
import { getProductList } from './actions';

class Home extends React.Component {
    componentDidMount() {
        this.props.getProductList();
    }
    render() {
        const {
            isListingFetching,
            listingData,
            errorData,
        } = this.props;
        return (
            <div>
                {
                    isListingFetching ? "Loading...." : <div>
                        {
                            listingData.map(data => (
                                <div key={data.id}>
                                    <img src={data.thumbnailUrl} alt={data.title} />
                                    <p>{data.title}</p>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.homeReducer);

const mapDispatchToProps = ({ getProductList })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
