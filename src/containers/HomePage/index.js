import { Box, Typography, Container } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

const ContainerStyle = {
  height: '100vh',
  paddingTop: 10,
}

export default function HomePage() {
  return (
    <Box>
      <Helmet>
        <title>STORE-CMS | Home</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Container maxWidth="lg" sx={ContainerStyle}>
        <Typography variant="h6" component="h1" color="inherit">
          Home Page
        </Typography>
      </Container>
    </Box>
  )
}
