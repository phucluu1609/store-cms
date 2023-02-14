import {
  Box,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

function InfoStore() {
  return (
    <>
      <Box display="flex" alignItems="baseline" marginTop="25px">
        <Typography variant="body1">Store_ID</Typography>
        <InputBase
          readOnly
          fullWidth
          style={{ background: "#edf0f5", marginLeft: 10, height: 30 }}
        />
      </Box>

      <FormControl
        variant="outlined"
        style={{
          marginTop: "25px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Typography variant="body1">Table_ID</Typography>
        <Select
          fullWidth
          name="Table_ID"
          style={{ marginLeft: 10, height: 30 }}
        >
          <MenuItem></MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default InfoStore;
