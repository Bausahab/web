import React from 'react'

const SignIn = () => {

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      {/* <div className='sign-container'>
      <div className='sign-box'>
        <form action="" className='form-box' >
          <div className='sign-input-box'>
            <label htmlFor="" className='sign-label'>Email*</label>
            <input type="email" name='email' placeholder='Enter Email' className='sign-input' />
          </div>
          <div className='sign-input-box'>
            <label htmlFor="" className='sign-label'>Password*</label>
            <input type="password" name='password' placeholder='Enter password' className='sign-input' />
          </div>
          <div>
            <button className='btn-login' onClick={(e)=>handleLogin(e)}>Login</button>
          </div>
        </form>
      </div>
      </div> */}

      <div className='login-box'>
        <div className='login-container'>
          <div className='left-side-container'>
            <form action="" className='form-box' >
              <div className='sign-input-box'>
                <label htmlFor="" className='sign-label'>Email*</label>
                <input type="email" name='email' placeholder='Enter Email' className='sign-input' />
              </div>
              <div className='sign-input-box'>
                <label htmlFor="" className='sign-label'>Password*</label>
                <input type="password" name='password' placeholder='Enter password' className='sign-input' />
              </div>
              <div>
                <button className='btn-login' onClick={(e) => handleLogin(e)}>Login</button>
              </div>
            </form>
          </div>
          <div className='right-side-container'>
            <div className='triangle-box'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn