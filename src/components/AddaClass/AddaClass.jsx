import React from 'react';
import useAuth from '../UseAuth/useAuth';
import axios from 'axios';

export default function AddaClass() {
  const { user } = useAuth();

  let handleClassSubmit = (e) => {
    e.preventDefault();
    let image = e.target.elements.classImage.value;
    let instructorname = e.target.elements.instructorName.value;
    let email = e.target.elements.instructorEmail.value;
    let name = e.target.elements.className.value;
    let seat = parseFloat(e.target.elements.availableSeats.value);
    let price = parseFloat(e.target.elements.price.value);
    let status = "pending";

    axios
      .post('/classes', {
        image,
        instructorname,
        email,
        name,
        seat,
        price,
        status,
      })
      .then((response) => console.log(response));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form className=" shadow-xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleClassSubmit}>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="className">
            Class Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="className"
            name="className"
            type="text"
            placeholder="Enter class name"
          />
        </div>

        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="classImage">
            Class Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="classImage"
            name="classImage"
            type="text"
            placeholder="Enter Class Image"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="instructorName">
            Instructor Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="instructorName"
            name="instructorName"
            defaultValue={user?.displayName}
            type="text"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="instructorEmail">
            Instructor Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="instructorEmail"
            name="instructorEmail"
            type="email"
            defaultValue={user?.email}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="availableSeats">
            Available Seats
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="availableSeats"
            type="number"
            name="availableSeats"
            placeholder="Enter available seats"
          />
        </div>

        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
            type="number"
            placeholder="Enter price"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
