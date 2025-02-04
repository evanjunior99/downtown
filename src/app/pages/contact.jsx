'use client'
import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks/page";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const form = e.target;
      const formData = new FormData(form);
      await form.submit();

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#6366f1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="text-center lg:mt-[5%] mt-10 mb-2 px-4">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Contact Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),auto] gap-8 items-start">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="w-full max-w-xl mx-auto lg:max-w-none bg-card/50 backdrop-blur-xl rounded-3xl shadow-lg border border-border p-5 py-10 sm:p-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>
              <Share2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#6366f1] opacity-50" />
            </div>

            <form 
              action="https://formsubmit.co/evanchimwaza@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User className="absolute left-4 top-4 w-5 h-5 text-muted-foreground group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-background rounded-xl border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail className="absolute left-4 top-4 w-5 h-5 text-muted-foreground group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-background rounded-xl border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground group-focus-within:text-[#6366f1] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 pl-12 bg-background rounded-xl border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-duration="1200"
            className="w-full lg:w-auto lg:sticky lg:top-10 bg-card/50 backdrop-blur-xl rounded-3xl shadow-lg border border-border p-6 sm:p-8 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">Connect With Me</h3>
            <div className="flex flex-col space-y-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;