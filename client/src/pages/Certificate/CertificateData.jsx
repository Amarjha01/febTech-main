import React, { useState } from "react";
import { motion } from "framer-motion";
import GlobalAxios from "../../../GlobalAxios/GlobalAxios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PropagateLoader } from "react-spinners";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const CertificateData = () => {
  const [loading, setLoading] = useState(false);
  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [isVerified, setIsVerified] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsVerified(null);
    try {
      const certificateId = e.target.certificateId.value;
      const response = await GlobalAxios.get(
        `/user/certificate/verify/${certificateId}`
      );
      const data = response.data.data;
      console.log(data);

      if (response.data.status === "success") {
        if (response.data.verified) {
          setCertificate({
            certificate: data.certificate,
            name: data.name,
            issued_date: data.issued_date,
          });
          setIsVerified(true);
          toast.success("Certificate found successfully");
        } else {
          setCertificate(null);
          setIsVerified(false);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificate.certificate;
    link.download = `Certificate-${certificateId}.jpg`; // Assuming the certificate is an image file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-[100%]  min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6">Certificate Verification</h1>
      <form
        className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg flex flex-col gap-4"
        onSubmit={handleVerify}
      >
        <label htmlFor="certificateId" className="font-semibold text-gray-700">
          Certificate Number
        </label>
        <input
          required
          onChange={(e) => setCertificateId(e.target.value)}
          type="text"
          id="certificateId"
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(17,54,255)]"
        />
        {loading ? 
        <div className="mt-8 text-center">
          <PropagateLoader color="#1136ff" />
        </div> : <button
          type="submit"
          className="bg-[#1136ff] text-white py-2 rounded-lg hover:bg-[#1336fd] transition duration-300"
        >
          Verify
        </button>
      }
      </form>

      

      {!loading && isVerified === false && (
        <div className="mt-4 flex items-center text-red-500">
          <AiOutlineCloseCircle className="mr-2" size={24} />
          <p className="text-lg">The certificate number is invalid.</p>
        </div>
      )}

      {!loading && isVerified && certificate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[70%]  mt-8 bg-white p-8 shadow-md rounded-lg flex flex-col items-center gap-4"
        >
          <div className="flex items-center text-green-500">
            <AiOutlineCheckCircle className="mr-2" size={24} />
            <p className="text-xl font-semibold">Certificate Verified</p>
          </div>
          <p className="text-lg">Student Name: {certificate.name}</p>
          <p className="text-lg">Issue Date: {certificate.issued_date}</p>
          <img
            src={certificate.certificate}
            alt="Certificate"
            className="w-full mb-4 rounded-lg"
          />
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Download Certificate
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CertificateData;
