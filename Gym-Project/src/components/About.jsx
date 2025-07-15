import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white py-2 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 text-blue-700">
          About <span className="text-white">Najeeb Ahmed GYM</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
          At Najeeb Ahmed GYM, we are passionate about helping you achieve your fitness goals. 
          Whether you're a beginner or a seasoned athlete, our state-of-the-art equipment, 
          experienced trainers, and motivational environment will keep you inspired every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <div className="border border-gray-700 p-6 rounded-lg 
            hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-700 cursor-pointer">Professional Trainers</h3>
            <p className="text-gray-400 cursor-pointer">
              Our certified trainers design personalized programs and ensure your workouts are safe and effective.
            </p>
          </div>
          <div className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700 cursor-pointer">Modern Equipment</h3>
            <p className="text-gray-400 cursor-pointer">
              Get access to top-notch machines and free weights for all types of training styles.
            </p>
          </div>
          <div className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700 cursor-pointer">Supportive Environment</h3>
            <p className="text-gray-400 cursor-pointer">
              Train in a positive, energetic atmosphere with a community that supports your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
