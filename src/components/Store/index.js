import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { BtnCancel, BtnSave, ListBtn } from "../../UI/ActionsButton";
import InfoStore from "./InfoStore";

function Store() {
  // Handle events click
  const handleSaveStore = () => {};

  const handleCancelSaveStore = () => {};

  return (
    <Box paddingTop={2}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          color="secondary"
          component="h1"
          fontWeight={"bold"}
          textAlign="center"
          marginBottom={2}
        >
          QR CODE
        </Typography>
        <Button
          variant="contained"
          style={{
            width: "150px",
            height: "150px",
            margin: "0 auto",
          }}
        >
          Scan
        </Button>
        <InfoStore />

        <ListBtn>
          <BtnSave handleBtnSave={handleSaveStore} />
          <BtnCancel handleBtnCancel={handleCancelSaveStore} />
        </ListBtn>
      </Container>
    </Box>
  );
}

export default Store;
