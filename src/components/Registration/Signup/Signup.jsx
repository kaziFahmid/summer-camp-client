import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin';
import useAuth from '../../UseAuth/useAuth';
import { useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';

export default function Signup() {
  const { user, createUser } = useAuth();
  const passwordValidation = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*(),.?":{}|<>]).{6,}$/;
  let navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const onSubmit = (data) => {
  
    createUser(data.email,data.password)
    .then((result) => {
  
      const user =result.user;
    
      updateProfile(user, {
        displayName: data.username, photoURL: data.picture
      }).then(() => {
        axios.post('/users', {
          name:user.displayName,
          email:user.email,
          role:"student"
        })
        .then( (response)=> {
          if(response.insertedId){
            reset()

           
          }
        })
        navigate(from, { replace: true });
      }).catch((error) => {
        // An error occurred
        // ...
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };


  return (
    <div className="hero min-h-screen ">
      <div className="md:hero-content flex-col lg:flex-column">
        <div className="text-start ">
          <h1 className="text-5xl font-bold text-orange-400">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
            eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered"
                {...register('username', { required: true })}
                aria-invalid={errors.username ? 'true' : 'false'}
              />
              {errors.username?.type === 'required' && (
                <p role="alert" className="text-red-600">
                  Username is required
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                {...register('email', { required: 'Email Address is required' })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p role="alert" className="text-red-600">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                {...register('password', {
                  required: 'Password is required',
                  pattern: {
                    value: passwordValidation,
                    message:
                      'Password must be at least 6 characters long, contain at least one capital letter, one digit, and one special character',
                  },
                })}
              />
              {errors.password && (
                <p role="alert" className="text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered"
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value) => value === password || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword && (
                <p role="alert" className="text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload picture</span>
              </label>
              <input type="text" name="picture" placeholder="Add picture" className="input input-bordered"  {...register('picture', { required: true })}
                aria-invalid={errors.picture ? 'true' : 'false'} />
                 {errors.picture?.type === 'required' && (
                <p role="alert" className="text-red-600">
                 Picture is required
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-orange-500 text-white">Signup</button>
            </div>
            <p>
              Have an account? <Link to="/Login">Login</Link>
            </p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
}
