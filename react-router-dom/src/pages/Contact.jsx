import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-blue-400 p-4">
      
      {/* Heading */}
      <h1 className="text-6xl font-extrabold text-white text-center drop-shadow-lg">
        Contact Us
      </h1>
      <p className="mt-4 text-lg text-white text-center max-w-md drop-shadow-md">
        Have questions or want to book a swimming session? Fill out the form below and we'll get back to you!
      </p>

      {/* Contact form */}
      <form className="mt-8 w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
