import React from 'react';

export default function About() {
  const testimonials = [
    {
      name: 'Lakshya veer singh',
      title: 'Seller',
      image: '/images/testimonial-1.jpg',
      text: 'I continue to rent and found . The platform was easy to use and the listings were diverse and well-organized. I found a great apartment and had a smooth rental experience.',
    },
    {
      name: 'Jane Smith',
      title: 'Homeowner',
      image: '/images/testimonial-2.jpg',
      text: 'I listed my property on Haven Estate and had a great experience. The platform made it easy to manage my rental and connect with potential renters. I highly recommend it!',
    },
  ];

  return (
    <div className="about-page pt-9">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-left">
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome to <span className='text-slate-500 text-4xl'>Haven</span>
          <span className='text-slate-700 text-4xl'>Estate</span></h1>
          <p className="text-lg mb-6 ">
            We are more than just a rental platform  a community of like-minded individuals who believe in the power of connection and shared experiences.
          </p>
          <p className="text-lg mb-6">
            Our mission is to provide a seamless and enjoyable rental experience, whether you're a homeowner looking to rent out your property or a traveler seeking a unique place to call home.
          </p>
          <p className="text-lg mb-6">
            we are passionate about creating a platform that fosters trust, respect, and open communication between our users. Our team is dedicated to ensuring that every interaction on our site is safe, secure, and stress-free.
          </p>
          <p className="text-lg mb-6">
            From cozy apartments to spacious houses, we believe that everyone deserves a place to feel at home. Thats why we are committed to providing a diverse range of listings that cater to all tastes and preferences.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mt-8">
              Join Now
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">
                <h3 className="text-lg font-medium mb-4">{index === 0 ? 'Trust and Safety' : index === 1 ? 'Diverse Listings' : 'Community Connection'}</h3>
                <p className="text-gray-500 mb-6">
                  {index === 0 ? 'Our platform is designed to prioritize trust and safety. We have a team of experienced professionals who are dedicated to ensuring that every interaction on our site is safe and secure.' : index === 1 ? 'We believe in the diversity of listings that cater to all tastes and preferences. From cozy apartments to spacious houses, we have something for everyone.' : 'We believe in the power of connection and shared experiences. Our platform is designed to facilitate connections between homeowners and renters, fostering a sense of community and belonging.'}
                </p>
                <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt={index === 0 ? 'Trust and Safety' : index === 1 ? 'Diverse Listings' : 'Community Connection'} className="w-full h-auto" />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="flex flex-col gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex items-center gap-4 opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                  <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt={index === 0 ? 'Testimonial 1' : 'Testimonial 2'} className="w-12 h-12 rounded-full shadow-md" />
                  <div>
                    <p className="text-lg font-bold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <p key={index} className="text-gray-500 mb-6 opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                  {testimonial.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
