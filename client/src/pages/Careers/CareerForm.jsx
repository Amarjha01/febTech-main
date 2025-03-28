import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalAxios from "../../../GlobalAxios/GlobalAxios";
import { PropagateLoader } from "react-spinners";
import axios from "axios";

const CareerForm = () => {
  const [careerData, setCareerData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    apply_for: "",
    file: null,
  });
console.log('log:' , careerData)
  const [roles, setRoles] = useState([
    { id: "web-dev", name: "Web Development" },
    { id: "graphic-design", name: "Graphic Designing" },
    { id: "wordpress-dev", name: "WordPress Development" },
  ]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchRoles = async () => {
  //     try {
  //       const response = await GlobalAxios.get("/user/career_options");
  //       if (response.data.status === "success") {
  //         setRoles(response.data.data);
  //       } else {
  //         console.error("Failed to fetch roles");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching roles:", error);
  //     }
  //   };

  //   fetchRoles();
  // }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setCareerData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setCareerData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // const handleSubmit = async (e) => {
  //   console.log('sub', careerData)
  //   e.preventDefault();
  //   setLoading(true);

  //   const formData = new FormData();
  //   formData.append("full_name", careerData.full_name);
  //   formData.append("email", careerData.email);
  //   formData.append("mobile_number", careerData.mobile_number);
  //   formData.append("apply_for", careerData.apply_for);
  //   formData.append("file", careerData.file);
  //  console.log('form data', formData)
  //   try {
  //     let response = await fetch("http://localhost:5000/api/career", {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json", 
  //       },
  //       body: JSON.stringify(careerData), 
  //     });

  //     if (response.data.status === "success") {
  //       toast.success("Your application has been submitted successfully!", {
  //         position: "top-right",
  //       });

  //       setCareerData({
  //         full_name: "",
  //         email: "",
  //         mobile_number: "",
  //         apply_for: "",
  //         file: null,
  //       });

  //       document.getElementById("file").value = null;
  //     } else {
  //       throw new Error("Submission failed");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to submit your application. Please try again.", {
  //       position: "top-right",
  //     });
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    formData.append("full_name", careerData.full_name);
    formData.append("email", careerData.email);
    formData.append("mobile_number", careerData.mobile_number);
    formData.append("apply_for", careerData.apply_for);
    formData.append("file", careerData.file);
  
    try {
      let response = await fetch("http://localhost:5000/api/career", {
        method: "POST",
        body: formData, // ✅ Sending FormData directly
      });
  
      const data = await response.json(); // ✅ Ensure response is parsed properly
  console.log('response', data)
      if (data.success === true) {
        toast.success("Application submitted successfully!", { position: "top-right" });
  
        setCareerData({
          full_name: "",
          email: "",
          mobile_number: "",
          apply_for: "",
          file: null,
        });
  
        document.getElementById("file").value = null;
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Failed to submit application. Try again.", { position: "top-right" });
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      id="cForm"
      className="w-[85%] my-10 border border-black mx-auto bg-white flex flex-col items-center gap-10"
    >
      <ToastContainer />
      <div className="mt-16">
        <span className="text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded">
          Opportunity
        </span>
      </div>
      <p className="md:text-4xl text-2xl text-center">
        We are thrilled to have you join our team and
        <br /> look forward to a successful and productive <br />
        working relationship.
      </p>
      <form onSubmit={handleSubmit} className="w-[100%]">
        <div className="w-[85%] mx-auto flex flex-col gap-10">
          <div className="w-full flex flex-col md:flex-row gap-10">
            <input
              name="full_name"
              onChange={handleChange}
              type="text"
              id="text"
              required
              value={careerData.full_name}
              className="cclick p-4 border border-black text-black md:w-1/2 w-full"
              placeholder="Full Name"
            />
            <input
              type="tel"
              onChange={handleChange}
              id="phone"
              name="mobile_number"
              placeholder="Mobile No"
              pattern="[0-9]{10}"
              value={careerData.mobile_number}
              className="cclick p-4 border border-black md:w-1/2 w-full"
              required
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-10">
            <input
              type="email"
              onChange={handleChange}
              id="email"
              name="email"
              required
              value={careerData.email}
              className="cclick p-4 border border-black text-black md:w-1/2 w-full"
              placeholder="Email"
            />
            <select
              onChange={handleChange}
              id="text"
              name="apply_for"
              required
              value={careerData.apply_for}
              className="cclick p-4 border border-black md:w-1/2 w-full"
            >
              <option value="">Apply For ..?</option>
              {roles.map((role) => (
                <option className=" text-white" key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="file"
            name="file"
            id="file"
            required
            onChange={handleChange}
            className="border border-black p-3"
          />
        </div>
        <div className="flex justify-center items-center w-full my-10">
          {loading ? (
            <PropagateLoader color="#1136FF" />
          ) : (
            <button
              type="submit"
              className="capitalize bg-yellow-400 flex items-center justify-between px-6 py-3 gap-2 pb-shadow cursor-pointer"
            >
              <span>Apply Now</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CareerForm;