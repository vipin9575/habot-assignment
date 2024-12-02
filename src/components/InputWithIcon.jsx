const InputWithIcon = ({ icon, placeholder }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded p-4 w-full sm:w-1/2">
      <img src={icon} alt="icon" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 ms-3"
      />
    </div>
  );
};

export default InputWithIcon;
