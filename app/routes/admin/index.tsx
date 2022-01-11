import React from 'react'
import { Admin, Login } from 'react-bricks'

const AdminLogin: React.FC = () => {
  return (
    <Admin isLogin>
      <Login />
    </Admin>
  )
}

export default AdminLogin
