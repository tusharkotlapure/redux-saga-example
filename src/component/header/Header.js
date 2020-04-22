import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import UpdateQuantity from '../UpdateQuantity';

class Header extends React.Component {
    state = {
        openDrawer: false,
    };

    render() {
        const {
            shoppingCart: {
                count,
                items,
            }
        } = this.props;
        return (
            <AppBar position="fixed" style={{ height: '40px'}}>
                <header className="clearfix mt-2">
                    <div className="container-fluid">
                        <div className="float-left">APP LOGO</div>
                        <div className="float-right"><ShoppingCartIcon onClick={() => this.setState({ openDrawer: !this.state.openDrawer })} /> ({count})</div>
                    </div>
                </header>
                <Drawer anchor="right" open={this.state.openDrawer} onClose={() => this.setState({ openDrawer: false })}>
                    {
                        items.length ?
                            items.map(item =>
                                <div key={item.id} className="row">
                                    <div className="col-sm-4">
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                    </div>
                                    <div className="col-sm-8">
                                        {item.description}<UpdateQuantity {...item} />
                                    </div>
                                </div>) : <div>No items in your cart</div>
                    }
                </Drawer>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => ({ shoppingCart: state.shoppingCart });

export default connect(mapStateToProps , null)(Header);
