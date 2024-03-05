import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            className="h-screen w-full"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Adana+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Feel free to reach out to us with any questions, feedback, or
              inquiries.
            </p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#BE3726] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Email"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#BE3726] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              onClick={handleClick}
              className="text-white bg-[#BE3726] border-0 py-2 px-6 focus:outline-none hover:bg-[#aa2312] rounded text-lg"
            >
              Send
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Thank you for considering reaching out to us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
