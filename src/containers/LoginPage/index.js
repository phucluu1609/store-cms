import React from "react";
import Login from "../../components/Login";
import { Helmet } from "react-helmet";

function LoginPage(props) {
  return (
    <div>
      <Helmet>
        <title>STORE-CMS | LOGIN</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Login />
    </div>
  );
}

export default LoginPage;
