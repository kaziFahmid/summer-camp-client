import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../UseAuth/useAuth';

export default function Login() {
  const { signInUser } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        // Signed in
        const user = result.user;
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-pink-500 font-bold">Login now!</h1>
      <p className="py-6 mt-2">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
        deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card  shadow-2xl bg-base-100 mx-auto">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            {...register('email', { required: 'Email Address is required' })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <p role="alert" className="text-red-600">{errors.email?.message}</p>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative border rounded-lg">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
              className="input  pr-12"
              {...register('password', { required: 'Password is required', minLength: 6 })}
            />
            <button
              type="button"
              className="btn btn-square btn-ghost absolute top-1/2 right-3 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && (
            <p role="alert" className="text-red-600">
              {errors.password?.type === 'required' ? 'Password is required' : 'Password must be at least 6 characters long'}
            </p>
          )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-pink-500 text-white w-full">Login</button>
        </div>
        <p className="text-center">
          Have no account? <Link to="/signup">Signup</Link>
        </p>
        <SocialLogin />
      </form>
    </div>
  </div>
</div>

  );
}
