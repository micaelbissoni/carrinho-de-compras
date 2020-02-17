import React from "react";
import { AuthProps, privateRoute } from "../components/private_route";
import List from "../components/List";
import { authService } from "../services/rest_service";

import CategoryToolbar from "../components/CategoryToolbar";
import { Product } from "../interfaces";
import { Provider } from "react-redux";
import store from "../store";

type Props = AuthProps & {
  message: string;
  produtos: Product[];
};

function Page(props: Props) {
  return (
    <>
      <CategoryToolbar />
      <Provider store={store}><List /></Provider>
    </>
  );
}

Page.getInitialProps = async ({ auth }: AuthProps): Promise<Props> => {
  const result: any = await authService.readAll(auth.authorizationString);

  let { data } = result;
  let { error } = result;
  let message = '';
  let produtos: Product[] = [];
  
  if (data) {
    produtos = data;
  } else {
    message = error.message;
  }

  return { message, auth, produtos };
};

export default privateRoute(Page);
