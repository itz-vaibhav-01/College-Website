const CourseCard = ({ name, duration, eligibility }) => (
    <div className="border p-4 rounded-xl shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>Duration: {duration}</p>
      <p>Eligibility: {eligibility}</p>
    </div>
  );
  
  export default CourseCard;
  