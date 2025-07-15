import React from 'react';

const Home = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-8  "
    
    
    >
       {/* <div className="absolute inset-0 bg-black/70"></div> */}
      <h1 className="text-5xl font-extrabold mb-4 text-blue-700 text-center">
        Welcome to <span className="text-white">Najeeb Ahmed GYM</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-xl text-center mb-6">
        Transform your body and mind with expert trainers, modern equipment, and a motivating environment. Start your fitness journey today.
      </p>
      <a
        href="#"
        className="bg-blue-700 text-black font-bold py-2 px-6 rounded-full hover:bg-blue-300 transition duration-400"
      >
        Join Now
      </a>
    </section>
  );
};

export default Home;
