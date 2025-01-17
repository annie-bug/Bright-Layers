import React, { useState } from "react";

function ServiceInquiryForm(props) {
  const [selectedServices, setSelectedServices] = useState([]);
  const {servicereq,setService}=props
  const services = [
    "Strategy Development",
    "Branding & Imagery",
    "Email Marketing",
    "Social Media Adverts.",
    "Social Media Marketing",
  ];

  const handleSelection = (service) => {
    setSelectedServices(
      (prev) =>
        prev.includes(service)
          ? prev.filter((s) => s !== service) // Unselect if already selected
          : [...prev, service] // Add if not selected
    );
    setService([...servicereq,{value:service}])
  };

  return (
    <div className="bg-[#D9D9D9]">
      <h2 className="text-[#545454] font-title text-[0.764rem] font-medium leading-[0.99506rem] tracking-[0.00763rem] mt-[1.5rem]">
        What Service Are You Inquiring About?
      </h2>
      <div className="grid grid-cols-2 gap-x-[0.83rem]">
        {services.map((service, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleSelection(service)}
          >
            <span className="w-5 h-5 flex justify-center items-center mt-[1.6rem]">
              {selectedServices.includes(service) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M6.84568 13.6914C5.49173 13.6914 4.16819 13.2899 3.04243 12.5377C1.91666 11.7854 1.03923 10.7163 0.521099 9.46541C0.00296612 8.21453 -0.132601 6.83809 0.131541 5.51016C0.395683 4.18223 1.04767 2.96244 2.00506 2.00506C2.96244 1.04767 4.18223 0.395683 5.51016 0.131541C6.83809 -0.132601 8.21453 0.00296612 9.46541 0.521099C10.7163 1.03923 11.7854 1.91666 12.5377 3.04243C13.2899 4.16819 13.6914 5.49173 13.6914 6.84568C13.6914 8.66127 12.9701 10.4025 11.6863 11.6863C10.4025 12.9701 8.66127 13.6914 6.84568 13.6914ZM6.84568 0.977957C5.68516 0.977957 4.55069 1.32209 3.58575 1.96685C2.62081 2.6116 1.86873 3.52801 1.42461 4.6002C0.980497 5.67239 0.864296 6.85219 1.0907 7.99042C1.31711 9.12865 1.87596 10.1742 2.69657 10.9948C3.51719 11.8154 4.56272 12.3743 5.70095 12.6007C6.83917 12.8271 8.01898 12.7109 9.09116 12.2668C10.1634 11.8226 11.0798 11.0706 11.7245 10.1056C12.3693 9.14067 12.7134 8.00621 12.7134 6.84568C12.7134 5.28947 12.0952 3.79699 10.9948 2.69657C9.89438 1.59616 8.4019 0.977957 6.84568 0.977957Z"
                    fill="#545454"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303298 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303298 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1C5.81331 1 4.65328 1.3519 3.66658 2.01118C2.67989 2.67047 1.91085 3.60755 1.45673 4.7039C1.0026 5.80026 0.88378 7.00666 1.11529 8.17054C1.3468 9.33443 1.91825 10.4035 2.75736 11.2426C3.59648 12.0818 4.66557 12.6532 5.82946 12.8847C6.99335 13.1162 8.19975 12.9974 9.2961 12.5433C10.3925 12.0892 11.3295 11.3201 11.9888 10.3334C12.6481 9.34673 13 8.18669 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1ZM6.33 9.375L10.83 5.375L10.17 4.625L6 8.315L3.855 6.145L3.145 6.855L5.645 9.355C5.69172 9.40134 5.74713 9.438 5.80805 9.46289C5.86897 9.48777 5.9342 9.50038 6 9.5C6.12154 9.49983 6.23885 9.45539 6.33 9.375Z"
                    fill="#545454"
                  />
                </svg>
              )}
            </span>
            <span className="text-[#545454] font-title text-[0.764rem] font-medium leading-[0.99506rem] tracking-[0.00763rem] mt-[1.6rem]"
            
            >
              {service}
            </span>
          </label>
        ))}
      </div>
      <button className="mt-[4.06rem] w-[4.43138rem] h-[1.253rem] bg-[#1A3F60] text-white text-center font-title text-[0.764rem] font-medium leading-[0.99506rem] tracking-[0.00763rem]">
        Submit
      </button>
    </div>
  );
}

export default ServiceInquiryForm;
