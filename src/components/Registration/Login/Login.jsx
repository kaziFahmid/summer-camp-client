import React from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from '../SocialLogin'

export default function Login() {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-column">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-pink-500 font-bold">Login now!</h1>
      <p className="py-6 mt-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password'placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-pink-500 text-white">Login</button>
        </div>
        <p>Have no account ?<Link to='/signup'>Signup</Link></p>
        <SocialLogin></SocialLogin>
      </form>
  
    </div>

  </div>

</div>
  )
}
