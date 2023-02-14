import StorePage from "../containers/StorePage";
import React from "react";

export const routes = [
  {
    path: "/store",
    exact: true,
    protected: true,
    component: <StorePage />,
  },
  {
    path: "/",
    exact: true,
    protected: true,
    component: <StorePage />,
  },
];
