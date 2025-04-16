import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const PopUpContact = () => {
  const [close, setClose] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (close) {
      const timer = setTimeout(() => setClose(false), 15000);
      return () => clearTimeout(timer);
    }
  }, [close]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSehtU9SNWbKdVn3Vug1aYog8pLX_z9WCKDfLVYogoV3qA59SA/formResponse";

  const ENTRY_NAME = "entry.2005620554";
  const ENTRY_EMAIL = "entry.1045781291";
  const ENTRY_PHONE = "entry.1166974658";
  const ENTRY_SERVICE = "entry.839337160";
  const ENTRY_MESSAGE = "entry.1065046570";

  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    // Create and submit the form programmatically
    const form = document.createElement("form");
    form.method = "POST";
    form.action = FORM_ACTION_URL;
    form.target = "hidden_iframe";
    form.style.display = "none";
    
    // Add all the form fields
    const nameField = document.createElement("input");
    nameField.name = ENTRY_NAME;
    nameField.value = data.fullName;
    form.appendChild(nameField);
    
    const emailField = document.createElement("input");
    emailField.name = ENTRY_EMAIL;
    emailField.value = data.email;
    form.appendChild(emailField);
    
    const phoneField = document.createElement("input");
    phoneField.name = ENTRY_PHONE;
    phoneField.value = data.phone;
    form.appendChild(phoneField);
    
    const serviceField = document.createElement("input");
    serviceField.name = ENTRY_SERVICE;
    serviceField.value = data.service;
    form.appendChild(serviceField);
    
    const messageField = document.createElement("textarea");
    messageField.name = ENTRY_MESSAGE;
    messageField.value = data.message;
    form.appendChild(messageField);
    
    // Append to body and submit
    document.body.appendChild(form);
    form.submit();
    
    // Set a timeout to ensure we recognize submission completed
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      reset();
      alert("Form submitted successfully!");
      document.body.removeChild(form);
    }, 2000);
  };

  // Handle iframe load - might trigger multiple times
  const handleIframeLoad = () => {
    if (isSubmitting && submitted) {
      setSubmitted(false);
    }
  };

  return (
    <>
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        ref={iframeRef}
        onLoad={handleIframeLoad}
      ></iframe>

      {!close && (
        <motion.div
          className="fixed bottom-5 right-3 md:right-10 lg:right-20 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-80 rounded-2xl bg-white/90 shadow-xl backdrop-blur-xl p-6 border border-gray-200">
            <button
              onClick={() => setClose(true)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:scale-110 transition-transform duration-300"
              aria-label="Close"
            >
              <MdClose size={24} />
            </button>

            <motion.h2
              className="text-3xl font-bold text-center mb-6 text-blue-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Enquire Now
            </motion.h2>

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  {...register("fullName", { required: "Full Name is required" })}
                  className="w-full p-2 pl-10 border rounded-md"
                  placeholder="Full Name"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit number",
                    },
                  })}
                  className="w-full p-2 pl-10 border rounded-md"
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full p-2 pl-10 border rounded-md"
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="relative">
                <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  {...register("service", { required: "Please select a service" })}
                  className="w-full p-2 pl-10 border rounded-md"
                >
                  <option value="">Select Service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Software Development">Software Development</option>
                  <option value="SEO">SEO</option>
                  <option value="Payment Gateway">Payment Gateway</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="SMM">SMM</option>
                  <option value="E-Commerce Website">E-Commerce Website</option>
                  <option value="E-Commerce Management">E-Commerce Management</option>
                </select>
                {errors.service && (
                  <p className="text-sm text-red-500">{errors.service.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full p-2 border rounded-md"
                  placeholder="Your Message"
                  rows="3"
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-2 rounded-md flex items-center justify-center gap-2 transition font-semibold text-white ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <IoSend /> Submit
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PopUpContact;