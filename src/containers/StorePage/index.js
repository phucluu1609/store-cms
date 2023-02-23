import React from 'react'
import { Helmet } from 'react-helmet'
import Store from '../../components/Store'

function StorePage() {
  return (
    <div>
      <Helmet>
        <title>STORE-CMS | STORE</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Store />
    </div>
  )
}

export default StorePage
