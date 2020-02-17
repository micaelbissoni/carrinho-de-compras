import React, { useState } from "react";
import { Product } from "../interfaces";
import ListItem from "./ListItem";

import { makeStyles } from "@material-ui/core/styles";
import ListMaterial from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid/Grid";

export type ProductInputs = {
  product: string;
};

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  container: {
    padding: "30px 15px 0",
    maxWidth: "328px",
    margin: "auto"
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    padding: "30px 15px 0"
  }
}));

type Props = {
  items: Product[];
};

const List: React.FunctionComponent<Props> = ({ items }) => {
  const classes = useStyles();

  const [produtos, setProducts] = useState(items);

  const callback = async (id: number) => {
    setProducts(produtos.filter(item => item.id !== id));
  };

  return (
    <Grid className={classes.container}>
      <div>
        <Typography variant="h1" className={classes.title}>
          Produtos da Categoria
        </Typography>
        <ListMaterial>
          {(produtos.length) ? produtos.map(item => (
            <ListItem parentCallback={callback} data={item} key={item.id} />
          )):(
            <div>Nenhum produto encontrado.</div>
          )}
        </ListMaterial>
      </div>
    </Grid>
  );
};

export default List;
