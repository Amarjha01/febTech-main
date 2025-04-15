import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const CertificateData = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Load data from public folder
    fetch("/certificate_data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setFiltered(json);
      })
      .catch((err) => {
        console.error("Error loading certificate data:", err);
      });
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    const filteredData = data.filter((item) => {
      const name = (item["Unnamed: 0"] || "").toLowerCase();
      const certNum = (item["Unnamed: 3"] || "").toLowerCase();
      return name.includes(search.toLowerCase()) || certNum.includes(search.toLowerCase());
    });
    
    setFiltered(filteredData);
  }, [search, data]);

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Certificate Records</h1>
      <div className="mb-4 flex items-center gap-2">
        <AiOutlineSearch className="text-xl" />
        <input
          type="text"
          placeholder="Search by name or certificate number"
          className="border p-2 rounded-md w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-auto rounded-lg shadow max-h-[70vh]">
        <table className="w-full table-auto bg-white text-sm text-left">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th className="p-2 border">Certificate Number</th>
              <th className="p-2 border">Name</th>
              {/* <th className="p-2 border">Email</th> */}
              <th className="p-2 border">Course</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border">{item["Unnamed: 3"]}</td>
                <td className="p-2 border">{item["Unnamed: 0"]}</td>
                {/* <td className="p-2 border">N/A</td>  */}
                <td className="p-2 border">{item["Unnamed: 2"]}</td>
                <td className="p-2 border">
                  {new Date(item["Unnamed: 1"]).toLocaleDateString()}
                </td>
              </tr>
              
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No certificates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificateData;
