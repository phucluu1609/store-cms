import { Box, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function HomePage() {
  return (
    <Box>
      <Helmet>
        <title>STORE-CMS | Home</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Typography variant="h6" component="h1" color="inherit">
        Home Page
      </Typography>
    </Box>
  )
}
