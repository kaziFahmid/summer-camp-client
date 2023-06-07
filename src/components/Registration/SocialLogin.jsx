import React from 'react'
import useAuth from '../UseAuth/useAuth'
import axios from 'axios';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
export default function SocialLogin() {
const{handleGoogleSignin}=useAuth()

let navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

const handleGoogle = (e) => {
  e.preventDefault();
  handleGoogleSignin()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      axios.post('/users', {
        email:user.email,
        username:user.displayName
          })
          .then( (response)=> {
           console.log(response)
          })
          navigate(from, { replace: true });
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.email;

      const credential = GoogleAuthProvider.credentialFromError(error);

    });
};








  return (
    <button onClick={handleGoogle} className='btn bg-slate-300'>
      Google
    </button>
  )
}
