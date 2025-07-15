import React from 'react';

const Contact = () => {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">
          Contact <span className="text-white">Us</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Have questions or want to join? Reach out to us — we’re here to help!
        </p>

        <form 
        action="https://formspree.io/f/xdkdnzoy"
  method="POST"
        
        className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-700 text-black font-bold py-3 px-8 rounded-full hover:bg-blue-400 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
