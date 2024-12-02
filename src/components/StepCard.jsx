const StepCard = ({ icon, title, bgColor }) => {
  return (
    <div className={`p-16 flex flex-col items-center text-center ${bgColor}`}>
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
    </div>
  );
};

export default StepCard;
