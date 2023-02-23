import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Login from '../../components/Login'

function LoginPage() {
  const login = useSelector((state) => state.loginPageReducer.isLogin)
  const navigate = useNavigate()

  useEffect(() => {
    if (login) {
      navigate('/')
    }
  }, [login, navigate])

  return (
    <div>
      <Helmet>
        <title>PIZZAHUT-CMS | LOGIN</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Login />
    </div>
  )
}

export default LoginPage
