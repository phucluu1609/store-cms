import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  right: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 50,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
}));

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Typography variant="body1" component="p">
          <strong>Copyright © 2022</strong>
          <Link
            to={"http://pizzahut.vn/"}
            target="_blank"
            title="pizzahut.vn"
            rel="noopener noreferrer"
            style={{
              color: "#04aa6d",
              fontWeight: "bold",
              textDecoration: "none",
              marginLeft: 5,
            }}
          >
            PIZZAHUT.
          </Link>
        </Typography>
      </Container>
    </Wrapper>
  );
}

export default Footer;
