import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ContactForm = ({ isVisible, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 700);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contact, service }),
      });
      if (response.ok) {
        alert("Details submitted successfully!");
        setName("");
        setContact("");
        setService("");
        setIsLoading(false);
      } else {
        alert("Failed to submit details.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 w-64 ${
        isVisible || isClosing ? "block" : "hidden"
      }`}
    >
      <form
        id="form"
        onSubmit={handleSubmit}
        className={`bg-white border border-gray-300 p-4 shadow-md mt-4 transition-transform duration-700 ease-in-out ${
          isVisible && !isClosing ? "animate-slideIn" : "animate-slideOut"
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute text-xs font-pSans text-gray-400"
        >
          X
        </button>
        <h3 className="text-xs font-bold mb-2 text-center font-title text-gray-400">
          Tell Us About Your Need
        </h3>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full h-9 border border-gray-300 rounded mb-2 placeholder:text-xs placeholder:pl-3"
          placeholder="Name"
        />
        <input
          type="text"
          id="contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className="w-full h-9 border border-gray-300 rounded mb-2 placeholder:text-xs placeholder:pl-1"
          placeholder="Contact"
        />
        <input
          type="text"
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          className="w-full h-9 border border-gray-300 rounded mb-2 placeholder:text-xs placeholder:pl-1"
          placeholder="Service"
        />
        <button
          disabled={isLoading} // Properly passing the disabled prop
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded mt-2 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      <style>{`
        @keyframes slideIn {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(100%); opacity: 0; }
        }
        .animate-slideIn { animation: slideIn 0.7s ease-in-out; }
        .animate-slideOut { animation: slideOut 0.7s ease-in-out; }
      `}</style>
    </div>
  );
};

const HoverableDiv = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsFormVisible(true);
  };

  return (
    <div
      className="flex flex-col items-center justify-center mx-auto bg-[#ecf0f1] mt-[9.83rem] md:mt-[21.5rem] md:w-[31.25rem] md:h-[12.5rem] w-[12.9375rem] h-[2.43594rem]"
      onMouseEnter={handleMouseEnter}
    >
      <div className="text-center md:text-[3.09rem] font-semibold font-pSans md:leading-[3.6456rem] md:tracking-wide leading-[1.60169rem] tracking-[0.01356rem] text-[1.35738rem]">
        The Perfect Match!!
      </div>
      <div className="text-center md:text-4xl font-medium lowercase md:leading-[2.7rem] md:tracking-tight text-[#ff8312] font-pSans text-[1.05425rem] leading-[1.24406rem] tracking-[0.01056rem]">
        Are you the one?
      </div>
      <ContactForm
        isVisible={isFormVisible}
        onClose={() => setIsFormVisible(false)}
      />
    </div>
  );
};

export default HoverableDiv;
