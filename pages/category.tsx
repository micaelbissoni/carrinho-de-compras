import React from "react";
import { AuthProps, privateRoute } from "../components/private_route";
import List from "../components/List";
import { authService } from "../services/rest_service";

import CategoryToolbar from "../components/CategoryToolbar";
import { Product } from "../interfaces";

type Props = AuthProps & {
  message: string;
  produtos: Product[];
};

function Page(props: Props) {
  return (
    <>
      <CategoryToolbar />
      <List items={props.produtos} />
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
