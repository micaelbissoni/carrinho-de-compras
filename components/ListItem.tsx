import * as React from "react";

import { Product } from "../interfaces";

import ListItemMaterial from "@material-ui/core/ListItem";
import ListItemTextMaterial from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from "@material-ui/core/Divider";
import { authService } from "../services/rest_service";

type Props = {
  parentCallback: any;
  data: Product;
};

const ListItem: React.FunctionComponent<Props> = ({ data, parentCallback }) => {
  const addToCartHandler = async (data: Product) => {
    const result = await authService.addToCart(data);
    if (result) {
      parentCallback(data);
    }
  };

  return (
    <>
      <ListItemMaterial>
        <ListItemTextMaterial primary={data.nome} />
        <ListItemSecondaryAction>
        <IconButton
          aria-label="cart"
          onClick={() => addToCartHandler(data)}
          >
          <Badge badgeContent={"+"} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        </ListItemSecondaryAction>
      </ListItemMaterial>
      <Divider light />
    </>
  );
};

export default ListItem;
