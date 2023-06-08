import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../UseAuth/useAuth';
import axios from 'axios';


export default function ClassBox({
  _id,
  image,
  instructorname,
  name,
  seat,
  email,
  price,
  cls
}) {

  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSelect = (cls) => {
    const{_id,
      image,
      instructorname,
      name,
      seat,
      email,
      price,}=cls
    if (user) {
      axios.post('/myselectedclass', {
        classId:_id,
        image,
        instructorname,
        name,
        seat,
        email,
        price,
        myemail:user?.email

      })
      .then(function (response) {
        console.log(response);
      })

    } else {

      navigate('/login'); 
    }
  };

  return (
    <div className={`card w-96 mx-auto bg-base-100 shadow-xl ${seat==0&& "bg-red-500"}`}>
      <figure>
        <img src={image} alt="Shoes" className="h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="card-title">Instructor name: {instructorname}</h2>

        <h2 className="card-title">Seat: {seat}</h2>
        <h2 className="card-title">Price: {price}</h2>

        <button
          className="btn bg-pink-500 text-white"
          onClick={()=>handleSelect(cls)} 
        disabled={seat==0&&true}>
          Select
        </button>
      </div>
    </div>
  );
}
