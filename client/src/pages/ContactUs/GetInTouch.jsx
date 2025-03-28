import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PropagateLoader } from "react-spinners";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await fetch("http://localhost:5000/api/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
console.log("response:", result)
      if (!response.ok) {
        throw new Error(result.message || "Something went wrong, please try again.");
      }

      toast.success("Thank you for contacting us! We will get back to you soon.");
      
      // Clear form fields after successful submission
      setFormData({
        full_name: "",
        email: "",
        mobile_number: "",
        message: "",
      });

    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-[85%] mb-10 border border-black mx-auto bg-white flex flex-col items-center gap-10 relative top-[-100px]">
      <ToastContainer />
      <div className="mt-16">
        <span className="text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 shadow-sm rounded">
          Get In Touch
        </span>
      </div>
      <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Have Any Questions on Your Mind? <br /> Send Us a Message
      </p>
      <form onSubmit={handleSubmit} className="w-[100%]">
        <div className="w-[85%] mx-auto flex flex-col gap-10">
          <div className="w-full flex flex-col md:flex-row gap-10">
            <input
              type="text"
              onChange={handleChange}
              name="full_name"
              value={formData.full_name}
              required
              className="p-4 border border-black text-black md:w-1/3 w-full"
              placeholder="Full Name"
            />
            <input
              type="tel"
              onChange={handleChange}
              name="mobile_number"
              value={formData.mobile_number}
              required
              className="p-4 border border-black md:w-1/3 w-full"
              placeholder="Phone Number"
            />
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
              className="p-4 border border-black md:w-1/3 w-full"
              placeholder="E-mail"
            />
          </div>
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            placeholder="Write a Message"
            className="w-[100%] h-[150px] border border-black p-4"
          ></textarea>
        </div>

        <div className="flex justify-center items-center w-full my-10">
          {loading ? (
            <PropagateLoader color="#1136FF" />
          ) : (
            <button 
              type="submit" 
              className="capitalize bg-yellow-400 flex items-center justify-between px-6 py-3 gap-2 shadow-sm rounded pb-shadow"
            >
              Send Us a Message
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
