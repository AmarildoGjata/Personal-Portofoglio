const Education = ({ level, years, description }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl border-2 border-[var(--main-color)] shadow-md hover:shadow-lg hover:bg-green-900 hover:text-black transition-all duration-300 ease-in-out">
      <h3 className="text-lg font-semibold text-[var(--main-color)] mb-2">{level}</h3>
      <p className="font-semibold text-gray-300 ml-2">{years}</p>
      <p className="font-semibold text-white ml-2">{description}</p>
    </div>
  );
};

export default Education;
