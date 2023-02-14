import styled from "@emotion/styled";
import { Close, Logout, Storefront } from "@mui/icons-material";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const BoxMenu = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 100,
  transition: "all 1s ease",
});

const ContainerMenu = styled("div")({
  width: 210,
  height: "100%",
  background: "#222D32",
  overflow: "hidden",
  transition: "all 0.5s ease",
});

const CloseButton = styled("div")({
  display: "flex ",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: 8,
});

const menuItems = [
  {
    name: "Stores",
    icon: <Storefront />,
  },
  {
    name: "Logout",
    icon: <Logout />,
  },
];

function Sidebar({ onClick: handleToggleMenu }) {
  return (
    <BoxMenu>
      <ContainerMenu>
        <CloseButton>
          <Button
            style={{ color: "#b8c7ce", minWidth: 0 }}
            onClick={handleToggleMenu}
          >
            <Close />
          </Button>
        </CloseButton>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem button key={item.name}>
                <ListItemIcon
                  style={{ color: "#b8c7ce", minWidth: 0, marginRight: 10 }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  style={{ color: "#b8c7ce" }}
                />
              </ListItem>
            );
          })}
        </List>
      </ContainerMenu>
    </BoxMenu>
  );
}

export default Sidebar;
