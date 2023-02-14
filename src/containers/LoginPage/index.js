import React from "react";
import { Helmet } from "react-helmet";
import Login from "../../components/Login";

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
