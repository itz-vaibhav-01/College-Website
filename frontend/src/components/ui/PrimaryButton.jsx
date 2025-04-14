// src/components/ui/PrimaryButton.jsx
const PrimaryButton = ({ children, onClick, type = "button" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
      >
        {children}
      </button>
    );
  };
  
  export default PrimaryButton;
  