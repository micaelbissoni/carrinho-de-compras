import React, { Component } from "react";
import { connect } from 'react-redux';
import { CartItem } from "../store/ducks/cartItems/types";
import * as CartItemActions from "../store/ducks/cartItems/actions";
import { ApplicationState } from "../store";
import { bindActionCreators, Dispatch } from "redux";

import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface StateProps {
  cartItems: CartItem[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

class Cart extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { cartItems } = this.props;
    return (
      <>
        <IconButton
            aria-label="Abrir Carrinho"
            aria-controls="primary-open-cart"
            aria-haspopup="true"
            color="inherit"
          >
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  cartItems: state.cartItems.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CartItemActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);