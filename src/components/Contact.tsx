import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    setLoading(true);

    const body = `
    Name: ${formData.name}
    Email: ${formData.email}
    Message:
    ${formData.message}`;

    const mailtoUrl = `mailto:inshadshaheedhul@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setLoading(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-semibold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let's Build Something <span className="text-emerald-400">Great Together</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Have a project in mind or want to collaborate? Send a message and let's connect!
          </p>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Feel free to reach out directly via email, phone, or by submitting the contact form. I respond within 24 hours.
              </p>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/40 transition-colors">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Email Address</span>
                <span className="text-sm font-semibold text-white">{PERSONAL_INFO.socials.email}</span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/40 transition-colors">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Phone Number</span>
                <span className="text-sm font-semibold text-white">{PERSONAL_INFO.mobile}</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/40 transition-colors">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Location</span>
                <span className="text-sm font-semibold text-white">{PERSONAL_INFO.address}</span>
              </div>
            </div>

            {/* Availability Status Badge Card */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Available for Freelance & Full-time Opportunities
              </span>
            </div>
          </div>

          {/* Right Column: Styled Contact Form Container */}
          <div className="lg:col-span-7 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold tracking-wider uppercase text-neutral-300 mb-2">
                    Your Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="e.g. David Beckam"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold tracking-wider uppercase text-neutral-300 mb-2">
                    Your Email <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="e.g. david@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-bold tracking-wider uppercase text-neutral-300 mb-2">
                  Subject <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="Project Inquiry / Hiring"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold tracking-wider uppercase text-neutral-300 mb-2">
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  placeholder="Tell me about your project goals, timeline, and scope..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{loading? "Sending.." : "Send Message"}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};