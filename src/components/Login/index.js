import React from 'react'
import { signInWithGoogle } from '../../firebase';

const Login = () => {
  return (
    <div className='dashboard'>
      <button onClick={signInWithGoogle}>
        sign in with google
      </button>
    </div>
  )
}

export default Login