import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Profile ({ setIsLogin, isLogin }) {
  const history = useHistory()
  const handlerChange = () => {
    setIsLogin(!isLogin)

    history.push('/')
  }
  return <button onClick={handlerChange}>Exit</button>
}

export default Profile
