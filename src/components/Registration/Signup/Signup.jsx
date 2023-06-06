import React from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from '../SocialLogin'

export default function Signup() {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-column">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-pink-400"> Signup now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" name='username' placeholder="Username" className="input input-bordered" />
        </div>






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
          <input type="password"  name='password' placeholder="Password" className="input input-bordered" />
       
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password"  name='confirmpass' placeholder="Confirm Password" className="input input-bordered" />
       
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload picture</span>
          </label>
          <input type="text" name='picture' placeholder="Add picture" className="input input-bordered" />
        </div>




        
        <div className="form-control mt-6">
          <button className="btn bg-pink-500 text-white">Signup</button>
        </div>
        <p>Have  account ?<Link to='/Login'>Login</Link></p>
        <SocialLogin></SocialLogin>
      </form>

    </div>

  </div>

</div>
  )
}
