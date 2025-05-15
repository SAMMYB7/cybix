import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#e9f7f4] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#f7931e] font-medium mb-1">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Contact for any query
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-700 rounded-full p-2 mr-4 flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-blue-700 text-lg font-medium mb-2">Address</h3>
                <p className="text-gray-700">
                  44330 Mercure Cir,ste 144<br />
                  Sterling,VA-20166-USA
                </p>
              </div>
            </div>
            
            {/* Call Us Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-700 rounded-full p-2 mr-4 flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-blue-700 text-lg font-medium mb-2">Call Us</h3>
                <p className="text-gray-700">+1 2029824237</p>
              </div>
            </div>
            
            {/* Email Us Card */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-700 rounded-full p-2 mr-4 flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-blue-700 text-lg font-medium mb-2">Email Us</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@cybix.us" className="block hover:text-blue-700 transition-colors">info@cybix.us</a>
                  <a href="mailto:sales@cybix.us" className="block hover:text-blue-700 transition-colors">sales@cybix.us</a>
                  <a href="mailto:career@cybix.us" className="block hover:text-blue-700 transition-colors">career@cybix.us</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-blue-700 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <textarea 
                  rows="5" 
                  placeholder="Message"
                  className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="bg-[#f7931e] hover:bg-[#e58719] text-white font-medium px-8 py-4 rounded-md transition-colors w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;