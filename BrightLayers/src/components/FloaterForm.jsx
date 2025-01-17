import React, { useState } from "react";
import ServiceInquiryForm from "./ServiceInquiryForm.jsx";


function FloaterForm() {
  const [firstname,setFirstName]=useState("")
  const [lastname,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [brand,setBrand]=useState("")
  const [phoneno,setPhoneno]=useState("")
  const [service,setService]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("/api/send-email-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname,lastname,email,phoneno,brand,service }),
      });
      if (response.ok) {
        alert("Details submitted successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setService("");
        setBrand("");
        setPhoneno("");
        setService([]);
        setIsLoading(false)
      } else {
        alert("Failed to submit details.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
      setIsLoading(false);
    }    

  }

  return (
    <div className="w-[23.58788rem] bg-[#D9D9D9] p-6 rounded-md shadow-md relative">
      {/* Close Button */}
      <div className="flex justify-end">
        <div className="w-[1.4375rem] h-[1.0625rem] self-start mr-[1.53rem] mt-[1.94rem]">
          <span className="text-[#545454] text-right font-lexend text-[0.875rem] font-medium leading-[1.13956rem] tracking-[0.00875rem]">
            X
          </span>
        </div>
      </div>

      {/* Form Section Inside the Floater */}
      <form className="mt-[9.49rem]" onSubmit={handleSubmit}>
        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-[#545454] font-title text-[0.764rem] font-medium leading-[0.99506rem] tracking-[0.00763rem]">First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e)=>setFirstName(e.target.value)}
              className="border-b border-black focus:outline-none focus:border-black bg-transparent py-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#545454] font-title text-[0.764rem] font-medium leading-[0.99506rem] tracking-[0.00763rem]">Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e)=>setLastName(e.target.value)}
              className="border-b border-black focus:outline-none focus:border-black bg-transparent py-1"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label className="font-medium mt-[1.45rem] text-[#545454] font-title text-[0.764rem] leading-[0.99506rem] tracking-[0.00763rem]">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border-b border-black focus:outline-none focus:border-black bg-transparent py-1"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="font-medium mt-[1.77rem] text-[#545454] font-title text-[0.764rem] leading-[0.99506rem] tracking-[0.00763rem]">Phone Number</label>
          <input
            type="tel"
            value={phoneno}
              onChange={(e)=>setPhoneno(e.target.value)}
            className="border-b border-black focus:outline-none focus:border-black bg-transparent py-1"
          />
        </div>

        {/* Brand Website */}
        <div className="flex flex-col">
          <label className="font-medium mt-[1.77rem] text-[#545454] font-title text-[0.764rem] leading-[0.99506rem] tracking-[0.00763rem]">Brand Website</label>
          <input
            type="url"
            value={brand}
              onChange={(e)=>setBrand(e.target.value)}
            className="border-b border-black focus:outline-none focus:border-black bg-transparent py-1"
          />
        </div>

        {/* Tell Us About Your Brand */}
        <div className="flex flex-col">
          <label className="font-medium mt-[0.38rem] text-[#545454] font-title text-[0.764rem] leading-[0.99506rem] tracking-[0.00763rem]">Tell Us About Your Brand</label>
          <textarea
            rows="4"
            className="border-b border-black focus:outline-none focus:border-black bg-transparent py-1 resize-none"
          ></textarea>
        </div>
        <ServiceInquiryForm servicereq={service} setService={setService}/>
      </form>
      
      
    </div>
  );
}

export default FloaterForm;
