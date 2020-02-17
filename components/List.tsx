import React, { Component } from "react";
import { connect } from 'react-redux';
import { Product } from "../store/ducks/products/types";
import * as CartItemActions from "../store/ducks/products/actions";
import { ApplicationState } from "../store";
import { bindActionCreators, Dispatch } from "redux";

import ListMaterial from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import ListItem from "./ListItem";

interface StateProps {
  products: Product[]
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
    const { products } = this.props;

    return (
      <>
        <Grid>
        <div>
            <Typography variant="h1">
            Produtos da Categoria
            </Typography>
            <ListMaterial>
            {(products.length) ? products.map(item => (
                <ListItem data={item} key={item.id} />
            )):(
                <div>Nenhum produto encontrado.</div>
            )}
            </ListMaterial>
        </div>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
    products: state.products.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CartItemActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);