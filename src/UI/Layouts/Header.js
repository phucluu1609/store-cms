import { Menu } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import logo from "../../images/logo.svg";

const Logo = styled("img")({
  width: 40,
  marginRight: 5,
  cursor: "pointer",
});

function Header({ onClick: handleToggleMenu }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button
          color="inherit"
          aria-label="menu"
          style={{ minWidth: 0 }}
          onClick={handleToggleMenu}
        >
          <Menu />
        </Button>
        <Box
          width={"100%"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Logo src={logo} alt="PizzaHut Logo" loading="lazy" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
