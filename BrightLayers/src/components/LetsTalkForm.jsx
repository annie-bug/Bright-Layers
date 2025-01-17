import ToggleCheckbox from '../components/ToggleCheckbox.jsx'

function LetsTalkForm() {
  return (
    <div className="h-auto">
      {/* Grid for Form Fields */}
      <div className="grid grid-cols-2 gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10">
        {/* First Name */}
        <div className="relative z-0">
          <input
            type="text"
            className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform origin-left -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
            First Name
          </label>
        </div>

        {/* Last Name */}
        <div className="relative z-0 mb-4 lg:mb-5 xl:mb-6">
          <input
            type="text"
            className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform origin-left -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
            Last Name
          </label>
        </div>
      </div>

      {/* Email */}
      <div className="relative z-0 mb-4 lg:mb-5 xl:mb-6">
        <input
          type="text"
          className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform origin-left -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Email
        </label>
      </div>

      {/* Phone Number */}
      <div className="relative z-0 mb-12 lg:mb-14 xl:mb-16">
        <input
          type="text"
          className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform origin-left -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Phone Number
        </label>
      </div>

      {/* Tell Us About Your Brand */}
      <div className="relative z-0 mb-12 lg:mb-14 xl:mb-16">
        <textarea
          className="block pl-2 pt-4 w-full h-32 lg:h-36 xl:h-40 text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-600 peer resize-none"
          placeholder=" "
          required
        ></textarea>
        <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform -translate-y-6 lg:-translate-y-7 xl:-translate-y-8 scale-75 origin-left -top-2 peer-placeholder-shown:left-4 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Tell Us About Your Brand
        </label>
      </div>

      {/* Services Inquiry */}
      <div className="relative z-0 mb-4 lg:mb-5 xl:mb-6">
        <input
          type="text"
          className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 origin-left peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          What Service Are You Inquiring About?
        </label>
      </div>

      {/* Checkboxes */}
      <div className="grid grid-cols-2 gap-6 lg:gap-7 xl:gap-8 py-4 lg:py-5 xl:py-6">
        {[
          "Social Media Marketing",
          "Branding & Imagery",
          "Email Marketing",
          "Social Media Adverts",
          "Strategy Development",
        ].map((label, index) => (
          <label
            key={index}
            className={`flex items-center space-x-2 ${
              label === "Strategy Development" ? "col-span-2" : ""
            }`}
          >
            <ToggleCheckbox />
            <span className="text-[#535353] text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium font-title leading-loose tracking-tight">
              {label}
            </span>
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <div className="text-left">
        <button
          type="submit"
          className="mt-6 lg:mt-7 xl:mt-8 px-8 lg:px-9 xl:px-10 py-2 bg-[#d9d9d9] text-[#535353] text-lg lg:text-xl xl:text-2xl font-medium hover:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LetsTalkForm;