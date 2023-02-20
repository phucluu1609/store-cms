import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/404NotFound.jpg'

function Page404() {
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12} textAlign="center" mt={10}>
          <img
            src={image}
            alt="404 Not Found"
            style={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h5"
            component="h1"
            color="secondary"
            fontWeight={'bold'}
            mt={2}
          >
            Something went wrong !!!
          </Typography>
          <Typography variant="subtitle1" component="h2" fontWeight={'bold'}>
            <Link to="/">You may also refresh the page or try again later</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Page404
