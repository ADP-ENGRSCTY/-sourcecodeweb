'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  });
  
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    
    // Replace with your Formspree endpoint
    // Get this from: https://formspree.io/
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    axios({
      method: 'POST',
      url: formspreeEndpoint,
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you! Your message has been sent successfully.'
        );
      })
      .catch((error) => {
        handleServerResponse(
          false,
          error.response?.data?.error || 'Something went wrong. Please try again.'
        );
      });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleOnSubmit}
      className="space-y-6 max-w-2xl mx-auto"
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          className="w-full px-4 py-3 bg-iron-900 border border-iron-700 rounded-lg focus:border-rust focus:ring-1 focus:ring-rust outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          className="w-full px-4 py-3 bg-iron-900 border border-iron-700 rounded-lg focus:border-rust focus:ring-1 focus:ring-rust outline-none transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="_subject"
          onChange={handleOnChange}
          required
          value={inputs.subject}
          className="w-full px-4 py-3 bg-iron-900 border border-iron-700 rounded-lg focus:border-rust focus:ring-1 focus:ring-rust outline-none transition-colors"
          placeholder="What is this about?"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          rows={6}
          className="w-full px-4 py-3 bg-iron-900 border border-iron-700 rounded-lg focus:border-rust focus:ring-1 focus:ring-rust outline-none transition-colors resize-none"
          placeholder="Tell us what's on your mind..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.submitting}
        className="w-full px-6 py-3 bg-rust hover:bg-rust/90 disabled:bg-rust/50 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
      >
        {status.submitting ? (
          <>
            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : status.submitted ? (
          <>
            <Check className="h-5 w-5" />
            Sent!
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>

      {/* Status Messages */}
      {status.info.error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
        >
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-red-500">{status.info.msg}</div>
        </motion.div>
      )}
      
      {!status.info.error && status.info.msg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
        >
          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-green-500">{status.info.msg}</div>
        </motion.div>
      )}
    </motion.form>
  );
};
