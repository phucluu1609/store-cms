import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputBase,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

function DetailStore({ dataStore, tableId, setTableId }) {
  const [disabledInput, setDisabledInput] = useState(false)

  const handleClickDisabled = (e) => {
    setDisabledInput(e.target.checked)
  }

  const handleChange = (e) => {
    setTableId(e.target.value)
  }

  return (
    <>
      <Box display="flex" style={{ marginTop: 35, width: '100%' }}>
        <Typography variant="body1">Store_ID</Typography>
        <InputBase
          id="store_id"
          readOnly
          fullWidth
          value={dataStore?.tableMapping?.storeId || ''}
          style={{
            backgroundColor: '#e7e7e7',
            marginLeft: 10,
            height: 30,
            padding: 10,
          }}
        />
      </Box>
      <FormControl variant="outlined" style={{ marginTop: 15 }} fullWidth>
        <Box display="flex">
          <Typography variant="body1">Table_ID</Typography>
          <Select
            id="table_id"
            fullWidth
            value={tableId}
            onChange={handleChange}
            style={{ marginLeft: 10, height: 30 }}
            disabled={disabledInput}
          >
            {dataStore?.storeTables?.map((store) => (
              <MenuItem key={store.tableId} value={store.tableId}>
                {store.tableId}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </FormControl>
      <FormGroup style={{ marginTop: 15, marginRight: 'auto' }}>
        <FormControlLabel
          control={
            <Switch
              checked={disabledInput}
              onChange={handleClickDisabled}
              aria-label="disabled"
            />
          }
          label={'Disabled'}
        />
      </FormGroup>
    </>
  )
}

export default DetailStore
